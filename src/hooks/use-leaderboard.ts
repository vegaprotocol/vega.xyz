import { useEffect, useState } from 'react'

export const useLeaderboard = ({ url }) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState(<{}[]>[])
  const [loading, setLoading] = useState(true)
  const limit = 10

  const removeDoubleQuotes = (str: string | number) => {
    if (typeof str !== 'string') return str
    else {
      return str.replace(/(^"|"$)/g, '')
    }
  }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        let csv = data
        const lines = csv.replace(/(\r)/gm, '').split('\n')
        const keys = lines[0].replace(/(\r\n|\n|\r)/gm, '').split(',')
        let leaderboard: {}[] = []

        for (let i = 1; i < (limit ? limit + 1 : lines.length); ++i) {
          if (lines[i]) {
            const values: (string | number)[] = lines[i].split(',')
            const dict = {}

            // omit blank entries and those with fewer than 4 points
            if (values[1] === '' || values[2] < 4) continue

            for (let k = 0; k < keys.length; ++k) {
              dict[removeDoubleQuotes(keys[k])] = removeDoubleQuotes(values[k])
            }
            leaderboard.push(dict)
          }
        }
        setData(leaderboard)
        setLoading(false)
      })
      .catch((error) => {
        console.log(url, error)
        setLoading(false)
        setError(true)
      })
  }, [])

  return { data, loading, error }
}
