import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import Calendar from "../../components/Calendar";

const Events = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Incentives and bounties"
        description="Join the Vega community, where a fair finance future is being co-created - starting with derivatives."
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 mb-14">
          <BoxTitle text="Community" />
          <h1 className="title-m font-glitched md:title-l mt-4">
            Upcoming events + meetups
          </h1>
        </div>
        <Calendar />
      </Container>
    </Layout>
  );
};

export default Events;
