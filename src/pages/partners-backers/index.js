import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import LinkArrow from '../../components/Svg/LinkArrow'

const PartnersBackersPage = () => {
  const partnerBackers = [
    {
      name: 'Pantera Capital',
      link: 'https://veradiverdict.substack.com/p/decentralized-derivatives',
    },
    {
      name: 'Xpring',
      link: 'https://coil.com/p/xpring/Investing-in-Vega-Protocol/cJsyyH9dq',
    },
    { name: 'Hashed', link: '' },
    { name: 'NGC Ventures', link: '' },
    {
      name: 'gumi Cryptos Capital',
      link: 'https://blog.gumi-cryptos.com/vc/why-gcc-invested-in-vega-protocol',
    },
    {
      name: 'RockawayX',
      link: 'https://medium.com/rockaway-blockchain/rockaway-blockchain-announces-acquisition-of-a-stake-in-vega-a-protocol-for-decentralized-de4f4b7e3e09',
    },
    {
      name: 'KR1',
      link: 'https://medium.com/@KR1/kr1-october-update-986f8614c9fe',
    },
    {
      name: 'Eden Block',
      link: 'https://www.edenblock.com/post/vega-protocol-investment-thesis',
    },
    {
      name: 'Greenfield One',
      link: 'https://medium.com/@greenfield_one/greenfield-one-backs-vega-to-develop-decentralized-derivatives-protocol-e1ec49f98cac',
    },
    {
      name: 'Monday Capital',
      link: 'https://www.monday.capital/blog/2019/10/5/vega-our-latest-investment',
    },
    { name: 'RSK Ecosystem Fund', link: '' },
    { name: 'Zenith Ventures', link: '' },
    {
      name: 'Arrington Capital',
      link: 'http://arringtonxrpcapital.com/2021/03/18/toward-credibly-neutral-derivatives-announcing-our-investment-into-vega/',
    },
    { name: 'CMS Holdings', link: '' },
    { name: 'CMT Digital', link: '' },
    { name: 'Coinbase Ventures', link: '' },
    { name: 'Cumberland DRW', link: '' },
    { name: 'DeFi Alliance', link: '' },
    { name: 'Loi Luu', link: '' },
    { name: 'Mona El Isa', link: '' },
    { name: 'ParaFi Capital', link: '' },
    { name: 'SevenX Ventures', link: '' },
    { name: 'Signum Capital', link: '' },
    { name: 'Stani Kulechov', link: '' },
    { name: 'Three Commas Capital', link: '' },
    { name: 'Zee Prime Capital', link: '' },
  ]

  const Row = ({ member }) => {
    return (
      <div className="border-b border-current py-2">
        <div className="flex justify-between gap-x-5">
          <div className="title-s">{member.name}</div>
          {member.link ? (
            <a
              href={member.link}
              rel="noreferrer"
              className="title-xxs shrink-0  hover:underline"
              target="_blank"
            >
              What they say
              <LinkArrow className="ml-3 inline-block" />
            </a>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Seo
        title="Partners & Backers"
        description="Vega is a community and passion project for all our supporters. Explore the organisations fuelling and supporting this endeavour."
      />
      <Container dataCy={'main'}>
        <div className="mb-12 pt-6 md:mb-24 lg:pt-16">
          <div className="mb-16 grid grid-cols-12 gap-6 lg:mb-24">
            <div className="col-span-12 md:col-span-4 lg:col-span-6">
              <h1 className="title-m lg:title-xl md:sticky md:top-6 md:pb-16">
                Partners and backers
              </h1>
            </div>
            <div className="col-span-12 border-t border-current md:col-span-8 lg:col-span-6">
              {partnerBackers.map((backer, idx) => {
                return <Row key={idx} member={backer} />
              })}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default PartnersBackersPage
