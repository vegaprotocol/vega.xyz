import { BigNumber } from 'bignumber.js'
import isNil from 'lodash/isNil'
import memoize from 'lodash/memoize'

export const getUserLocale = () => 'default'

const MIN_FRACTION_DIGITS = 2
const MAX_FRACTION_DIGITS = 20

export function toBigNum(
  rawValue: string | number,
  decimals: number
): BigNumber {
  return new BigNumber(rawValue || 0).dividedBy(Math.pow(10, decimals))
}

export function addDecimal(
  value: string | number,
  decimals: number,
  decimalPrecision = decimals
): string {
  if (!decimals) return value.toString()
  if (!decimalPrecision || decimalPrecision < 0) {
    return toBigNum(value, decimals).toFixed(0)
  }
  return toBigNum(value, decimals).toFixed(decimalPrecision)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
export const getNumberFormat = memoize((digits: number) => {
  if (isNil(digits) || digits < 0) {
    return new Intl.NumberFormat(getUserLocale())
  }
  return new Intl.NumberFormat(getUserLocale(), {
    minimumFractionDigits: Math.min(Math.max(0, digits), MIN_FRACTION_DIGITS),
    maximumFractionDigits: Math.min(Math.max(0, digits), MAX_FRACTION_DIGITS),
  })
})

/** formatNumber will format the number with fixed decimals
 * @param rawValue - should be a number that is not outside the safe range fail as in https://mikemcl.github.io/bignumber.js/#toN
 * @param formatDecimals - number of decimals to use
 */
export const formatNumber = (
  rawValue: string | number | BigNumber,
  formatDecimals = 0
) => {
  return getNumberFormat(formatDecimals).format(Number(rawValue))
}

export const addDecimalsFormatNumber = (
  rawValue: string | number,
  decimalPlaces: number,
  formatDecimals: number = decimalPlaces
) => {
  const x = addDecimal(rawValue, decimalPlaces)

  return formatNumber(x, formatDecimals)
}

export const formatNumberPercentage = (value: BigNumber, decimals?: number) => {
  const decimalPlaces =
    typeof decimals === 'undefined' ? Math.max(value.dp() || 0, 2) : decimals
  return `${formatNumber(value, decimalPlaces)}%`
}
