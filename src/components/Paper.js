import React from 'react'
import UppercaseLink from './UppercaseLink'

const Paper = ({ paper }) => {
  return (
    <li className="relative border-t border-current pt-4 pb-space-6">
      <div className="title-s !font-not-glitched mb-space-4 !normal-case">
        {paper.frontmatter.title}
      </div>
      <p className="body-m md:body-l">{paper.frontmatter.description}</p>

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
