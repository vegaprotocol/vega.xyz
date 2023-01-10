import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

export interface NumberedListItemProps {
  number: string
  text: string
}

const NumberedListItem = ({ number, text }: NumberedListItemProps) => {
  return (
    <div className="flex items-center border-b py-space-5">
      <div className="font-glitch-all w-space-10 shrink-0 text-[2.5rem] leading-none md:text-[3rem] lg:text-[3.375rem]">
        {number}
      </div>
      <div className="body-xl">{text}</div>
    </div>
  )
}

export default NumberedListItem
