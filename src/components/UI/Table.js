import React from 'react'

const Cell = ({ children }) => {
  return (
    <div className="body-l px-space-3 py-space-5 text-vega-mid-grey dark:text-vega-grey">
      {children}
    </div>
  )
}

const Header = ({ children }) => {
  return <div className="heading-xxs text-vega-mid-grey">{children}</div>
}

const Row = ({ children }) => {
  return <tr className="border-t border-[#525252]">{children}</tr>
}

// TODO - This table needs generalising, it's specific to validator rewards
const Table = ({ headings, rows }) => {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full max-w-[100vw] border-b border-[#525252] text-left">
        <tbody>
          {headings.map((heading, idx) => (
            <Row key={idx}>
              <th scope="row">
                <Header>{heading}</Header>
              </th>
              {rows[idx].map((cell, idx) =>
                idx === 0 ? (
                  <th scope="col" key={idx}>
                    <Cell>{cell}</Cell>
                  </th>
                ) : (
                  <td key={idx}>
                    <Cell>{cell}</Cell>
                  </td>
                )
              )}
            </Row>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
