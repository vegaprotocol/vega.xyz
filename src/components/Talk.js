import React, { useState, useEffect, useRef } from "react";
import UppercaseLink from "./UppercaseLink";
import SquareBullet from "./Svg/SquareBullet";

const Talk = ({ talk }) => {
  const handleClick = () => setClamped(!clamped);
  const containerRef = useRef(null);
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const hasClamping = (el) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    const checkButtonAvailability = () => {
      if (containerRef.current) {
        const hadClampClass =
          containerRef.current.classList.contains("line-clamp-4");
        if (!hadClampClass) containerRef.current.classList.add("line-clamp-4");
        setShowButton(hasClamping(containerRef.current));
        if (!hadClampClass)
          containerRef.current.classList.remove("line-clamp-4");
      }
    };

    checkButtonAvailability();
    window.addEventListener("resize", checkButtonAvailability);

    return () => {
      window.removeEventListener("resize", checkButtonAvailability);
    };
  }, [containerRef]);

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

      <div
        ref={containerRef}
        className={`long-text w-full mb-3 prose ${clamped && "line-clamp-4"}`}
      >
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

      {showButton && clamped && (
        <button
          className="text-[0.9375rem] uppercase underline underline-offset-4 decoration-1 font-not-glitched hover:no-underline"
          onClick={handleClick}
        >
          Read {clamped ? "more" : "less"}
        </button>
      )}
    </li>
  );
};

export default Talk;
