const path = require("path");
const fetch = require(`node-fetch`);
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    node.collection = getNode(node.parent).sourceInstanceName;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            collection
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.fields.slug;
    const template = edge.node.collection;

    createPage({
      component: path.resolve(`./src/templates/${template}.js`),
      path: `${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const result = await fetch(`https://contributors.vega.win/contributors`);
  const resultData = await result.json();

  resultData.github_contributors.forEach((contributor) => {
    const node = {
      username: contributor.login,
      avatar: contributor.avatar_url,
      total_contributions: contributor.total_contributions,
      id: createNodeId(`contributors-${contributor.login}`),
      parent: null,
      children: [],
      internal: {
        type: `Contributors`,
        contentDigest: createContentDigest(contributor),
      },
    };
    actions.createNode(node);
  });
};
