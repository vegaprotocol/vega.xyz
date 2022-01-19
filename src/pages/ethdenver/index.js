import React, { useState } from "react";
import LayoutEthDenver from "../../components/LayoutEthDenver";
import Moshed from "../../video/moshed.mp4";
import EthDenverTitle from "../../components/Svg/EthDenverTitle";
import ContainerEthDenver from "../../components/ContainerEthDenver";
import ButtonLinkSimple from "../../components/ButtonLinkSimple";
import ButtonLink from "../../components/ButtonLink";
import VegaLogo from "../../components/Svg/VegaLogo";
import DiscoModeToggle from "../../components/DiscoModeToggle";
import Mountainscape from "../../images/mountainscape.png";
import EthDenverLearn from "../../images/ethdenverlearn.svg";
import EthDenverBuild from "../../images/ethdenverbuild.svg";
import EthDenverMeet from "../../images/ethdenvermeet.svg";

const EthDenver = () => {
  const [discoMode, setDiscoMode] = useState(true);

  const toggleDiscoMode = () => {
    setDiscoMode(!discoMode);
  };

  return (
    <LayoutEthDenver>
      <div class="color-white pb-[17.5%] w-full">
        <video
          autoPlay
          muted
          loop={true}
          playsInline
          className="fixed w-screen h-screen object-cover -z-20"
        >
          <source src={Moshed} type="video/mp4" />
        </video>

        {!discoMode && (
          <div className="bg-black fixed w-screen h-screen -z-10"></div>
        )}

        <header className="items-center py-6 px-4 w-full md:px-6 lg:px-8 flex justify-between lg:fixed lg:z-10">
          <VegaLogo />
          <DiscoModeToggle
            discoMode={discoMode}
            toggleDiscoMode={toggleDiscoMode}
          />
        </header>

        <div className="max-w-[68rem] mx-auto px-4 md:px-6 lg:px-8 mb-16 lg:pt-[5rem]">
          <EthDenverTitle
            discoMode={discoMode}
            className="relative inline-block w-full h-auto mb-3 lg:-mt-5"
          />

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

        <ContainerEthDenver>
          <div className="copy-s">
            Excited to be outta lockdowns and straight into sponsoring ETHDenver
            this February. A big bunch of us will be there, including Barney our
            founder, to share what we've been up to, learn what others are
            doing, and take part in the hackathons. If you'll be at the
            epicentre of Ethereum and Blockchain innovation too, come say hello!
          </div>

          <div className="border border-white p-9 my-12">
            <div className="title-m text-center mb-3">
              Find us at booth P20,
              <br />
              <div
                className={`${discoMode ? "text-black" : "text-vega-mid-grey"}`}
              >
                Shill Zone, Floor 3
              </div>
            </div>
            <div class="copy-xs text-center">
              Visit us at our booth for an intro to Vega, to meet the team – and
              take part in fun stuff for loads of swag:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-6 title-s grow">
                  Derivates trading games
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-6 title-s grow">
                  Ghosts of liquidity past treasure hunt
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-6 title-s grow">
                  Where's Waldo style game
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
            </div>

            <div className="text-center mt-8">
              <ButtonLinkSimple
                link="https://google.com"
                text="View on a map"
              />
            </div>
          </div>

          <div className="mb-20">
            <div className="flex justify-between border-b border-white mb-6">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Learn <br />
                about Vega
              </h2>
              {discoMode && (
                <img
                  src={EthDenverLearn}
                  alt=""
                  className="shrink-0 self-end"
                />
              )}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex justify-between border-b border-white mb-6">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Build <br />
                with Vega
              </h2>
              {discoMode && (
                <img
                  src={EthDenverBuild}
                  alt=""
                  className="shrink-0 self-end"
                />
              )}
            </div>

            <div className="copy-xs md:copy-s">
              Hackathon bounties are being published after the official ETH
              Denver announcement on 11th Feb. Check back then!
            </div>
          </div>
          <div className="mb-20">
            <div className="flex justify-between border-b border-white mb-6">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Meet the <br />
                team
              </h2>
              {discoMode && (
                <img src={EthDenverMeet} alt="" className="shrink-0 self-end" />
              )}
            </div>

            <div className="border-b border-white pb-6 mb-6">
              <div className="title-m mb-3">
                Hacker Meet & Greet
                <br />
                <span className="text-vega-yellow">Monday 14th Feb, 6pm</span>
                <br />
                <span
                  className={`${
                    discoMode ? "text-black" : "text-vega-mid-grey"
                  }`}
                >
                  DJ Chill Zone, Floor 2.5
                </span>
              </div>

              <div className="copy-xs">
                Prospective developer in the Hackathon? Let's get up close and
                personal. We'll talk you through some of the fundamentals of
                Vega, introduce you to our mentorship team and collaborate in
                the ongoing Hackathon
              </div>
            </div>

            <div className="border-b border-white pb-6">
              <div className="title-m mb-3">
                Vega & Friends Hootenanny
                <br />
                <span className="text-vega-yellow">
                  Wednesday 16th Feb, 6pm
                </span>
                <br />
                <span
                  className={`${
                    discoMode ? "text-black" : "text-vega-mid-grey"
                  }`}
                >
                  Nike Arena, Room 4
                </span>
              </div>

              <div className="copy-xs">
                Join us for drinks, bites and chats along with our partner DAO
                (TBC).
              </div>
            </div>
          </div>
        </ContainerEthDenver>
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
