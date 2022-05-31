import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import LeadingLine from "../../components/LeadingLine";

const GovernancePage = () => {
  return (
    <Layout>
      <Seo
        title="Governance"
        description="Governance allows the Vega network to arrive at on-chain decisions, where tokenholders can create proposals that other tokenholders can vote to approve or reject."
      />
      <Container dataCy={"main"}>
        <div className="max-w-[61rem] mx-auto text-center pt-6 lg:pt-16">
          <h1>
            <BoxTitle text="Governance" />
          </h1>
          <h2 className="text-center title-m font-glitched md:title-l lg:title-xl mb-4 md:mb-6 mt-4">
            The Vega Protocol is owned and governed by Vega token holders
          </h2>
        </div>
        <div className="max-w-[44rem] mx-auto">
          <LeadingLine className="text-center">
            Governance allows the Vega network to arrive at on-chain decisions,
            where tokenholders can create proposals that other tokenholders can
            vote to approve or reject.
          </LeadingLine>
        </div>
      </Container>
    </Layout>
  );
};

export default GovernancePage;
