import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const BackerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const logoPages = [
    <>
      <StaticImage
        src="../../images/backer-logos/backer-logos-1-dark.png"
        className="hidden h-auto w-full dark:block"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
      <StaticImage
        src="../../images/backer-logos/backer-logos-1.png"
        className="dark:hidden"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
    </>,
    <>
      <StaticImage
        src="../../images/backer-logos/backer-logos-2-dark.png"
        className="hidden dark:block"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
      <StaticImage
        src="../../images/backer-logos/backer-logos-2.png"
        className="dark:hidden"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
    </>,
    <>
      <StaticImage
        src="../../images/backer-logos/backer-logos-3-dark.png"
        className="hidden dark:block"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
      <StaticImage
        src="../../images/backer-logos/backer-logos-3.png"
        className="dark:hidden"
        layout="fullWidth"
        placeholder="none"
        alt=""
      />
    </>,
  ]

  console.log(logoPages)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % logoPages.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [currentIndex, logoPages.length])

  return (
    <div className="grid max-w-[36em]">
      {logoPages.map((logos, index) => (
        <div
          key={index}
          className={`transition delay-700 duration-700 ${
            index === currentIndex ? 'opacity-1' : 'opacity-0'
          }`}
          style={{ gridArea: '1 / 1' }}
        >
          <div className="bg-white dark:bg-black">{logos}</div>
        </div>
      ))}
    </div>
  )
}

export default BackerLogos
