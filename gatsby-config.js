require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    url: "https://vega.xyz",
    title: "Vega Protcol",
    titleTemplate: "%s | Vega Protocol",
    description:
      "Vega is a protocol for creating and trading derivatives on a fully decentralised network.",
    image: "/images/vega-og.jpg",
    twitter: "@vegaprotocol",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-dark-mode",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `es`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        fallbackLanguage: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
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
  ],
};
