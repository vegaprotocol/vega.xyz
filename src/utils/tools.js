export const SnakeToCamel = (str) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '.' + chr)
}

export const routeThroughInterstitialPage = (url) => {
  return `/external-link/?url=${encodeURIComponent(url)}`
}

export const addLineBreakIfTwoWords = (str) => {
  if (str.split(' ').length === 2) {
    return str.replace(' ', '<br>')
  } else {
    return str
  }
}

export const formatNumberWithSuffix = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k'
  } else {
    return number.toString()
  }
}

export const formatVegaValue = (value) => {
  return `${(parseInt(value) / 1000000000000000000).toFixed(2)} $VEGA`
}
