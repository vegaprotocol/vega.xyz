import React from "react";
import TextLink from "../../TextLink";
import PurposeBuiltTableDiagram from "../Diagrams/PurposeBuiltTable/Diagram";
import Container from "../../Container";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const PurposeBuiltBlock = () => {
  const { t } = useTranslation("page.key-concepts");
  return (
    <Container>
      <div className="pt-20 md:pt-32">
        <div className="md:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 mb-12">
          <div className="lg:col-span-6">
            <h2 className="title-m md:title-l max-w-[30rem] md:max-w-none mb-3 md:mb-6">
              <Trans t={t}>Purpose built bespoke blockchain</Trans>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="md:text-lg">
                <Trans t={t}>
                  Ethereum and other blockchains suffer slow performance since
                  they're generalist tools, with smart contracts for everything
                  - applying the same rules regardless of what you use them for.
                  They charge high gas fees and require workarounds to be
                  applied to trading. Vega is built from the ground up using
                  high performing, purpose-built smart contracts specifically
                  for trading - meaning no fees on orders, and fairness at its
                  core.
                </Trans>
              </p>
              <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
                <Trans t={t}>Read more:</Trans>
              </div>

              <p>
                <Trans t={t} i18nKey="i18nkey[theImportanceOf]">
                  The importance of a purpose built blockchain for trading on
                  the Vega blog{" "}
                  <TextLink
                    to="https://blog.vega.xyz/innovating-in-decentralised-financial-markets-e7ed1fc9eca1"
                    colour="grey"
                  >
                    'Innovating in decentralised financial markets'
                  </TextLink>
                </Trans>
              </p>
            </div>
          </div>
        </div>

        <PurposeBuiltTableDiagram />
      </div>
    </Container>
  );
};
export default PurposeBuiltBlock;
