import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import LinkArrow from "../../components/Svg/LinkArrow";
import BoxTitle from "../../components/BoxTitle";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import UniverseLeft from "../../components/Svg/UniverseLeft";
import UniverseRight from "../../components/Svg/UniverseRight";

const KeyConceptsPage = () => {
  return (
    <Layout>
      <Seo title="Key Concepts" />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <UniverseLeft className="-translate-x-12" />
        </div>
        <div className="col-span-6">
          <div className="max-w-[45rem] mx-auto text-center mb-16 lg:pt-16">
            <h1 className="mb-6">
              <BoxTitle text="Key concepts" />
            </h1>

            <GlitchTitle
              size="medium"
              level="2"
              size={[54, 68, 68]}
              className="mb-6"
            >
              We're creating the critical infrastructure for Web3 and DeFi to
              mature, and birth a thriving new world of finance
            </GlitchTitle>
            <LeadingLine className="text-current">
              We're building a future of finance to rival, or outdo, CeFi
              &mdash; where control of the markets, products, and fees is in the
              community's hands.
            </LeadingLine>
            <LeadingLine className="text-current">
              Here, our decentralised marketplace for markets gives centralised
              versions a run for their money.
            </LeadingLine>
          </div>
        </div>
        <div className="col-span-3">
          <UniverseRight className="translate-x-12" />
        </div>
      </div>
    </Layout>
  );
};

export default KeyConceptsPage;
