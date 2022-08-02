import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const Contributor = ({ contributor }) => {
  return (
    <div className="contributor-block relative group">
      <img
        src={contributor.avatar_url}
        width="50"
        height="50"
        className="w-full h-auto"
        alt={contributor.login}
      />
      <div
        className={`contributor-block-detail hidden group-hover:block cursor-pointer w-[16rem] absolute z-10 top-1/2 bg-white dark:bg-black p-3 text-current border border-black dark:border-white pb-6`}
      >
        <img
          src={contributor.avatar_url}
          width="64"
          height="64"
          className="float-left mr-3 mb-3"
          alt={contributor.login}
        />
        <div className="leading-none text-[1.125rem] !mb-0">
          {contributor.login}
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-[0.8125rem] hover:underline"
            href={`https://github.com/${contributor.login}`}
          >
            View on Github
            <LinkArrow className="inline-block ml-2" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-current h-1.5"></div>
      </div>
    </div>
  );
};

export default Contributor;
