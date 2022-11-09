import React from 'react'

export interface ArrowRightProps {
  className?: string
}

const ArrowRight = ({ className }: ArrowRightProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 6.4726L11.5641 6.4726"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
      <path
        d="M6.3086 1L11.9522 6.49988L6.30859 11.9998"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default ArrowRight
