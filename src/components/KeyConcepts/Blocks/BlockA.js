import React from 'react'
import Container from '../../Container'

const BlockA = (props) => {
  return (
    <Container>
      <div className="pt-20 md:pt-32">
        <div className="border-b border-black dark:border-white">
          <div className="md:flex md:items-end md:justify-between">
            <h2 className="mb-3 max-w-[40rem] text-[2rem] leading-none md:mb-6 md:text-[2.5rem]">
              {props.title}
            </h2>
            <div className="w-[15.625rem] shrink-0">{props.diagram}</div>
          </div>
        </div>
        <div className="pt-6 md:columns-2 md:gap-x-12">
          <div className="prose dark:prose-invert md:text-lg">
            {props.children}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlockA
