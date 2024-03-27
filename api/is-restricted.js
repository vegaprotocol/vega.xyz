const BLOCKED_COUNTRIES = ['US', 'CU', 'KP', 'IR', 'SY', 'GB']

function getCountry(req) {
  return req.headers['x-vercel-ip-country']
}

/**
 * Returns true if the country code is blocked, or unknown
 *
 * @param {Boolean} countryCode
 */
function isCountryBlocked(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    return true
  }

  if (BLOCKED_COUNTRIES.includes(countryCode)) {
    return true
  }

  return false
}

exports.default = async (req, res) => {
  const isBlocked = isCountryBlocked(getCountry(req))

  if (isBlocked) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ restricted: true })
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ restricted: false })
  }
}
