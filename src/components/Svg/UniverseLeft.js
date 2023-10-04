import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import Rotate from './Motion/Rotate'
import { useAnimation } from 'framer-motion'

const UniverseLeft = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      initial: { opacity: 0 },
      transition: { opacity: 1, delay: i * 0.3 },
    }))
  }, [controls])
  return (
    <div className="relative w-full pb-[362.1181263%]">
      <VideoBackground />

      <svg
        viewBox="0 0 245.5 889"
        xmlSpace="preserve"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <path
          className="fill-white dark:fill-black"
          d="M0,0v75.4C16.5,67.5,35,63,54.5,63C123.8,63,180,119.2,180,188.5S123.8,314,54.5,314
	c-19.5,0-38-4.5-54.5-12.4V889h245.5V0H0z M179.5,860c-33.4,0-60.5-27.1-60.5-60.5s27.1-60.5,60.5-60.5s60.5,27.1,60.5,60.5
	S212.9,860,179.5,860z"
        />
        <g className="fill-black dark:fill-white">
          <Rotate duration="6" direction="forwards">
            <path d="M177.6,489.4h-3.2v3.2h3.2V489.4z" />
            <path d="M180.8,486.2V483h-3.2v3.2v3.2h3.2V486.2z" />
            <path d="M174.4,492.6H168v3.2h6.4V492.6z" />
            <path d="M177.6,495.8h-3.2v3.2h3.2V495.8z" />
            <path d="M180.8,498.9h-3.2v6.4h3.2V498.9z" />
            <path d="M183.9,495.8h-3.2v3.2h3.2V495.8z" />
            <path d="M190.3,492.6h-6.4v3.2h6.4V492.6z" />
            <path d="M183.9,489.4h-3.2v3.2h3.2V489.4z" />
          </Rotate>

          <Rotate duration="6" direction="backwards">
            <path d="M39.6,398.4h-3.2v3.2h3.2V398.4z" />
            <path d="M42.8,395.2V392h-3.2v3.2v3.2h3.2V395.2z" />
            <path d="M36.4,401.6H30v3.2h6.4V401.6z" />
            <path d="M39.6,404.8h-3.2v3.2h3.2V404.8z" />
            <path d="M42.8,407.9h-3.2v6.4h3.2V407.9z" />
            <path d="M45.9,404.8h-3.2v3.2h3.2V404.8z" />
            <path d="M52.3,401.6h-6.4v3.2h6.4V401.6z" />
            <path d="M45.9,398.4h-3.2v3.2h3.2V398.4z" />
          </Rotate>

          <path d="M150.6,165.9h-3.2v3.2h3.2V165.9z" />
          <path d="M153.8,162.7v-3.2h-3.2v3.2v3.2h3.2V162.7z" />
          <path d="M147.4,169.1H141v3.2h6.4V169.1z" />
          <path d="M150.6,172.3h-3.2v3.2h3.2V172.3z" />
          <path d="M153.8,175.4h-3.2v6.4h3.2V175.4z" />
          <path d="M156.9,172.3h-3.2v3.2h3.2V172.3z" />
          <path d="M163.3,169.1h-6.4v3.2h6.4V169.1z" />
          <path d="M156.9,165.9h-3.2v3.2h3.2V165.9z" />

          <path
            d="M166.3,156.3h-3.2v3.2h3.2V156.3z"
            custom={0}
            animate={controls}
          />
          <path
            d="M169.5,153.1h-3.2v3.2h3.2V153.1z"
            custom={1}
            animate={controls}
          />
          <path
            d="M172.6,149.9h-3.2v3.2h3.2V149.9z"
            custom={2}
            animate={controls}
          />
          <path
            d="M175.8,146.8h-3.2v3.2h3.2V146.8z"
            custom={3}
            animate={controls}
          />
          <path
            d="M179,143.6h-3.2v3.2h3.2V143.6z"
            custom={4}
            animate={controls}
          />
          <path
            d="M182.2,140.4H179v3.2h3.2V140.4z"
            custom={5}
            animate={controls}
          />
          <path
            d="M185.4,137.2h-3.2v3.2h3.2V137.2z"
            custom={0}
            animate={controls}
          />
          <path
            d="M188.6,134h-3.2v3.2h3.2V134z"
            custom={6}
            animate={controls}
          />
          <path
            d="M191.8,130.8h-3.2v3.2h3.2V130.8z"
            custom={7}
            animate={controls}
          />
          <path
            d="M195,127.6h-3.2v3.2h3.2V127.6z"
            custom={8}
            animate={controls}
          />
          <path
            d="M198.1,124.4H195v3.2h3.2V124.4z"
            custom={9}
            animate={controls}
          />
          <path
            d="M201.3,121.3h-3.2v3.2h3.2V121.3z"
            custom={10}
            animate={controls}
          />
          <path
            d="M204.5,118.1h-3.2v3.2h3.2V118.1z"
            custom={11}
            animate={controls}
          />
          <path
            d="M207.7,114.9h-3.2v3.2h3.2V114.9z"
            custom={12}
            animate={controls}
          />
          <path
            d="M210.9,111.7h-3.2v3.2h3.2V111.7z"
            custom={13}
            animate={controls}
          />
          <path
            d="M214.1,108.5h-3.2v3.2h3.2V108.5z"
            custom={14}
            animate={controls}
          />
          <path
            d="M217.3,105.3h-3.2v3.2h3.2V105.3z"
            custom={15}
            animate={controls}
          />
          <path
            d="M220.5,102.1h-3.2v3.2h3.2V102.1z"
            custom={16}
            animate={controls}
          />
          <path
            d="M223.6,98.9h-3.2v3.2h3.2V98.9z"
            custom={17}
            animate={controls}
          />
          <path
            d="M226.8,95.8h-3.2v3.2h3.2V95.8z"
            custom={18}
            animate={controls}
          />
          <path
            d="M230,92.6h-3.2v3.2h3.2V92.6z"
            custom={19}
            animate={controls}
          />
          <path
            d="M233.2,89.4H230v3.2h3.2V89.4z"
            custom={20}
            animate={controls}
          />
          <path
            d="M236.4,86.2h-3.2v3.2h3.2V86.2z"
            custom={21}
            animate={controls}
          />
          <path d="M239.6,83h-3.2v3.2h3.2V83z" custom={0} animate={controls} />

          <Rotate duration="6" direction="backwards">
            <path d="M130.2,540.2H127v3.2h3.2V540.2z" />
            <path d="M133.4,537h-3.2v3.2h3.2V537z" />
            <path d="M133.4,543.4h-3.2v3.2h3.2V543.4z" />
            <path d="M136.6,540.2h-3.2v3.2h3.2V540.2z" />
          </Rotate>

          <Rotate duration="4" direction="forwards">
            <path d="M98.2,3.2H95v3.2h3.2V3.2z" />
            <path d="M101.4,0h-3.2v3.2h3.2V0z" />
            <path d="M101.4,6.4h-3.2v3.2h3.2V6.4z" />
            <path d="M104.6,3.2h-3.2v3.2h3.2V3.2z" />
          </Rotate>

          <path d="M73.2,726H70v3.2h3.2V726z" />
          <path d="M233.2,882.2H230v3.2h3.2V882.2z" />
          <path d="M236.4,879h-3.2v3.2h3.2V879z" />
          <path d="M236.4,885.4h-3.2v3.2h3.2V885.4z" />
          <path d="M239.6,882.2h-3.2v3.2h3.2V882.2z" />
        </g>
      </svg>
    </div>
  )
}

export default UniverseLeft
