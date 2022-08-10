import React from "react";
import RoadMapDoor from "./Svg/RoadMapDoor";
import RoadMapVegaDude from "./Svg/RoadMapVegaDude";
import RoadMapBlockMobile from "./RoadMapBlockMobile";
import ButtonLink from "./ButtonLink";
import GlitchTitle from "./GlitchTitle";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const RoadMapMobile = (props) => {
  const { t } = useTranslation("component.roadmap");
  return (
    <div id="roadmap" {...props}>
      <div className="relative">
        <div className="dark:bg-black bg-white py-4">
          <GlitchTitle level={2} className="mb-4 title-l md:title-xl">
            {t("Roadmap")}
          </GlitchTitle>
        </div>

        <div
          className="relative
                before:content-['']
                before:absolute
                before:left-[2rem]
                before:top-1
                before:bottom-0
                before:w-px
                before:bg-gradient-to-b
                before:from-black
                before:to-white
                dark:before:from-white
                dark:before:to-black
                dark:after:bg-white
              "
        >
          <div className="absolute top-0 bottom-0 w-[4rem]">
            <div className="relative z-10">
              <RoadMapDoor />
              <RoadMapVegaDude className="absolute bottom-px left-1/2 -translate-x-1/4" />
            </div>
          </div>
          {props.data.edges.map((block, idx) => (
            <RoadMapBlockMobile
              key={idx}
              title1={block.node.frontmatter.step_title}
              title2={block.node.frontmatter.title}
              content={block.node.html}
              startOpen={idx === 0}
            />
          ))}
        </div>
      </div>
      <div className="pb-8">
        <ButtonLink
          link="https://github.com/orgs/vegaprotocol/projects/114/views/4"
          text={t("View detailed Roadmap")}
        />
      </div>
    </div>
  );
};

export default RoadMapMobile;
