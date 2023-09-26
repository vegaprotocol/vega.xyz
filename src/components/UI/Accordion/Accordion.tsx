import React, { useState } from 'react'
import Arrow from '../../Svg/Arrow'
import AccordionSection from './AccordionSection'

interface ItemProps {
  title: string
  html: string
}

interface AccordionProps {
  data: ItemProps[]
}

const Accordion = ({ data }: AccordionProps) => {
  const [accordionSection, setAccordionSection] = useState<number | null>(0)

  const setAccordionSectionFn = (idx: number) => {
    idx === accordionSection
      ? setAccordionSection(null)
      : setAccordionSection(idx)
  }

  return (
    <div className="border-t border-vega-light-200 dark:border-vega-dark-200">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-vega-light-200 dark:border-vega-dark-200"
        >
          <button
            className={`body-xl font-not-glitched grid w-full grid-cols-12 gap-x-3 py-5 text-left transition-all delay-75 duration-300   ${
              accordionSection !== idx ? 'hover:py-6' : ''
            }`}
            onClick={() => setAccordionSectionFn(idx)}
          >
            <div className="col-span-12 flex items-center justify-between">
              <div>{item.title}</div>
              {idx === accordionSection ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 8.52997H2V7.46997H14V8.52997Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.53 7.47V2H7.47V7.47H2V8.53H7.47V14H8.53V8.53H14V7.47H8.53Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </button>
          <AccordionSection
            title={item.title}
            html={item.html}
            open={idx === accordionSection}
          />
        </div>
      ))}
    </div>
  )
}

export default Accordion
