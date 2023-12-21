import React from 'react'
import { GeorestrictedProvider } from '../context/georestricted'

const RootElement = ({ children }) => {
  return <GeorestrictedProvider>{children}</GeorestrictedProvider>
}

export default RootElement
