const path = require(`path`);
const fetch = require(`node-fetch`);
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const path = createFilePath({ node, getNode, basePath: `content` });
    const pathComponents = path.split("/").slice(1, -1);
    node.collection = getNode(node.parent).sourceInstanceName;
    const category = node.frontmatter.category;
    const slug = pathComponents[0];

    let locale = "en";

    // extract locale from file extension
    if (pathComponents[1]) {
      locale = pathComponents[1].split(".").slice(-1).pop();
    }

    if (pathComponents.length > 0 && parseInt(pathComponents[0])) {
      createNodeField({
        node,
        name: `order`,
        value: parseInt(pathComponents[0]),
      });
    }

    createNodeField({
      node,
      name: `locale`,
      value: locale,
    });

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
              locale
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.fields.slug;
    const template = edge.node.collection;

    if (["jobs"].includes(template)) {
      createPage({
        component: path.resolve(`./src/templates/${template}.js`),
        path: `careers/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const incentivesData = await fetch(
    `https://notion-data-service.ops.vega.xyz/query?id=aa64c6a0-0e0d-460d-ad44-ceacc6cd5957`
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
