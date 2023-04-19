import React, { useState, useEffect } from 'react'
import Pantera from '../Svg/BackerLogos/Pantera'
import ArringtonCapital from '../Svg/BackerLogos/ArringtonCapital'

const BackerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const logoPages = [
    [<Pantera />],
    [<Pantera />, <ArringtonCapital />],
    [<Pantera />],
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % logoPages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex, logoPages.length])

  return (
    <div className="relative">
      {logoPages.map((logos, index) => (
        <div
          key={index}
          className={`transition delay-700 duration-700 ${
            index === currentIndex ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <div className="absolute flex items-center gap-x-6">
            {logos.map((logo, index) => (
              <div key={index}>{logo}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BackerLogos
