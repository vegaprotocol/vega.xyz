import React, { useState, useEffect, useRef } from "react";
import RoadMapVegaDude from "./Svg/RoadMapVegaDude";
import { RoadMapContent } from "../data/RoadMap";
import GlitchTitle from "./GlitchTitle";
import RoadMapBlock from "./RoadMapBlock";
import RoadMapTrackBlock from "./RoadMapTrackBlock";

const RoadMap = (props) => {
  const roadmapTrack = useRef(null);
  const roadmapBlocks = useRef(null);
  const roadmapTrackBlocks = useRef(null);
  const blockCount = RoadMapContent.length;
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentTrackPosition, setcurrentTrackPosition] = useState(0);

  useEffect(() => {
    // fix height so it doesn't jump around as you click through the roadmap
    const setRoadmapBlocksHeight = () => {
      let tallest = 0;

      for (let el of roadmapBlocks.current.children) {
        let height = el.offsetHeight;
        if (height > tallest) {
          tallest = height;
        }
      }
      roadmapBlocks.current.style.height = tallest + "px";
    };

    const setRoadMapTrackPosition = () => {
      setVegaDudePosition(currentBlockIndex);
    };

    // update height and position of vega dude when window is resized
    window.addEventListener("resize", setRoadmapBlocksHeight);
    window.addEventListener("resize", setRoadMapTrackPosition);
    setRoadmapBlocksHeight();
  });

  // set initial position of vega dude
  useEffect(() => {
    setVegaDudePosition(0);
  }, []);

  // calculate and set position of vega dude along the track
  const setVegaDudePosition = (index) => {
    setcurrentTrackPosition(
      roadmapTrackBlocks.current.children[index].offsetLeft +
        roadmapTrackBlocks.current.children[index].offsetWidth / 2 +
        "px"
    );
  };

  const nextBlock = (event) => {
    let newIndex;
    if (parseInt(currentBlockIndex) < blockCount - 1) {
      newIndex = currentBlockIndex + 1;
      setCurrentBlockIndex(newIndex);
      setcurrentTrackPosition(
        roadmapTrackBlocks.current.children[newIndex].offsetLeft +
          roadmapTrackBlocks.current.children[newIndex].offsetWidth / 2 +
          "px"
      );
    }
  };

  const previousBlock = (event) => {
    let newIndex;
    if (parseInt(currentBlockIndex) > 0) {
      newIndex = currentBlockIndex - 1;
      setCurrentBlockIndex(newIndex);
      setcurrentTrackPosition(
        roadmapTrackBlocks.current.children[newIndex].offsetLeft +
          roadmapTrackBlocks.current.children[newIndex].offsetWidth / 2 +
          "px"
      );
    }
  };

  return (
    <div id="roadmap" {...props}>
      <div className="relative">
        <div className="dark:bg-black bg-white py-6">
          <GlitchTitle level={1} className="lg:title-xxl">
            Where are we in the Roadmap?
          </GlitchTitle>
        </div>

        <div className="flex relative" ref={roadmapBlocks}>
          {RoadMapContent.map((block, idx) => (
            <div key={idx} className="absolute left-0 right-0">
              <RoadMapBlock
                title1={block.title1}
                title2={block.title2}
                content={block.content}
                visible={currentBlockIndex === idx}
              />
            </div>
          ))}
        </div>

        <div className="flex relative mt-12 justify-between after:contet-none after:absolute after:left-0 after:right-0 after:top-[24px] after:h-px dark:after:bg-white after:bg-black after:z-10">
          <button className="pt-12" onClick={previousBlock}>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="40"
                y1="26.5"
                x2="13"
                y2="26.5"
                className={
                  currentBlockIndex > 0
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
              />
              <path
                d="M26.9355 39.1292L13.1679 26.5001L26.9355 13.8711"
                className={
                  currentBlockIndex > 0
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
                strokeMiterlimit="10"
              />
              <circle
                cx="26.5"
                cy="26.5"
                r="26"
                transform="rotate(-180 26.5 26.5)"
                className={
                  currentBlockIndex > 0
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
              />
            </svg>
          </button>
          <div
            className="flex w-full relative justify-between mx-12"
            ref={roadmapTrack}
          >
            <div
              className="absolute -top-[2px] z-40 -ml-2 transition-left"
              style={{ left: currentTrackPosition }}
            >
              <RoadMapVegaDude />
            </div>

            <div
              className="flex w-full relative justify-between"
              ref={roadmapTrackBlocks}
            >
              {RoadMapContent.map((block, idx) => (
                <RoadMapTrackBlock
                  active={currentBlockIndex === idx}
                  key={idx}
                  title1={block.title1}
                  title2={block.title2}
                />
              ))}
            </div>
          </div>
          <button className="pt-12" onClick={nextBlock}>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="13"
                y1="26.5"
                x2="40"
                y2="26.5"
                className={
                  currentBlockIndex < blockCount - 1
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
              />
              <path
                d="M26.0645 13.8708L39.8321 26.4999L26.0645 39.1289"
                className={
                  currentBlockIndex < blockCount - 1
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
                strokeMiterlimit="10"
              />
              <circle
                cx="26.5"
                cy="26.5"
                r="26"
                className={
                  currentBlockIndex < blockCount - 1
                    ? "dark:stroke-white stroke-black"
                    : "stroke-vega-mid-grey"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
