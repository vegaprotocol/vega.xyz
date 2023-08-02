import { useState, useEffect } from 'react'

const useUsers = () => {
  const [users, setUsers] = useState<null | number>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const thirtyDays = 30 * 24 * 60 * 60 * 1000000000

        let vegaTimeResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/time`
        )
        const vegaTime = await vegaTimeResponse.json()

        const withinThirtyDays = vegaTime.timestamp - thirtyDays

        let marginLevelsResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/api/v2/margin/levels`
        )
        const marginLevels = await marginLevelsResponse.json()

        const recenttMarginLevels = marginLevels.marginLevels.edges.filter(
          (level) => {
            return level.node.timestamp > withinThirtyDays
          }
        )

        let partyIds = new Set()
        recenttMarginLevels.forEach((level) => {
          partyIds.add(level.node.partyId)
        })

        const users = partyIds.size

        setUsers(users)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return { users, loading, error }
}

export default useUsers
