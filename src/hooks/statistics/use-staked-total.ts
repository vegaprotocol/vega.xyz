import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'

const useStakedTotal = () => {
  const [stakedTotal, setStakedTotal] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStakedTotal = async () => {
      setLoading(true)
      try {
        let epochResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/api/v2/epoch`
        )
        const epochs = await epochResponse.json()

        let stakedTotal = new BigNumber(0)
        epochs.epoch.validators.forEach((validator) => {
          let validatorTotal = new BigNumber(validator.stakedTotal)
          stakedTotal = stakedTotal.plus(validatorTotal)
        })

        const stakedTotalVal = stakedTotal
          .dividedBy(Math.pow(10, 18))
          .dp(2)
          .toString()

        setStakedTotal(stakedTotalVal)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchStakedTotal()
  }, [])

  return { stakedTotal, loading, error }
}

export default useStakedTotal
