import * as React from 'react'

const MarketBadge = (props) => {
  return (
    <svg
      width="51"
      height="44"
      viewBox="0 0 51 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22"
        cy="22"
        r="21.5"
        className="bg-vega-light-100 stroke-vega-light-200 dark:bg-vega-dark-100 dark:stroke-vega-dark-200"
      />
      <rect x="32" y="2" width="19" height="19" rx="9.5" fill="white" />
      <path
        d="M44.3937 14.6V15.5H38.8737V14.768C39.4257 14.4 39.8177 14.056 40.0497 13.736C40.2897 13.416 40.4097 13.108 40.4097 12.812C40.4097 12.588 40.3537 12.352 40.2417 12.104H38.8737V11.264H39.8337C39.6817 10.96 39.5617 10.664 39.4737 10.376C39.3857 10.088 39.3417 9.776 39.3417 9.44C39.3417 8.728 39.5577 8.16 39.9897 7.736C40.4217 7.312 41.0017 7.1 41.7297 7.1C42.4097 7.1 42.9577 7.26 43.3737 7.58C43.7897 7.892 44.0937 8.4 44.2857 9.104L43.2657 9.488C43.1537 8.928 42.9777 8.54 42.7377 8.324C42.5057 8.108 42.1857 8 41.7777 8C41.3457 8 41.0097 8.128 40.7697 8.384C40.5377 8.64 40.4217 8.988 40.4217 9.428C40.4217 9.756 40.4697 10.06 40.5657 10.34C40.6617 10.62 40.7977 10.928 40.9737 11.264H43.2657V12.104H41.3697C41.4497 12.344 41.4897 12.564 41.4897 12.764C41.4897 13.38 41.1217 13.992 40.3857 14.6H44.3937Z"
        fill="#8B8B8B"
      />
    </svg>
  )
}

export default MarketBadge