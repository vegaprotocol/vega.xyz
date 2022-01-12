import React, { useState } from "react";
import LayoutEthDenver from "../../components/LayoutEthDenver";
import Container from "../../components/Container";
import Moshed from "../../video/moshed.mp4";
import EthDenverTitle from "../../components/Svg/EthDenverTitle";
import ButtonLinkSimple from "../../components/ButtonLinkSimple";
import VegaLogo from "../../components/Svg/VegaLogo";
import InsaneModeToggle from "../../components/InsaneModeToggle";
import Mountainscape from "../../images/mountainscape.png";

const EthDenver = () => {
  const [insaneMode, setInsaneMode] = useState(true);

  const toggleInsaneMode = () => {
    setInsaneMode(!insaneMode);
  };

  return (
    <LayoutEthDenver>
      <div class="color-white">
        {insaneMode ? (
          <video
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          >
            <source src={Moshed} type="video/mp4" />
          </video>
        ) : null}

        <header className="py-6 px-4 w-full md:px-6 lg:px-8 flex justify-between">
          <VegaLogo />
          <InsaneModeToggle
            insaneMode={insaneMode}
            toggleInsaneMode={toggleInsaneMode}
          />
        </header>

        <div className="max-w-[68rem] mx-auto px-4 md:px-6 lg:px-8">
          <EthDenverTitle className="relative inline-block w-full h-auto mb-3 -mt-5" />

          <div className="md:flex md:justify-between -mt-[5%]">
            <div className="title-m md:title-l lg:text-[4.25rem] uppercase mb-4 md:mb-0">
              February 11-20
            </div>

            <div className="flex items-center">
              <ButtonLinkSimple
                link="https://www.ethdenver.com/"
                text="Apply to participate"
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={Mountainscape}
        className="w-full h-auto fixed bottom-0 left-0 right-0"
        alt=""
      />
    </LayoutEthDenver>
  );
};

export default EthDenver;
