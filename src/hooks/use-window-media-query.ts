import { useState, useEffect } from 'react'

const useWindowMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handleMediaChange = (event) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [query])

  return matches
}

export default useWindowMediaQuery
