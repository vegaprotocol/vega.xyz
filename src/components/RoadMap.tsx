import React, { useState, useRef, createRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import Container from "./Container";
import Button from "./UI/Button";
//import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import V2Mainnet from "./Svg/Roadmap/V2Mainnet";
import V1Mainnet from "./Svg/Roadmap/V1Mainnet";
import AlphaMainnet from "./Svg/Roadmap/AlphaMainnet";
import RestrictedMainnet from "./Svg/Roadmap/RestrictedMainnet";
import Testnet from "./Svg/Roadmap/Testnet";
import VegaBond from "./Svg/Roadmap/VegaBond";
import Rectangle from "./Svg/Roadmap/Rectangle";
import ArrowLeft from "./Svg/ArrowLeft";
import ArrowRight from "./Svg/ArrowRight";
import "swiper/css";

const RoadMap = (props) => {
  //const { t } = useTranslation("component.roadmap");
  const planets = useRef<any[]>([]);
  const swiperRef = useRef<SwiperRef>();
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  planets.current = props.data.edges.map(
    (_, i) => planets.current[i] ?? createRef()
  );

  const roadmapImage = (idx) => {
    switch (idx) {
      case 4:
        return <V2Mainnet className="w-full h-auto max-w-[13rem] mx-auto" />;
      case 3:
        return <V1Mainnet className="w-full h-auto max-w-[7.5rem] mx-auto" />;
      case 2:
        return (
          <AlphaMainnet className="w-full h-auto max-w-[15.625rem] mx-auto" />
        );
      case 1:
        return (
          <RestrictedMainnet className="w-full h-auto max-w-[6.8125rem] mx-auto" />
        );
      case 0:
        return <Testnet className="w-full h-auto max-w-[12.0625rem] mx-auto" />;
      default:
        return <div>Not found</div>;
    }
  };

  const setTimelineHeightHandler = () => {
    const height = planets.current[0].current.clientHeight;
    setTimelineHeight(height);
  };

  return (
    <div id="roadmap" {...props}>
      <div className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-vega-dark-300"
            style={{ top: `${timelineHeight}px` }}
          ></div>
        </div>
        <div className="relative z-10">
          <Container>
            <div className="flex relative">
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="grid sm:grid-cols-3 text-center">
                  <div className="aspect-[251/210] justify-center items-end hidden sm:flex">
                    {selectedPlanet !== 0 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                  <div className="aspect-[251/210] flex justify-center items-end">
                    <div className="w-full flex sm:justify-center justify-between pointer-events-auto">
                      <button
                        className="flex items-center sm:hidden"
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <ArrowLeft className="mr-2" />
                        <div>Previous</div>
                      </button>
                      <VegaBond className="relative top-px" />
                      <button
                        className="flex items-center sm:hidden"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <div>Previous</div>
                        <ArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="aspect-[251/210] justify-center items-end hidden sm:flex">
                    {selectedPlanet !== props.data.edges.length - 1 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                </div>
              </div>
              <Swiper
                speed={800}
                onResize={() => {
                  setTimelineHeightHandler();
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onActiveIndexChange={(swiper) => {
                  setSelectedPlanet(swiper.activeIndex);
                }}
                slideToClickedSlide={true}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                  delay: 1000,
                }}
                initialSlide={2}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                }}
              >
                {props.data.edges.map((block, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="cursor-pointer pointer-events-auto"
                  >
                    <div
                      className={`transition duration-300 h-full flex flex-col justify-between ${
                        idx === selectedPlanet
                          ? "dark:text-white text-black"
                          : "dark:text-vega-dark-300 text-vega-light-300"
                      }
                      
                      ${
                        idx === selectedPlanet - 2 || idx === selectedPlanet + 2
                          ? "opacity-0"
                          : ""
                      }
                      `}
                    >
                      <div
                        className={`transition duration-700 aspect-[251/210] flex items-center justify-center ${
                          idx === selectedPlanet ? "opacity-100" : "opacity-50"
                        }`}
                        ref={planets.current[idx]}
                      >
                        {roadmapImage(idx)}
                      </div>
                      <div
                        className={`transition-all duration-700 heading-m !mb-5 sm:mb-[1rem] text-center max-w-[18rem] mx-auto ${
                          idx === selectedPlanet ? "" : "scale-75"
                        }`}
                      >
                        {block.node.frontmatter.title}
                      </div>
                      <div className="transition-all duration-700 text-center justify-self-end text-[0.9375rem] uppercase">
                        {block.node.frontmatter.step_title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="max-w-[27.5rem] mx-auto mt-12">
              <div className="border dark:border-vega-dark-300 border-vega-light-300 rounded-xl py-7 px-7 mb-12">
                <div
                  className="prose-li:text-[1.125rem] prose-li:list-square prose-li:leading-[1.4] prose-h2:uppercase prose-h2:mb-[0.75rem] prose-h2:text-[1.5rem] prose-ul:p-0 prose-ul:pl-3.5 prose-invert:text-vega-dark-400 prose dark:prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: props.data.edges[selectedPlanet].node.html,
                  }}
                />
              </div>
              <div className="text-center">
                <Button to="https://github.com/orgs/vegaprotocol/projects/114/views/4">
                  View detailed roadmap
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
