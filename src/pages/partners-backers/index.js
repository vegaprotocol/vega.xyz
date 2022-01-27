import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import LinkArrow from "../../components/Svg/LinkArrow";

const PartnersBackersPage = () => {
  const partnerBackers = [
    {
      name: "Pantera Capital",
      link: "https://veradiverdict.substack.com/p/decentralized-derivatives",
    },
    {
      name: "Xpring",
      link: "https://coil.com/p/xpring/Investing-in-Vega-Protocol/cJsyyH9dq",
    },
    { name: "Hashed", link: "" },
    { name: "NGC Ventures", link: "" },
    {
      name: "gumi Cryptos Capital",
      link: "https://blog.gumi-cryptos.com/vc/why-gcc-invested-in-vega-protocol",
    },
    {
      name: "Rockaway Blockchain",
      link: "https://medium.com/rockaway-blockchain/rockaway-blockchain-announces-acquisition-of-a-stake-in-vega-a-protocol-for-decentralized-de4f4b7e3e09",
    },
    {
      name: "KR1",
      link: "https://medium.com/@KR1/kr1-october-update-986f8614c9fe",
    },
    { name: "Eden Block", link: "" },
    { name: "Focus Labs", link: "" },
    {
      name: "Greenfield One",
      link: "https://medium.com/@greenfield_one/greenfield-one-backs-vega-to-develop-decentralized-derivatives-protocol-e1ec49f98cac",
    },
    {
      name: "Monday Capital",
      link: "https://www.monday.capital/blog/2019/10/5/vega-our-latest-investment",
    },
    { name: "RSK Ecosystem Fund", link: "" },
    { name: "Zenith Ventures", link: "" },
    {
      name: "Arrington Capital",
      link: "http://arringtonxrpcapital.com/2021/03/18/toward-credibly-neutral-derivatives-announcing-our-investment-into-vega/",
    },
    { name: "CMS Holdings", link: "" },
    { name: "CMT Digital", link: "" },
    { name: "Coinbase Ventures", link: "" },
    { name: "Cumberland DRW", link: "" },
    { name: "DeFi Alliance", link: "" },
    { name: "Loi Luu", link: "" },
    { name: "Mona El Isa", link: "" },
    { name: "ParaFi Capital", link: "" },
    { name: "SevenX Ventures", link: "" },
    { name: "Signum Capital", link: "" },
    { name: "Stani Kulechov", link: "" },
    { name: "Three Commas Capital", link: "" },
    { name: "Zee Prime Capital", link: "" },
  ];

  const foundingMembers = [
    { name: "Fractal" },
    {
      name: "E-Frontier",
    },
    {
      name: "Flovtec",
    },
    {
      name: "QCP",
    },
    {
      name: "Hummingbot",
    },
    {
      name: "Proxima",
    },
    {
      name: "Luxor",
    },
  ];

  const Row = ({ member }) => {
    return (
      <div className="border-b border-current py-2">
        <div className="flex justify-between gap-x-5">
          <div className="title-s">{member.name}</div>
          {member.link ? (
            <a
              href={member.link}
              rel="noreferrer"
              className="shrink-0 title-xxs  hover:underline"
              target="_blank"
            >
              What they say
              <LinkArrow className="inline-block ml-3" />
            </a>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Seo
        title="Partners & Backers"
        description="Vega is a community and passion project for all our supporters. Explore the organisations fuelling and supporting this endeavour."
      />
      <Container>
        <div className="mb-12 pt-6 md:mb-24 lg:pt-16">
          <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
            <div className="col-span-12 md:col-span-4 lg:col-span-6">
              <h1 className="title-m lg:title-xl md:sticky md:top-6 md:pb-16">
                Partners and backers
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-6 border-t border-current">
              {partnerBackers.map((backer, idx) => {
                return <Row key={idx} member={backer} />;
              })}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 lg:col-span-6">
              <div className="md:sticky md:top-6 mb-3">
                <h1 className="title-m lg:title-xl">
                  Markets and liquidity programme
                </h1>
                <div className="title-s text-vega-mid-grey">
                  Founding Members
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-6 border-t border-current">
              {foundingMembers.map((member, idx) => {
                return <Row key={idx} member={member} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PartnersBackersPage;
