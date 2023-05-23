import React, { useState, useEffect } from 'react'
import APITag from './APITag'
import TagFade from '../Svg/TagFade'

const CoreNodes = () => {
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
        `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/core.openapi.json`
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
              .slice(0, 15)
              .map((item, idx) => (
                <APITag
                  link=""
                  key={idx}
                  description={
                    data[item].get
                      ? data[item].get.description
                      : data[item].post.description
                  }
                >
                  {data[item].get
                    ? data[item].get.summary
                    : data[item].post.summary}
                </APITag>
              ))}
            <TagFade />
          </>
        </div>
      )}
    </div>
  )
}

export default CoreNodes
