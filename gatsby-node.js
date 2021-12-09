const path = require("path");
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
