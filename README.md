[![Netlify Status](https://api.netlify.com/api/v1/badges/300c8347-d327-4192-a819-b49a684e06df/deploy-status)](https://app.netlify.com/sites/vega/deploys)

# Vega.xyz website

Welcome to the repo for the new [vega.xyz](https://vega.xyz) website.

## Tech stack

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Gatsby](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)

## Development

```
yarn install
gatsby develop
```

## Deployment

Netlify is configured for continuous deployment.

---

## i18n

The website uses [gatsby-plugin-react-i18next](https://github.com/microapps/gatsby-plugin-react-i18next) plugin to handle translations. This is based on [react-i18next](https://react.i18next.com/).

### Locale files

Locale files can be found in `~/locales`. The convention is to create a separate file for each page, component, or JSON object with the prefix of either `page`, `component`, or `content`.

Text intended to be translated should be treated as follows:

```
<Trans t={t}>Text to be translated</Trans>
```

or

```
{t("Text to be translated")}
```

### Markdown files

Translations for markdown files in `~/src/content` are specified using file extensions. For example:

- index.en.md
- index.es.md
- index.ru.md
