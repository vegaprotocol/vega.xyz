import React, { useState } from "react";
import Seo from "../../components/Seo";
import { Link } from "gatsby";
import LayoutEthDenver from "../../components/LayoutEthDenver";
import Moshed from "../../video/moshed.mp4";
import EthDenverTitle from "../../components/Svg/EthDenverTitle";
import ContainerEthDenver from "../../components/ContainerEthDenver";
import ButtonLinkSimple from "../../components/ButtonLinkSimple";
//import ButtonLink from "../../components/ButtonLink";
import VegaLogo from "../../components/Svg/VegaLogo";
import DiscoModeToggle from "../../components/DiscoModeToggle";
import Mountainscape from "../../images/mountainscape.png";
import EthDenverLearn from "../../images/ethdenverlearn.svg";
import EthDenverBuild from "../../images/ethdenverbuild.svg";
import EthDenverMeet from "../../images/ethdenvermeet.svg";
import EthDenverMap from "../../images/ethdenver-map.svg";
import EthDenverEvent from "../../components/EthDenverEvent";
import EthDenverEvent2 from "../../components/EthDenverEvent2";
import PersonBarney from "../../images/person-barney.png";
import PersonChris from "../../images/person-chris.png";
import PersonWitold from "../../images/person-witold.png";
import PersonDanny from "../../images/person-danny.png";
import CrossLarge from "../../components/Svg/CrossLarge";

const EthDenver = () => {
  const [discoMode, setDiscoMode] = useState(true);
  const [showMap, setShowMap] = useState(false);

  const toggleDiscoMode = () => {
    setDiscoMode(!discoMode);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <LayoutEthDenver>
      <Seo
        title="ETHDenver"
        description="Vega is sponsoring and hitting up ETHDenver 2022. Come meet the team, hear our talks, and take part in our hackathons."
        image="/ethdenver.jpg"
      />
      <div className="color-white pb-[17.5%] w-full">
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
          <Link to="/">
            <VegaLogo />
          </Link>
          <DiscoModeToggle
            discoMode={discoMode}
            toggleDiscoMode={toggleDiscoMode}
          />
        </header>

        <div className="max-w-[68rem] mx-auto px-4 md:px-6 lg:px-8 mb-8 md:mb-16 lg:pt-[5rem]">
          <EthDenverTitle
            discoMode={discoMode}
            className="relative inline-block w-full h-auto mb-3 lg:-mt-5"
          />

          <div className="relative md:flex md:justify-between -mt-[5%]">
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
          <h1 className="title-m mb-3">Catch Vega at ETHDenver</h1>
          <div className="copy-xs md:copy-s">
            Excited to be outta lockdowns and straight into sponsoring ETHDenver
            this February. A big bunch of us will be there, including Barney our
            founder, to share what we've been up to, learn what others are
            doing, and take part in the hackathons. If you'll be at the
            epicentre of Ethereum and Blockchain innovation too, come say hello!
          </div>

          <div className="border border-white py-9 px-6 my-12">
            <div className="title-m text-center mb-3">
              Find us at booth P20,
              <br />
              <div
                className={`${discoMode ? "text-black" : "text-vega-mid-grey"}`}
              >
                Shill Zone, Floor 3
              </div>
            </div>
            <div className="copy-xs text-center">
              Visit us at our booth for an intro to Vega, to meet the team – and
              take part in fun stuff for loads of swag:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-4 pb-6 title-s grow">
                  Easy derivatives trading games
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-4 pb-6 title-s grow">
                  Ghosts of liquidity treasure (& beer) hunt
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
              <div className="flex flex-col border border-white">
                <div className="bg-white text-black p-4 pb-6 title-s grow">
                  Spot the ghost
                </div>
                <div className="h-1.5 w-auto"></div>
              </div>
            </div>

            <div className="text-center mt-8">
              <ButtonLinkSimple onClick={toggleMap} text="View on a map" />
            </div>
          </div>

          <div className="mb-20">
            <div className="flex justify-between border-b border-white items-end">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Learn <br />
                about Vega
              </h2>
              {discoMode && (
                <img
                  src={EthDenverLearn}
                  alt=""
                  className="w-[112px] md:w-[190px] shrink-0"
                />
              )}
            </div>

            <EthDenverEvent
              type="Keynote talk"
              title="Why derivatives are the cypherpunk future of DeFi"
              title2="with Barney, Vega Founder"
              when="Thursday, Feb 17th 5:30-8:30pm"
              venue="Web3 Castle, ETHDenver Main Event Opening Ceremony"
              discoMode={discoMode}
              people={[PersonBarney]}
            ></EthDenverEvent>

            <EthDenverEvent
              type="Talks & workshops"
              title="Virtual address @ #BUIDLathon Kickoff"
              title2="with Chris"
              when="Friday, Feb 11th time TBC"
              venue="Livestream"
              discoMode={discoMode}
              people={[PersonChris]}
            ></EthDenverEvent>

            <EthDenverEvent
              type="Talks & workshops"
              title="Programming liquidity on Vega Futures markets"
              title2="with Barney, Chris & Witold"
              when="Feb 17th 11am - 1pm"
              venue="Mirus Loft (2nd Floor)"
              discoMode={discoMode}
              people={[PersonBarney, PersonChris, PersonWitold]}
            >
              Want to build a market or liquidity bot on Vega? We got you
              covered! Take a deep dive into the fundamentals of Vega trading,
              how to programmatically manage assets and provide Liquidity Orders
              via APIs. Lunch will be served at the Mirus Loft, just 1 block
              from the sports castle.
            </EthDenverEvent>

            <EthDenverEvent
              type="Talks & workshops"
              title="Official ETHDenver Vega Technical workshop"
              title2="with Chris"
              when="Friday, Feb 18th, time TBC"
              venue="Web3 Castle & live streamed"
              discoMode={discoMode}
              people={[PersonChris]}
            >
              The official technical workshop for developers interested in
              building with Vega and creating the future of DeFi &mdash; and get
              rewarded for it. A real Vega 101, with tutorials on navigating
              testnet / mainnet, with bounties up for grabs!
            </EthDenverEvent>

            <EthDenverEvent
              type="Talks & workshops"
              title="ZK rollups: Tales from the Field (**L2/ scaling/ Infrastructure track)"
              title2="Danny Holland, Head of Blockchain Integrations @ Vega"
              when="Friday or Saturday (2/18-19), time TBC"
              venue="Web3 Castle & live streamed"
              discoMode={discoMode}
              people={[PersonDanny]}
            >
              Danny Holland, Head of Blockchain Integrations at Vega, will share
              tales from the field and his experience using ZK Rollups to scale
              transactions on Ethereum. ZK rollups are one of the most promising
              new technologies for any use case with high volumes of
              transactions, be it for DeFi, NFTs, gaming and beyond. Danny will
              touch on the Ethereum issues that we know all too well &mdash;
              high gas fees, miner extractable value, and time lag. He'll also
              discuss the most pressing challenges with ZK rollups and highlight
              how the ETHDenver community can get involved in building out the
              ZK rollups landscape.
            </EthDenverEvent>
          </div>

          <div className="mb-20">
            <div className="flex justify-between border-b border-white mb-6 items-end">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Build <br />
                with Vega
              </h2>
              {discoMode && (
                <img
                  src={EthDenverBuild}
                  alt=""
                  className="w-[112px] md:w-[168px] shrink-0"
                />
              )}
            </div>

            <div className="copy-xs md:copy-s !mb-12">
              Bounties are tasks that earn you rewards as you build with Vega.
              Catch them at different times throughout ETHDenver.
            </div>

            <div>
              <EthDenverEvent
                type=""
                title="Bounties presentation @ #BUIDLathon Kickoff"
                title2="with Chris"
                when="Friday, Feb 11th time TBC"
                venue="Livestream"
                discoMode={discoMode}
                people={[PersonChris]}
              ></EthDenverEvent>

              <EthDenverEvent
                type=""
                title="Vega bounty judging"
                title2="with Chris, Barney, and Vega team"
                when="Sunday, Feb 20th. 10am - 2pm (In person)<br/>March 21-25th (Virtual)"
                venue="Virtual and @ the Web3 Castle"
                discoMode={discoMode}
                people={[PersonChris, PersonBarney]}
              ></EthDenverEvent>
            </div>
          </div>
          <div className="mb-20">
            <div className="flex justify-between border-b border-white mb-6 items-end">
              <h2 className="title-m md:title-l lg:title-xl pb-4">
                Meet the <br />
                team
              </h2>
              {discoMode && (
                <img
                  src={EthDenverMeet}
                  alt=""
                  className="w-[112px] md:w-[210px] shrink-0"
                />
              )}
            </div>

            <EthDenverEvent2
              title="Hacker Meet & Greet"
              title2="Feb 15th @ 100 de Agave"
              title3="5 - 7pm"
              discoMode={discoMode}
              people={[]}
            >
              Prospective developer in the Hackathon? Let's get you fired up
              about Vega! Join us for a relaxed evening where you can learn
              about Vega, meet our mentorship team and other developers looking
              to build on Vega. Beers and snacks will keep you going at 100 de
              Agave, 1 block away from the sports castle.
            </EthDenverEvent2>
          </div>

          <div className="pb-24">
            <h2 className="title-m md:title-l lg:title-xl pb-4">Swag grab</h2>
            <div className="prose prose-lg prose-a:text-white dark:prose-p:text-white prose-p:text-white dark:prose-a:text-white">
              <p>
                {" "}
                We've launched a whole range of new swag and would love our
                community to be guaranteed to get it! Keep an eye on{" "}
                <a
                  href="https://discord.com/invite/3hQyGgZ"
                  rel="noreferrer"
                  target="_blank"
                >
                  Vega Discord
                </a>{" "}
                and the{" "}
                <a
                  href="https://vegacommunity.substack.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Community update newsletter
                </a>{" "}
                for the soon to be open Community Swag Whitelist.
              </p>
            </div>
          </div>
        </ContainerEthDenver>
      </div>
      <img
        id="mountainScape"
        src={Mountainscape}
        className={`translate-y-12 w-full h-auto fixed bottom-0 left-0 right-0}`}
        alt=""
      />

      {showMap && (
        <div className="position fixed z-50 inset-0 bg-white dark:bg-black flex flex-col items-center justify-center">
          <div className="px-12 text-center">
            <div className="title-m mb-1">Find us at booth P20</div>
            <p className="copy-xxs text-current !mb-6">
              (You can't miss us, look for the yellow hoodies)
            </p>
            <img src={EthDenverMap} alt="Floorplan" />
          </div>
          <button className="absolute top-5 right-5" onClick={toggleMap}>
            <span className="title-xxs">Close</span>
            <CrossLarge className="inline-block ml-4" />
          </button>
        </div>
      )}
    </LayoutEthDenver>
  );
};

export default EthDenver;
