import { useState, useEffect } from 'react'

const useTotalMarkets = () => {
  const [totalMarkets, setTotalMarkets] = useState<null | number>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTotalMarkets = async () => {
      setLoading(true)
      try {
        let epochResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/api/v2/markets`
        )
        const markets = await epochResponse.json()

        const totalMarkets = markets.markets.edges.filter((market) => {
          return market.node.state === 'STATE_ACTIVE'
        }).length

        setTotalMarkets(totalMarkets)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchTotalMarkets()
  }, [])

  return { totalMarkets, loading, error }
}

export default useTotalMarkets
