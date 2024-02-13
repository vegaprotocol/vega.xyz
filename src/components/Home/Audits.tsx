import React from 'react'
import Container from '../Container'
import Button from '../UI/Button'
import { StaticImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Audits = () => {
  const { t } = useTranslation('component.audits')
  return (
    <div className="pb-space-8 pt-space-14">
      <Container>
        <div className="title-l lg:title-xl mb-6 text-center">
          <h2>
            <Trans t={t}>Audits</Trans>
          </h2>
        </div>
        <p className="body-xl mb-space-6 text-center md:mb-space-10">
          <Trans t={t}>
            Vega protocol is still in alpha and changing rapidly.
          </Trans>
          &nbsp;
          <Trans t={t}>
            As a result not all the code is currently audited, but where
            possible top quality auditors have been already been engaged to
            review the more stable parts of the protocol.
          </Trans>
        </p>
        <div className="mx-auto grid max-w-[30rem] gap-x-space-6 gap-y-space-8 md:max-w-[75rem] md:grid-cols-3">
          <div>
            <StaticImage
              src="../../images/audits/solidified.jpg"
              className="mb-space-5 h-auto w-full"
              layout="fullWidth"
              placeholder="none"
              alt=""
            />
            <p className="body-l mb-space-5">
              <Trans t={t}>
                Solidified is one of the largest smart contract auditing firms
                in the world, operating since 2017 and part of the SecurityOak
                company.
              </Trans>
            </p>
            <Button to="https://github.com/vegaprotocol/MultisigControl/blob/develop/audit/2021-10-11_MultiSigControl_Full.pdf">
              October 2021
            </Button>
          </div>
          <div>
            <StaticImage
              src="../../images/audits/fyeo.jpg"
              className="mb-space-5 h-auto w-full"
              layout="fullWidth"
              placeholder="none"
              alt=""
            />
            <p className="body-l mb-space-5">
              <Trans t={t}>
                FYEO delivers Web3 security audits, threat monitoring,
                AI-powered anti-phishing, and decentralized identity management.
              </Trans>
            </p>
            <Button to="https://github.com/vegaprotocol/MultisigControl/blob/develop/audit/2022-05-23_MultiSigControl_Decentralised_Limits_v2-0.pdf.pdf">
              May 2022
            </Button>
          </div>
          <div>
            <StaticImage
              src="../../images/audits/radically-open-security.jpg"
              className="mb-space-5 h-auto w-full"
              layout="fullWidth"
              placeholder="none"
              alt=""
            />
            <p className="body-l mb-space-5">
              <Trans t={t}>
                Radically Open Security is a non-profit computer security
                Consultancy passionate about making the world more secure.
              </Trans>
            </p>
            <Button to="https://github.com/vegaprotocol/vega.xyz/files/11896207/2021-08-23_ERC20_Vesting.1.pdf">
              August 2023
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Audits
