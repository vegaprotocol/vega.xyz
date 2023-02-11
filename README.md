[![Netlify Status](https://api.netlify.com/api/v1/badges/300c8347-d327-4192-a819-b49a684e06df/deploy-status)](https://app.netlify.com/sites/vega/deploys)

# Vega.xyz website

Welcome to the repo for the new [vega.xyz](https://vega.xyz) website.

## Tech stack

[Node.js](https://nodejs.org/) | [Yarn](https://yarnpkg.com/) | [Gatsby](https://www.gatsbyjs.com/) | [React](https://reactjs.org/) | [Tailwind](https://tailwindcss.com/) | [Netlify](https://www.netlify.com/)

## Development

```
yarn install
gatsby develop
```

## Deployment

Netlify is configured for continuous deployment.

---

# Internationalisation

The website uses [gatsby-plugin-react-i18next](https://github.com/microapps/gatsby-plugin-react-i18next) plugin to handle translations. This is based on [react-i18next](https://react.i18next.com/).

### Locale files

Translations can be found in JSON files located in `~/locales`. There is a folder for each language and a file for each individual page and component. Files follow a logical naming convention to he`lp you understand where it is referenced in the website.

Entries use natural language keys, so all you need to do is read the key and provide the translation in the right hand part of the key/value pair. For example:

```
{
  "This text needs translating": "Este texto necesita traducción"
}
```

**It is important to retain the correct positioning of any tags within the text. You might find tags such as <0>, <1> etc., and HTML elements such as &lt;p&gt; or &lt;b&gt;.**

### Markdown files

Translations for markdown files in `~/src/content` are specified using file extensions. For example:

- index.en.md
- index.es.md
- index.ru.md
- index.cn.md

Markdown files should be duplicated across every language even if they are not yet translated, otherwise they will not display on the website for the selected language.

## Identifying content that requires translation

There is a Vega+ Ambassador responsible for coordinating community efforts to create each language version of the website:

- Español (es): Angel | aikapenelope on GitHub | angeldeln111#7758 on [Discord](https://vega.xyz/discord)
- Pусский (ru): To be confirmed
- 简体中文 (cn): To be confirmed

When content is added or updated on vega.xyz and translation is required, the page will show a banner for a selected language indicating that translations are needed.

The Ambassadors will also notify the community in Discord to let everyone know there is new content ready to be translated.

## Contributing translations

Create a branch for the translations you wish to contribute. Make the necessary edits to the locale and/or markdown files. When you are done, submit a pull request with the relevant Ambassador for your language as the reviewer. The Ambassador will review the translation for accuracy before releasing it to the website.
