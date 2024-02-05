import React from 'react'
import Container from '../../Container'

const BlockC = (props) => {
  return (
    <Container>
      <div className="mx-auto max-w-[46rem] pt-20 md:pt-32">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="mb-space-6 max-w-[30rem] text-[2rem] leading-none md:mb-6 md:max-w-none md:text-[2.5rem]">
            {props.title}
          </h2>
          <div className="shrink-0 md:w-[15.625rem]">{props.diagram}</div>
        </div>
        <div className="pt-8">
          <div className="prose max-w-none dark:prose-invert md:text-lg">
            {props.children}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlockC
