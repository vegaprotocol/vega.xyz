import React, { useState, useCallback, ReactNode, ReactElement } from 'react'

interface TabsProps {
  defaultTab?: string | null
  children: ReactNode
}

const Tabs = ({ defaultTab, children }: TabsProps) => {
  const childArray = React.Children.toArray(children)

  let initialTab: string | null = defaultTab ? defaultTab : null

  if (React.isValidElement(childArray[0])) {
    const firstChild = childArray[0] as ReactElement
    initialTab = firstChild.props.label
  }

  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback((label) => setActiveTab(label), [])

  const tabs = childArray.map((child) => {
    if (React.isValidElement(child)) {
      const elementChild = child as ReactElement
      return (
        <button
          onClick={(e) => {
            e.preventDefault()
            handleActiveTab(elementChild.props.label)
          }}
          className={`title-s inline-block border-b-2 px-3 py-5 text-left ${
            elementChild.props.label === activeTab
              ? 'border-current'
              : 'over:border-current border-transparent'
          }`}
          key={elementChild.props.label}
        >
          <div
            dangerouslySetInnerHTML={{ __html: elementChild.props.tabName }}
          />
        </button>
      )
    }
    return null
  })

  const tabContent = childArray.filter((child) => {
    if (React.isValidElement(child)) {
      const elementChild = child as ReactElement
      return elementChild.props.label === activeTab
    }
    return false
  })

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
