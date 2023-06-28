import { useState, useEffect } from 'react'

const useBlockTime = () => {
  const [blockTime, setBlockTime] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlockTime = async () => {
      setLoading(true)
      try {
        let statisticsResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/statistics`
        )
        const statistics = await statisticsResponse.json()
        setBlockTime(
          `${Math.round(statistics.statistics.blockDuration / 1000000)} ms`
        )
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchBlockTime()
  }, [])

  return { blockTime, loading, error }
}

export default useBlockTime
