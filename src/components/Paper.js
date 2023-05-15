import React from 'react'
import UppercaseLink from './UppercaseLink'

const Paper = ({ paper }) => {
  return (
    <li className="relative border-t border-current pt-4 pb-space-3 md:pb-space-6">
      <div className="title-s mb-space-4">{paper.frontmatter.title}</div>
      <p className="copy-xs">{paper.frontmatter.description}</p>

      <div className="mt-space-4">
        {paper.frontmatter.links.map((link, idx) => {
          return (
            <div key={idx} className="mb-space-3">
              <UppercaseLink text={link.title} link={link.link} />
            </div>
          )
        })}
      </div>
    </li>
  )
}

export default Paper
