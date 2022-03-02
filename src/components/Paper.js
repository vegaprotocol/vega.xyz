import React from "react";
import PaperIllustration from "./Svg/Paper";
import UppercaseLink from "./UppercaseLink";

const Paper = ({ paper }) => {
  return (
    <li className="border-t border-current pt-4 pb-16 relative">
      <div className="copy-s mb-4">{paper.frontmatter.title}</div>
      <p className="copy-xs">{paper.frontmatter.description}</p>

      {paper.frontmatter.links.map((link, idx) => {
        return (
          <div key={idx} className="mb-4">
            <UppercaseLink text={link.title} link={link.link} />
          </div>
        );
      })}
    </li>
  );
};

export default Paper;
