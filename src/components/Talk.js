import React from "react";
import UppercaseLink from "./UppercaseLink";
import SquareBullet from "./Svg/SquareBullet";

const Talk = ({ talk }) => {
  return (
    <li className="border-t border-current pt-4 pb-8 relative min-w-full clear-both">
      <div>
        <div className="copy-s mb-2 w-full">{talk.frontmatter.title}</div>

        {talk.frontmatter.location && (
          <div className="inline-block mr-3">
            <SquareBullet size="10" />
            {talk.frontmatter.location}
          </div>
        )}

        {talk.frontmatter.date && (
          <div className="inline-block mr-3 text-vega-mid-grey text-[0.9375rem]">
            <SquareBullet size="5" />
            {talk.frontmatter.date}
          </div>
        )}
      </div>

      <div className="long-text w-full mb-3 prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        {talk.frontmatter.links &&
          talk.frontmatter.links.map((link, idx) => {
            return (
              <div key={idx} className="mb-4 text-white">
                <UppercaseLink text={link.title} link={link.link} />
              </div>
            );
          })}
      </div>
    </li>
  );
};

export default Talk;
