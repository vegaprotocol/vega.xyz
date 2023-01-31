import React, { useState } from 'react'
import Button from './UI/Button'
import CrossMedium from './Svg/CrossMedium'
import { motion } from 'framer-motion'

interface AnnouncementProps {
  title: string
  bodyText: string
  link?: { text: string; url: string }
}

const Announcement = ({ title, bodyText, link }: AnnouncementProps) => {
  const [panelClosed, setClosed] = useState(false)

  const closePanel = () => {
    setClosed(true)
  }

  return (
    <>
      {!panelClosed && (
        <div className="fixed right-space-4 bottom-space-4 z-50 w-[17.1875rem] text-white dark:text-black lg:w-[20rem]">
          <div>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform-x-px absolute right-[8px] top-[8px] z-10"
            >
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                className="fill-black dark:fill-white"
              />
              <path
                d="M1 1L21 21L41 41"
                stroke="currentColor"
                strokeMiterlimit="10"
              />
            </svg>
          </div>

          <div className="">
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: 'auto',
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 1.5,
                },
              }}
              className="overflow-hidden"
            >
              <div className="bg-black p-[9px] dark:bg-white">
                <div className="border border-current p-space-4 pb-space-6">
                  <div className="heading-m !my-0">{title}</div>
                  <p className="body-m mt-space-3">{bodyText}</p>
                  {link && (
                    <Button
                      variant="secondary"
                      to={link.url}
                      className="mt-space-6"
                    >
                      {link.text}
                    </Button>
                  )}

                  <button
                    className="absolute top-space-2 right-space-2 z-50 cursor-pointer"
                    onClick={() => {
                      closePanel()
                    }}
                  >
                    <CrossMedium />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}

export default Announcement
