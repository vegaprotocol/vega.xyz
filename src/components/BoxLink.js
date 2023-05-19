import React from 'react'
import ButtonLink from './ButtonLink'
import Button from './UI/Button'
import Padlock from './Svg/Padlock'
import UppercaseLink from './UppercaseLink'

const BoxLink = ({
  title,
  text,
  linkTitle,
  link,
  icon,
  locked,
  inlineLinkTitle,
  inlineLink,
}) => {
  return (
    <div className="relative flex flex-col justify-between border border-black dark:border-white">
      <div className="p-4">
        <div className={`relative ${locked || icon ? 'pr-16' : ''}`}>
          <div className="font-glitched mb-3 text-[1.5rem] leading-[0.85]">
            {locked && <Padlock />}
            {title}
          </div>
          <div
            className={`mb-3 leading-[1.3] text-vega-mid-grey ${
              locked || icon ? 'max-w-[23.75rem]' : ''
            }`}
          >
            {text}
          </div>
          {inlineLinkTitle && (
            <div>
              <UppercaseLink text={inlineLinkTitle} link={inlineLink} />
            </div>
          )}
          <div className="absolute right-0 top-0">{icon}</div>
        </div>
      </div>
      <div className="relative bottom-[-1.5625rem] -left-px">
        <div className="inline-block bg-black">
          <Button to={link}>{linkTitle}</Button>
        </div>
      </div>
    </div>
  )
}

export default BoxLink
