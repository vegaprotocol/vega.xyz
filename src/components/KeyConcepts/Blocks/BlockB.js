import React from 'react'
import Container from '../../Container'

const BlockB = (props) => {
  return (
    <Container>
      <div className="pt-20 md:pt-32">
        <div className="grid items-center gap-x-12 md:grid-cols-2">
          <div
            className={`mx-auto mb-12 w-full max-w-[18rem] md:max-w-none ${
              props.diagramPosition === 'right' ? 'md:order-2' : 'md:order-1'
            }`}
          >
            {props.diagram}
          </div>
          <div
            className={`${
              props.diagramPosition === 'right' ? 'md:order-1' : 'md:order-2'
            }`}
          >
            <h2 className="mb-3 max-w-[30rem] text-[2rem] leading-none md:mb-6 md:max-w-none md:text-[2.5rem]">
              {props.title}
            </h2>
            <div className="prose dark:prose-invert md:text-lg">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlockB
