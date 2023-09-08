const path = require(`path`)
const fetch = require(`node-fetch`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const spawn = require('cross-spawn')
import languages from './languages.js'

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const path = createFilePath({ node, getNode, basePath: `content` })
    const pathComponents = path.split('/').slice(1, -1)
    node.collection = getNode(node.parent).sourceInstanceName
    const category = node.frontmatter.category
    const slug = pathComponents[0]

    let locale = 'en'

    // extract locale from file extension
    if (pathComponents[pathComponents.length - 1]) {
      locale = pathComponents[pathComponents.length - 1]
        .split('.')
        .slice(-1)
        .pop()
    }

    if (pathComponents.length > 0 && parseInt(pathComponents[0])) {
      createNodeField({
        node,
        name: `order`,
        value: parseInt(pathComponents[0]),
      })
    }

    createNodeField({
      node,
      name: `locale`,
      value: locale,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `category`,
      value: category,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query AllMarkDownRemark {
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
  `)

  response.data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.fields.slug
    const template = edge.node.collection

    if (['jobs'].includes(template)) {
      createPage({
        component: path.resolve(`./src/templates/${template}.js`),
        path: `careers/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }
  })

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { collection: { in: ["insights", "talks"] } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        group(field: fields___locale) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const postsPerPage = 10

  languages.forEach((language) => {
    const group = result.data.allMarkdownRemark.group.find(
      (g) => g.fieldValue === language.code
    )
    const totalCount = group ? group.totalCount : 0
    const numPages = Math.ceil(totalCount / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      if (language.code === 'en') {
        createPage({
          path: i === 0 ? `/insights` : `/insights/${i + 1}`,
          component: path.resolve('./src/templates/insights.tsx'),
          context: {
            language: 'en',
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      } else {
        createPage({
          path:
            i === 0
              ? `/${language.code}/insights`
              : `/${language.code}/insights/${i + 1}`,
          component: path.resolve('./src/templates/insights.tsx'),
          context: {
            language: language.code,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.asc$/i,
          use: 'raw-loader',
        },
      ],
    },
  })
}

exports.onPreInit = () => {
  const result = spawn.sync('yarn', ['i18next', 'src/**/*.{js,tsx}'], {
    stdio: 'inherit',
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      featuredImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}
