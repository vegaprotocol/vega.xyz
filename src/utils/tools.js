export const SnakeToCamel = (str) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '.' + chr)
}

export const addLineBreakIfTwoWords = (str) => {
  if (str.split(' ').length === 2) {
    return str.replace(' ', '<br>')
  } else {
    return str
  }
}

export const formatNumberWithSuffix = (number, decimals) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(decimals ? decimals : 0) + 'B'
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(decimals ? decimals : 0) + 'M'
  } else if (number >= 1000) {
    return (number / 1000).toFixed(decimals ? decimals : 0) + 'k'
  } else {
    return number.toString()
  }
}

export const formatVegaValue = (value) => {
  return `${(parseInt(value) / 1000000000000000000).toFixed(2)} $VEGA`
}
