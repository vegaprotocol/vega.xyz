import React, { useState, useEffect } from 'react'
import APITag from './APITag'
import TagFade from '../Svg/TagFade'

const DataNodes = () => {
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
        `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/trading_data_v2.openapi.json`
      )
      data = await data.json()
      setData(data.paths)
    }
    fetchNetworkVersions()
  }, [])

  return (
    <div>
      {data && (
        <div className="flex flex-wrap gap-space-2">
          <>
            {Object.keys(data)
              .slice(0, 20)
              .map((item, idx) => (
                <APITag key={idx} description={data[item].get.description}>
                  {data[item].get.summary}
                </APITag>
              ))}
            <TagFade />
          </>
        </div>
      )}
    </div>
  )
}

export default DataNodes
