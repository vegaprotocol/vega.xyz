export const SnakeToCamel = (str) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '.' + chr)
}

export const routeThroughInterstitialPage = (url) => {
  return `/external-link/?url=${encodeURIComponent(url)}`
}
