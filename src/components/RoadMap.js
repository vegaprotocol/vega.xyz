import React from "react";
import RoadMapBlock from "./RoadMapBlock";
import GlitchTitle from "../components/GlitchTitle";
import ButtonLinkSimple from "../components/ButtonLinkSimple";

const RoadMap = ({}) => {
  return (
    <div
      className="
                relative
                before:content-['']
                before:absolute
                before:left-1/2
                before:top-1
                before:bottom-0
                before:w-px
                before:bg-gradient-to-b
                before:from-black
                before:to-white
                dark:before:from-white
                dark:before:to-black
                
                after:content-['']
                after:absolute
                after:top-[3px]
                after:left-1/2
                after:w-[2.5rem]
                after:h-px
                after:bg-black
                dark:after:bg-white
                after:-translate-x-1/2"
    >
      <div className="relative text-center max-w-[50rem] mx-auto">
        <div className="pt-20">
          <div className="dark:bg-black bg-white py-4">
            <GlitchTitle level={1} size="medium">
              Where are we in the Roadmap?
            </GlitchTitle>
          </div>
        </div>

        <div className="pt-20">
          <div className="relative border border-current p-8 md:p-12 pb-12 dark:bg-black bg-white">
            <div className="title-m mb-6">
              Current Status:
              <br />
              <span className="text-vega-mid-grey">Restricted Mainnet</span>
            </div>
            <div class="copy-xs !mb-0 text-vega-mid-grey">
              This is the second of 3 launch phases of the network in which the
              validators are running a decentralised Vega network connected to
              the Ethereum mainnet. This phase provides a proving ground for the
              proof of stake network, allows time for the community to learn how
              to reliably operate nodes, and introduces on-chain governance.
              Token holders can participate in governance, and stake and
              delegate their tokens.
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-current"></div>
          </div>
        </div>

        <div className="pt-20">
          <div className="dark:bg-black bg-white py-8">
            <div className="title-m">What's up next?</div>
          </div>
        </div>

        <RoadMapBlock title="Alpha Mainnet" date="H1 2022" position="right" />
        <RoadMapBlock title="Full Mainnet" date="H2 2022" position="left" />
        <RoadMapBlock
          title="Protocol V2 Alpha"
          date="H1 2023"
          position="right"
        />

        {/* <div className="pt-20">
          <div className="bg-black">
            <ButtonLinkSimple
              text="Github public roadmap"
              link="https://github.com/vegaprotcol"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RoadMap;
