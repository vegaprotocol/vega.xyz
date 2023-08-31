import React from 'react'

const Chrome = () => {
  return (
    <svg viewBox="0 0 48 48" className="h-auto w-full">
      <defs>
        <linearGradient
          id="chromeA"
          x1="3.2173"
          y1="15"
          x2="44.7812"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d93025" />
          <stop offset="1" stopColor="#ea4335" />
        </linearGradient>
        <linearGradient
          id="chromeB"
          x1="20.7219"
          y1="47.6791"
          x2="41.5039"
          y2="11.6837"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcc934" />
          <stop offset="1" stopColor="#fbbc04" />
        </linearGradient>
        <linearGradient
          id="chromeC"
          x1="26.5981"
          y1="46.5015"
          x2="5.8161"
          y2="10.506"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1e8e3e" />
          <stop offset="1" stopColor="#34a853" />
        </linearGradient>

        <path
          id="chromeP"
          d="M13.6086 30.0031 3.218 12.006A23.994 23.994 0 0 0 24.0025 48l10.3906-17.9971-.0067-.0068a11.9852 11.9852 0 0 1-20.7778.007Z"
        />
      </defs>
      <use
        xlinkHref="#chromeP"
        fill="url(#chromeA)"
        transform="rotate(120 24 24)"
      />
      <use
        xlinkHref="#chromeP"
        fill="url(#chromeB)"
        transform="rotate(-120 24 24)"
      />
      <use xlinkHref="#chromeP" fill="url(#chromeC)" />
      <circle cx="24" cy="24" r="12" style={{ fill: '#fff' }} />
      <circle cx="24" cy="24" r="9.5" style={{ fill: '#1a73e8' }} />
    </svg>
  )
}

export default Chrome
