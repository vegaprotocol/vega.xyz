import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import Sticky from "react-stickynode";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import ScrollSpy from "react-scrollspy-navigation";
import UniverseLeft from "../../components/Svg/UniverseLeft";
import UniverseRight from "../../components/Svg/UniverseRight";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PurposeBuiltBlock from "../../components/KeyConcepts/Blocks/PurposeBuilt";

const KeyConceptsPage = () => {
  const sections = [
    {
      title: "Be as good as CeFi",
      hash: "good",
    },
    {
      title: "Be better than CeFi",
      hash: "better",
    },
    {
      title: "Help DeFi mature",
      hash: "mature",
    },
  ];

  return (
    <Layout>
      <Seo
        title="Key Vega Concepts"
        description="Explore how Vega bridges traditional finance and DeFi to create a bespoke trading alternative."
      />
      <Container hideXOverflow={true} dataCy={"main"}>
        <div className="pt-6 md:grid md:grid-cols-12">
          <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-2 md:block">
            <UniverseLeft className="translate-y-1/4 -translate-x-2/4 xxl:translate-x-0 scale-135" />
          </div>
          <div className="md:col-span-8 lg:col-span-6 xl:col-span-8 lg:pt-16">
            <div className="max-w-[45rem] xl:max-w-[50rem] mx-auto text-center">
              <h1 className="mb-6">
                <BoxTitle text="Key concepts" />
              </h1>
              <GlitchTitle level="2" className="mb-6 title-l xl:title-xl px-3">
                We're creating the critical infrastructure for Web3 and DeFi to
                mature, and birth a thriving new world of finance
              </GlitchTitle>
              <LeadingLine className="text-current">
                We're building a future of finance to rival, or outdo, CeFi
                &mdash; where control of the markets, products, and fees is in
                the community's hands.
              </LeadingLine>
              <LeadingLine className="text-current">
                And the tools to create decentralised markets that give
                centralised versions a run for their money.
              </LeadingLine>
            </div>
          </div>
          <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-2 md:block">
            <UniverseRight className="translate-y-1/4 translate-x-2/4 scale-135" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="relative max-w-[26.25rem] mt-4 pt-[10.5rem] mx-auto text-center after:content-[''] after:absolute after:w-px after:bg-white after:top-0 after:h-[8rem] after:left-1/2">
          <h2 className="title-m mb-6">Vega is designed to:</h2>
        </div>
      </Container>

      <div className="relative z-30">
        <Sticky enabled={true}>
          <div className="bg-white dark:bg-black">
            <div className="mx-auto border-b overflow-x-scroll overflow-y-hidden whitespace-nowrap border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6 md:px-0">
              <ScrollSpy>
                {sections.map((section, index) => (
                  <AnchorLink
                    key={index}
                    className={`inline-block relative bottom-[-1px] last:mr-0 py-2 px-4 text-lg leading-7 border-b-4 hover:border-current border-transparent`}
                    to={`/key-concepts/#${section.hash}`}
                    title={section.title}
                    stripHash
                  >
                    {section.title}
                  </AnchorLink>
                ))}
              </ScrollSpy>
            </div>
          </div>
        </Sticky>
      </div>

      <div id="good" className="relative mt-20 md:mt-24 overflow-x-hidden">
        <div className="text-center max-w-[30rem] md:max-w-[44rem] mx-auto">
          <div className="title-l md:title-xl max-w-[25rem] md:max-w-[30rem] mx-auto mb-3">
            Be as good as CeFi
          </div>
          <div className="copy-s text-current !mb-0">
            Vega will rival the current financial system, replacing it with one
            that puts fairness, efficiency, and accessibility at its heart.
          </div>
        </div>
      </div>

      <Container>
        <PurposeBuiltBlock />
      </Container>
    </Layout>
  );
};

export default KeyConceptsPage;
