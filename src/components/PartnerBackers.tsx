import React from 'react'
import LinkArrow from './Svg/LinkArrow'
import Container from './Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const PartnerBackers = () => {
  const { t } = useTranslation('component.partners-backers')
  const partnerBackers = [
    {
      name: 'Pantera Capital',
      links: ['https://veradiverdict.substack.com/p/decentralized-derivatives'],
    },
    {
      name: 'Xpring',
    },
    { name: 'Hashed' },
    { name: 'NGC Ventures' },
    {
      name: 'gumi Cryptos Capital',
      links: [
        'https://blog.gumi-cryptos.com/vc/why-gcc-invested-in-vega-protocol',
      ],
    },
    {
      name: 'RockawayX',
      links: [
        'https://medium.com/rockaway-blockchain/rockaway-blockchain-announces-acquisition-of-a-stake-in-vega-a-protocol-for-decentralized-de4f4b7e3e09',
      ],
    },
    {
      name: 'KR1',
      links: ['https://medium.com/@KR1/kr1-october-update-986f8614c9fe'],
    },
    {
      name: 'Eden Block',
      links: ['https://www.edenblock.com/post/vega-protocol-investment-thesis'],
    },
    {
      name: 'Greenfield One',
      links: [
        'https://medium.com/@greenfield_one/greenfield-one-backs-vega-to-develop-decentralized-derivatives-protocol-e1ec49f98cac',
        'https://www.arringtoncapital.com/wp-content/uploads/2021/06/vega_the_space_race_for_open_markets.pdf',
      ],
    },
    {
      name: 'Monday Capital',
      links: [
        'https://www.monday.capital/blockchain-startups/2019/10/5/vega-our-latest-investment',
      ],
    },
    { name: 'RSK Ecosystem Fund' },
    { name: 'Zenith Ventures' },
    {
      name: 'Arrington Capital',
      links: [
        'http://arringtonxrpcapital.com/2021/03/18/toward-credibly-neutral-derivatives-announcing-our-investment-into-vega/',
        'https://www.arringtoncapital.com/wp-content/uploads/2021/06/vega_the_space_race_for_open_markets.pdf',
      ],
    },
    { name: 'CMS Holdings' },
    { name: 'CMT Digital' },
    { name: 'Coinbase Ventures' },
    { name: 'Cumberland DRW' },
    { name: 'DeFi Alliance' },
    { name: 'Loi Luu' },
    { name: 'Mona El Isa' },
    { name: 'ParaFi Capital' },
    { name: 'SevenX Ventures' },
    { name: 'Signum Capital' },
    { name: 'Stani Kulechov' },
    { name: 'Three Commas Capital' },
    { name: 'Zee Prime Capital' },
  ]

  const Row = ({ member }) => {
    return (
      <div className="border-b border-current py-2">
        <div className="flex justify-between gap-x-5">
          <div className="title-s">{member.name}</div>
          <div>
            {member.links &&
              member.links.map((link, idx) => (
                <a
                  href={link}
                  rel="noreferrer"
                  className="title-xxs block shrink-0 !leading-normal hover:underline"
                  target="_blank"
                  key={idx}
                >
                  <Trans t={t}>What they say</Trans>
                  <LinkArrow className="ml-3 inline-block" />
                </a>
              ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Container>
      <div className="mb-12 pt-6 md:mb-24 lg:pt-16" id="partners-backers">
        <div className="mb-16 grid grid-cols-12 gap-6 lg:mb-24">
          <div className="col-span-12 md:col-span-4 lg:col-span-6">
            <h2 className="text-[2rem] leading-none md:pb-16">
              <Trans t={t}>Partners and backers</Trans>
            </h2>
          </div>
          <div className="col-span-12 border-t border-current md:col-span-8 lg:col-span-6">
            {partnerBackers.map((backer, idx) => {
              return <Row key={idx} member={backer} />
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PartnerBackers
