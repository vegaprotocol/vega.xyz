import React from 'react'
import MainItem from './MainItem'

const Dropdown = (props) => {
  return (
    <li className="group relative">
      <MainItem text={props.title} link={props.link} />
      <div className={`absolute left-0 top-0 hidden group-hover:block`}>
        <div className="relative top-[3.75rem] w-[320px] rounded-2xl border border-vega-light-200 bg-white bg-vega-light-100 px-space-6 pt-space-5 pb-space-1 dark:border-vega-dark-200 dark:bg-vega-dark-100 dark:bg-black">
          {props.children}
        </div>
      </div>
    </li>
  )
}

export default Dropdown
