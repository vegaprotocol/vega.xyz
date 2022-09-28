import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "swiper/css";

const RoadMap = (props) => {
  const { t } = useTranslation("component.roadmap");

  return (
    <div id="roadmap" {...props}>
      <div className="flex relative">
        <Swiper
          speed={1200}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
          }}
        >
          {props.data.edges.map((block, idx) => (
            <SwiperSlide>
              <div key={idx}>
                {block.node.frontmatter.step_title}
                {block.node.frontmatter.title}
                {block.node.html}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoadMap;
