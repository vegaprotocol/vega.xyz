import languages from './languages.js'

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://vega.xyz`,
    title: `Vega Protcol`,
    titleTemplate: `%s | Vega Protocol`,
    description: `Discover Web3's native derivatives trading platform that is helping DeFi mature.`,
    image: `/vega-og.jpg`,
    twitter: `@vegaprotocol`,
    languages: languages,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vega.xyz`,
        short_name: `vega.xyz`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/src/content/jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `papers`,
        path: `${__dirname}/src/content/papers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talks`,
        path: `${__dirname}/src/content/talks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/src/content/faqs`,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `vegaprotocol`,
      },
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: process.env.GATSBY_VEGA_API,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: languages.map((lng) => lng.code),
        defaultLanguage: `en`,
        fallbackLanguage: `en`,
        siteUrl: `https://vega.xyz`,
        trailingSlash: 'always',
        i18nextOptions: {
          returnEmptyString: false,
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          saveMissing: true,
          nsSeparator: false,
          debug: process.env.NODE_ENV === 'development' ? true : false,
        },
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) =>
          object.collection
            ? object.collection[0].toUpperCase() +
              object.collection.slice(1).toLowerCase()
            : `Json`,
      },
    },
    {
      resolve: '@vercel/gatsby-plugin-vercel-analytics',
    },
  ],
  graphqlTypegen: true,
}
