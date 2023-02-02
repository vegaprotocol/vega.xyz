import React, { useState, useEffect } from 'react'
import APITag from './APITag'
import TagFade from '../Svg/TagFade'

const VegaWallet = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchNetworkVersions() {
      let response = await fetch(
        'https://raw.githubusercontent.com/vegaprotocol/documentation/main/package.json'
      )
      response = await response.json()
      const mainnetVersion = response.mainnetVersion
      const version = response.version

      let data = await fetch(
        `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/openrpc.json`
      )
      data = await data.json()
      setData(data.methods)
    }
    fetchNetworkVersions()
  }, [])

  return (
    <div>
      {data && (
        <div className="flex flex-wrap gap-space-2">
          <>
            {' '}
            {data.slice(0, 15).map((item, idx) => (
              <APITag link="" key={idx} description={item.description}>
                {item.name}
              </APITag>
            ))}
            <TagFade />
          </>
        </div>
      )}
    </div>
  )
}

export default VegaWallet
