import React from "react";
import ButtonLink from "./ButtonLink";

const CalloutHero = ({ title, text, buttonLink, buttonText }) => {
  return (
    <div className="border dark:border-white/20 border-black rounded-xl dark:bg-vega-box-grey bg-white">
      <div className="p-6">
        <div class="md:grid md:grid-cols-2 md:justify-between md:items-center">
          <div>
            <h2 className="copy-s !mb-1.5">{title}</h2>
            {text && (
              <div className="text-vega-mid-grey copy-xs !mb-1.5">
                {text}wefwe
              </div>
            )}
          </div>
          <div class="mt-6 md:flex md:justify-end md:mt-0">
            <div>
              <ButtonLink text={buttonText} link={buttonLink} color="dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutHero;
