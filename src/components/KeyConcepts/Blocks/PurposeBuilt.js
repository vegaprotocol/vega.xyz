import React from "react";
import TextLink from "../../TextLink";
import PurposeBuiltTableDiagram from "../Diagrams/PurposeBuiltTable/Diagram";

const PurposeBuiltBlock = () => {
  return (
    <div className="pt-20 md:pt-32">
      <div className="md:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 mb-12">
        <div className="lg:col-span-6">
          <h2 className="title-m md:title-l max-w-[30rem] mb-3 md:mb-6">
            Purpose built, bespoke blockchain
          </h2>
        </div>
        <div className="lg:col-span-6">
          <div className="prose">
            <p>
              Ethereum and other blockchains suffer slow performance since
              they're generalist tools, with smart contracts for everything -
              applying the same rules regardless of what you use them for. And
              charging high gas fees in the process. Making these blockchains
              fit for sophisticated trading requires workarounds to avoid
              unwanted results, such as the unfair practice of front running.
            </p>
            <p>
              Derivatives are too important in finance to use workarounds. Vega
              is specifically built from the ground up with trading in mind,
              using high performing, purpose-built smart products for trading -
              meaning no fees on orders, and fairness at its core.
            </p>

            <div class="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more:
            </div>

            <TextLink
              to="https://blog.vega.xyz/the-concepts-underpinning-vega-ad1d64f1a55c"
              className="block mb-2"
              colour="grey"
              underline={true}
            >
              The concepts underpinning Vega
            </TextLink>
            <TextLink
              to="/papers/vega-protocol-whitepaper.pdf"
              className="block mb-2"
              colour="grey"
              underline={true}
            >
              Download the whitepaper
            </TextLink>
          </div>
        </div>
      </div>

      <PurposeBuiltTableDiagram />
    </div>
  );
};
export default PurposeBuiltBlock;
