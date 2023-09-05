const theme = require('./theme')
const vegaCustomClasses = require('./vega-custom-classes')
const { VegaColours } = require('./vega-colours')

module.exports = {
  theme,
  themelite,
  plugins: [vegaCustomClasses],
  VegaColours,
}
