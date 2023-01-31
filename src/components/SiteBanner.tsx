import React from 'react'
// const Banner = styled.div`
//   animation-name: panBackground;
//   background-image: url(${siteBannerBackground});
//   background-size: cover;
// `

interface SiteBannerProps {
  children: React.ReactNode
}

const SiteBanner = ({ children }) => {
  return (
    <div className="flex h-[3rem] items-center justify-center bg-moshed bg-cover">
      <div className="heading-xxs container mx-auto  py-space-3 text-center text-white underline hover:no-underline">
        {children}
      </div>
    </div>
  )
}

export default SiteBanner
