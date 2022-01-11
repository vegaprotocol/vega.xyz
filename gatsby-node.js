const path = require("path");
const fetch = require(`node-fetch`);
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    node.collection = getNode(node.parent).sourceInstanceName;
    const category = node.frontmatter.category;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `category`,
      value: category,
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
  const contributorsData = await fetch(
    `https://contributors.vega.win/contributors`
  );
  const contributorsResultData = await contributorsData.json();

  contributorsResultData.github_contributors.forEach((contributor) => {
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

  const incentivesData = await fetch(
    `https://notion-api.vega.win/query?id=aa64c6a0-0e0d-460d-ad44-ceacc6cd5957`
  );
  const incentivesResultData = await incentivesData.json();
  incentivesResultData.notion_data.forEach((incentive) => {
    const node = {
      name: incentive.properties.find((o) => o.name === "Name").values,
      type: incentive.properties.find((o) => o.name === "Type").values,
      status: incentive.properties.find((o) => o.name === "Status").values,
      reward: incentive.properties.find((o) => o.name === "Reward").values,
      end_date: incentive.properties.find((o) => o.name === "End Date").values,
      start_date: incentive.properties.find((o) => o.name === "Start Date")
        .values,
      link: incentive.properties.find((o) => o.name === "Link").values,
      tags: incentive.properties.find((o) => o.name === "Tags").values,

      id: createNodeId(`incentive-${incentive.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Incentives`,
        contentDigest: createContentDigest(incentive),
      },
    };
    actions.createNode(node);
  });
};
