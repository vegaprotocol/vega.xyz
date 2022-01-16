import React from "react";
import TalkIllustration from "./Svg/Talk";
import UppercaseLink from "./UppercaseLink";
import SquareBullet from "./Svg/SquareBullet";

const Talk = ({ talk }) => {
  return (
    <li className="border-t border-current pt-4 pb-8 relative min-w-full clear-both">
      <div className="inline-block w-[3.0625rem] float-right ml-12 mb-12">
        <TalkIllustration />
      </div>
      <div>
        <div className="title-s mb-2 w-full">{talk.frontmatter.title}</div>

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
      <div
        className="w-full mt-2 mb-4 prose"
        dangerouslySetInnerHTML={{ __html: talk.html }}
      />

      {talk.frontmatter.links &&
        talk.frontmatter.links.map((link, idx) => {
          return (
            <div key={idx} className="mb-4">
              <UppercaseLink text={link.title} link={link.link} />
            </div>
          );
        })}
    </li>
  );
};

export default Talk;
