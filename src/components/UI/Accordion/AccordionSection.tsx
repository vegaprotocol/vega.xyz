import React, { useEffect, useRef, useState, useCallback } from 'react'
import Markdown from 'markdown-to-jsx'
import { useTranslation } from 'gatsby-plugin-react-i18next'

interface AccordionSectionProps {
  title: string
  html: string
  open?: boolean
}

const AccordionSection = ({
  title,
  html,
  open = false,
}: AccordionSectionProps) => {
  const accordionItem = useRef<HTMLDivElement>(null)
  const [itemHeight, setItemHeight] = useState<string>('0px')

  const setAccordionState = useCallback(() => {
    if (accordionItem.current && open) {
      setItemHeight(`${accordionItem.current.scrollHeight}px`)
    } else {
      setItemHeight('0px')
    }
  }, [open])

  useEffect(() => {
    setAccordionState()
    let timeoutId: NodeJS.Timeout | null = null
    const resizeListener = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(setAccordionState, 150)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [open, setAccordionState])

  return (
    <div
      ref={accordionItem}
      className="overflow-hidden transition-all duration-700"
      style={{ maxHeight: itemHeight }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex flex-col pb-5 md:flex-row md:gap-x-12">
          <div className="order-2 flex-shrink md:order-1">
            <div className="prose mb-6 max-w-none prose-p:mt-0 dark:text-vega-dark-300">
              <Markdown>{html}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSection
