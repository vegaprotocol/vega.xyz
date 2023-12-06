import React from 'react'

const Container = (props) => {
  return (
    <div
      className={props.hideXOverflow ? 'overflow-x-hidden' : ''}
      {...(props.dataCy ? { 'data-cy': props.dataCy } : {})}
    >
      <div className="mx-auto max-w-[90rem] px-4 md:px-6 lg:px-8">
        {props.children}
      </div>
    </div>
  )
}

export default Container
