import React, { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import BoxTitle from "../../components/BoxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Events = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Swag"
        description="Find out how to get your hands on Vega swag"
      />
      <Container dataCy={"main"}>
        <div className="grid grid-cols-12 pt-16 mb-14">
          <div className="relative z-10 -mt-6 md:mt-0 col-span-12 md:col-span-5 self-center">
            <BoxTitle text="Community" />
            <h1 className="title-l mt-4 title-xxl lg:title-xxxl xl:title-xxxxl">
              Want
              <br />
              Swag?
            </h1>
            <div className="mt-4 !mb-6 copy-s">Get your hands on it here</div>
            <ButtonLink
              link="https://vega.xyz/discord/"
              text="Ask us on Discord"
            />
          </div>
          <div className="pt-16 md:pt-0 col-span-12 md:col-span-7 text-center">
            <StaticImage
              src="../../images/vega-swag.png"
              alt="Vega Swag"
              placeholder="none"
              layout="constrained"
              width={520}
              height={584}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Events;
