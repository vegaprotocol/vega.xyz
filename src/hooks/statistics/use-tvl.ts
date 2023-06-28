import { useState, useEffect } from 'react'

const useTvl = () => {
  const [tvl, setTvl] = useState<null | number>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTvl = async () => {
      setLoading(true)
      try {
        let tvlResponse = await fetch(`https://api.llama.fi/tvl/vega-protocol`)
        const tvl = await tvlResponse.json()

        setTvl(tvl)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchTvl()
  }, [])

  return { tvl, loading, error }
}

export default useTvl
