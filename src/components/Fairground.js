import React from "react";
import FairgroundConsoleIllustration from "../images/fairground-console-illustration.svg";
import FairgroundBugIllustration from "../images/fairground-bug-illustration.svg";
import Waltzer1 from "../images/waltzer1.png";
import Waltzer2 from "../images/waltzer2.png";
import Container from "./Container";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Fairground = () => {
  const { t } = useTranslation("component.fairground");
  return (
    <div className="bg-fairground bg-center bg-cover bg-vega-yellow pt-6 pb-12 md:pb-40 dark:invert-0 invert text-black">
      <div className="animate-fairground-marquee bg-experiment-on-fairground bg-[length:1326px_62px] w-full h-[62px]"></div>

      <Container>
        <div className="md:grid md:grid-cols-12 mt-8 mb-8 md:mt-36 md:mb-20">
          <div className="md:col-span-2 relative">
            <div className="md:relative md:top-[10%]">
              <img
                src={Waltzer1}
                alt=""
                className="max-w-[9rem] md:max-w-[13rem] w-full h-auto md:mx-auto inline-block"
              />
            </div>
          </div>
          <div className="md:col-span-8 text-center">
            <div className="max-w-[40rem] mx-auto w-full">
              <h2 className="title-m md:title-l lg:title-xl text-black mb-8">
                <Trans t={t}>
                  Use Fairground, the Vega testnet, to play without
                  consequences.
                </Trans>
              </h2>
              <a
                className="bg-black text-white inline-block py-5 px-16 uppercase title-xxxs !font-not-glitched mx-auto"
                href="https://fairground.wtf"
                target="_blank"
                rel="noreferrer"
              >
                <Trans t={t}>Go to Fairground</Trans>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <div className="w-full md:relative md:top-[50%] inline-block text-right">
              <img
                alt=""
                src={Waltzer2}
                className="max-w-[9rem] md:max-w-[13rem] w-full h-auto md:mx-auto inline-block"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-b-2 border-current flex gap-x-6 justify-between items-end">
            <div className="copy-s !mb-2 lg:copy-m  order-2 md:order-1">
              <Trans t={t}>Use the powerful Vega Console app</Trans>
            </div>
            <div className="w-full max-w-[30%] order-1 md:order-2">
              <img
                alt=""
                src={FairgroundConsoleIllustration}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="border-b-2 border-current flex gap-x-6 justify-between items-end">
            <div className="copy-s !mb-2 lg:copy-m">
              <Trans t={t}>Earn rewards for finding bugs</Trans>
            </div>
            <div className="w-full max-w-[20%] md:max-w-[30%]">
              <img
                src={FairgroundBugIllustration}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fairground;
