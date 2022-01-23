import React from "react";
import RoadMapBlock from "./RoadMapBlock";
import GlitchTitle from "../components/GlitchTitle";

const RoadMap = () => {
  return (
    <div
      id="roadmap"
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
          <div className="relative border border-current py-8 px-4 md:p-12 pb-12 dark:bg-black bg-white mx-auto max-w-[35rem]">
            <div className="title-m mb-6">
              Current Status:
              <br />
              <span className="text-vega-mid-grey">Restricted Mainnet</span>
            </div>
            <div className="copy-xs !mb-0 text-vega-mid-grey">
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

        <RoadMapBlock
          title="Alpha Mainnet"
          content="In this phase the validators will upgrade the decentralised Vega mainnet by deploying the MVP of the trading feature set. This will allow the creation of markets and trading for the first time in mainnet. As this is an early launch phase, the network is expected to be configured by the community to initially place fairly conservative temporary limits on the amount of funds that may be risked. Community early adopters and ecosystem members will be able to use this phase to try out their ideas for markets and test integrations with their own projects and protocols."
          date="H1 2022"
          position="right"
        />
        <RoadMapBlock
          title="Full Mainnet"
          content="Full Mainnet begins with successful completion of the launch phases. At this point the community and validators will have signalled their confidence in the software via on-chain governance votes and all remaining temporary limits will have been removed. During this phase, the development of the protocol and software will focus on enabling market innovation and iterating on feedback received from the community. This will include the addition of key features not present in the initial MVP, examples of which could include spot markets, passive liquidity, Ethereum oracles. New bridges to other blockchains and/or L2s will also be introduced during this phase."
          date="H2 2022"
          position="left"
        />
        <RoadMapBlock
          title="Protocol V2 Alpha"
          content="This release will allow the validators to launch an experimental mainnet using the second major release of the Vega protocol. The V2 protocol will use WASM to allow the community to create their own products & risk models, and control other aspects of the protocol. This version will also contain a number of performance and security improvements as well as core protocol upgrades and simplifications."
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
