import * as React from "react";
import UppercaseLink from "../components/UppercaseLink";
import CrossLarge from "../components/Svg/CrossLarge";

const NotFoundPage = () => {
  return (
    <div className="bg-white w-full min-h-screen pb-[5rem] bg-four-oh-four">
      <div className="w-full max-w-[68.75rem] mx-auto py-[10%] px-4 md:px-8 flex flex-col">
        <div className="w-full text-black max-w-[41.25rem] border-[3px] border-black self-end bg-white">
          <div className="flex flex-col justify-center items-end h-[2rem] border-b-[3px] border-black pr-1">
            <CrossLarge />
          </div>
          <div className="p-[1.875rem]">
            <p class="title-m md:title-xl text-black mb-8">
              UH. WE CAN'T FIND THE PAGE YOU'RE LOOKING FOR.
            </p>
            <UppercaseLink link="/" text="Go home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
