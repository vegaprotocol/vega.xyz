import React from "react";
import TextLink from "../../TextLink";
import PurposeBuiltTableDiagram from "../Diagrams/PurposeBuiltTable/Diagram";
import Container from "../../Container";

const PurposeBuiltBlock = () => {
  return (
    <Container>
      <div className="pt-20 md:pt-32">
        <div className="md:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 mb-12">
          <div className="lg:col-span-6">
            <h2 className="title-m md:title-l max-w-[30rem] md:max-w-none mb-3 md:mb-6">
              Purpose built, bespoke blockchain
            </h2>
          </div>
          <div className="lg:col-span-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="md:text-lg">
                Ethereum and other blockchains suffer slow performance since
                they're generalist tools, with smart contracts for everything -
                applying the same rules regardless of what you use them for. And
                charging high gas fees in the process. Making these blockchains
                fit for sophisticated trading requires workarounds to avoid
                unwanted results, such as the unfair practice of front running.
                Derivatives are too important in finance to use workarounds.
                Vega is specifically built from the ground up with trading in
                mind, using high performing, purpose-built smart contracts for
                trading - meaning no fees on orders, and fairness at its core.
              </p>

              <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
                Read more:
              </div>
              <TextLink
                to="https://blog.vega.xyz/innovating-in-decentralised-financial-markets-e7ed1fc9eca1"
                colour="grey"
                underline={true}
                className="block mb-2"
              >
                About the importance of a purpose built blockchain for trading
                on the Vega blog 'Innovating in decentralised financial markets'
              </TextLink>
            </div>
          </div>
        </div>

        <PurposeBuiltTableDiagram />
      </div>
    </Container>
  );
};
export default PurposeBuiltBlock;
