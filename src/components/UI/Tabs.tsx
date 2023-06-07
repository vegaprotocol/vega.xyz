import React, { useState, useCallback } from 'react'

interface TabsProps {
  defaultTab?: string | null
  children: any
}

const Tabs = ({ defaultTab, children }: TabsProps) => {
  const initialTab = defaultTab ? defaultTab : children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback((label) => setActiveTab(label), [])

  const tabs = children.map((child) => (
    <button
      onClick={(e) => {
        e.preventDefault()
        handleActiveTab(child.props.label)
      }}
      className={`title-s inline-block border-b-2 px-3 py-5 text-left ${
        child.props.label === activeTab
          ? 'border-current'
          : 'over:border-current border-transparent'
      }`}
      key={child.props.label}
    >
      <div dangerouslySetInnerHTML={{ __html: child.props.tabName }} />
    </button>
  ))

  const tabContent = children.filter((child) => child.props.label === activeTab)

  return (
    <div>
      <div
        className="mx-auto mb-space-8 flex gap-x-space-3 overflow-y-hidden
      overflow-x-scroll whitespace-normal whitespace-nowrap border-b
      border-vega-mid-grey text-center"
      >
        {tabs}
      </div>
      <div>{tabContent}</div>
    </div>
  )
}

const Tab = (props) => {
  return <>{props.children}</>
}

export { Tabs, Tab }
