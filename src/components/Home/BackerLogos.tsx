import React, { useState, useEffect } from 'react'
import Pantera from '../Svg/BackerLogos/Pantera'
import ArringtonCapital from '../Svg/BackerLogos/ArringtonCapital'
import Alliance from '../Svg/BackerLogos/Alliance'
import Coinbase from '../Svg/BackerLogos/Coinbase'
import Cumberland from '../Svg/BackerLogos/Cumberland'
import EdenBlock from '../Svg/BackerLogos/EdenBlock'
import GreenField from '../Svg/BackerLogos/GreenField'
import GumiCryptosCapital from '../Svg/BackerLogos/GumiCryptosCapital'
import Hashed from '../Svg/BackerLogos/Hashed'
import SignumCapital from '../Svg/BackerLogos/SignumCapital'
import NGCVentures from '../Svg/BackerLogos/NGCVentures'

const BackerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const logoPages = [
    [
      <Pantera />,
      <Coinbase />,
      <ArringtonCapital />,
      <Cumberland />,
      <Hashed />,
    ],
    [
      <EdenBlock />,
      <Alliance />,
      <GreenField />,
      <NGCVentures />,
      <SignumCapital />,
      <GumiCryptosCapital />,
    ],
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % logoPages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex, logoPages.length])

  return (
    <div className="grid max-w-[25rem]">
      {logoPages.map((logos, index) => (
        <div
          key={index}
          className={`transition delay-700 duration-700 ${
            index === currentIndex ? 'opacity-1' : 'opacity-0'
          }`}
          style={{ gridArea: '1 / 1' }}
        >
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            {logos.map((logo, index) => (
              <div className="" key={index}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BackerLogos
