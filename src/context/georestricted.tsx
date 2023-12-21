import React, { createContext, useState, useEffect } from 'react'

const url = '/api/is-restricted'
export const GeorestrictedContext = createContext({
  isGeorestricted: true,
  hasGeolocated: false,
})

export const GeorestrictedProvider = ({ children }) => {
  const [isGeorestricted, setIsGeorestricted] = useState(true)
  const [hasGeolocated, setHasGeolocated] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setIsGeorestricted(!!data.restricted)
        setHasGeolocated(true)
        if (
          document &&
          document.body &&
          document.body.classList &&
          data.restricted !== true
        ) {
          document.body.classList.remove('georestricted')
        }
      })
      .catch((error) => {
        setIsGeorestricted(true)
      })
  }, [])

  return (
    <GeorestrictedContext.Provider
      value={{
        hasGeolocated,
        isGeorestricted,
      }}
    >
      {children}
    </GeorestrictedContext.Provider>
  )
}
