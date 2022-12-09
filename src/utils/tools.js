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
