import React from 'react'
import ButtonLink from './ButtonLink'

const CalloutHero = ({ title, text, buttonLink, buttonText, children }) => {
  return (
    <div className="rounded-xl border border-black bg-white dark:border-white/20 dark:bg-vega-box-grey">
      <div className="p-6">
        <div
          className={`${
            buttonLink && 'md:grid md:grid-cols-2'
          } md:items-center md:justify-between`}
        >
          <div>
            <h2 className="copy-s !mb-1.5">{title}</h2>
            {
              <div className="copy-xs !mb-1.5 text-vega-mid-grey">
                {children || text}
              </div>
            }
          </div>
          {buttonLink && buttonText && (
            <div className="mt-6 md:mt-0 md:flex md:justify-end">
              <div>
                <ButtonLink text={buttonText} link={buttonLink} color="dark" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CalloutHero
