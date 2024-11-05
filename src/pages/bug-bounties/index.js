import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import Container from '../../components/Container'
import Callout from '../../components/Callout'
import pgpKeyFile from '../../../vega-public-key.asc'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const BugBountiesPage = ({ data }) => {
  const { t } = useTranslation('page.bug-bounties')

  return (
    <Layout>
      <Seo
        title={t('Bug bounties')}
        description={t(
          'Found a software security issue? Report it to us and earn rewards by finding bugs that affect the Vega Network.'
        )}
      />
      <Container>
        <div className="pt-space-5 md:pt-space-6 lg:pt-space-10">
          <div className=" border-t border-current">
            <div className="pt-4 md:grid md:grid-cols-12">
              <div className="md:col-span-5 md:pr-12 lg:col-span-4">
                <h1 className="mb-6 max-w-[25rem] text-[2.5rem] leading-none">
                  <Trans t={t}>Bug bounties</Trans>
                </h1>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div className="prose mb-16 max-w-none dark:prose-invert prose-headings:border-0">
                  <h2>
                    <Trans t={t}>
                      Found a software security issue? Report it to us and earn
                      rewards by finding bugs that affect the Vega Network.
                    </Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      If you believe that you have spotted a vulnerability in
                      either the Vega protocol software (node, data node,
                      wallet, etc.) or network or any supporting systems or code
                      used by the project, please submit a bug report by email
                      or the web-form as described below to have this situation
                      resolved as soon as possible.
                    </Trans>
                  </p>
                  <h2>
                    <Trans t={t}>Scope</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      Vega bug bounties are limited to the Core, Datanode, and
                      all front end dApps including the desktop and hosted
                      wallets.
                    </Trans>
                  </p>
                  <p>
                    <Trans t={t}>
                      The vega.xyz website or any bug related to the vega.xyz
                      email domain are out of scope. The program is meant for
                      serious bugs that have significant impact on security.
                      Bugs on the vega.xyz website would only qualify if they
                      demonstrate how to modify website content to replace links
                      in order to for instance; host malicious software on the
                      downloads section of the site, link to different github
                      code repositories, link to impersonator Twitter / Discord
                      accounts from the Community section etc. In particular if
                      any automated scanner reports that there is an issue with
                      vega.xyz then this on its own does not merit a report.
                    </Trans>
                  </p>
                  <h2>
                    <Trans t={t}>How to</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      Prevent a potential vulnerability being abused by others:
                    </Trans>
                  </p>
                  <ul>
                    <li>
                      <Trans t={t}>
                        Submit a bug through email or, if you prefer,
                        anonymously via the contact form below. If you want to
                        send an encrypted message, use the Vega PGP key and send
                        the email to security@vega.xyz.
                      </Trans>
                    </li>

                    <li>
                      <Trans t={t}>
                        Provide sufficient information (for example, a detailed
                        description including logs, how to reproduce the
                        vulnerability, scripts, screenshots, etc.) so that the
                        security issue can be addressed as effectively as
                        possible.
                      </Trans>
                    </li>
                  </ul>
                  <p>
                    <Trans t={t}>
                      Please do not share knowledge about the vulnerability with
                      others, until the issue has been fixed or we have worked
                      out some safe and coordinated way of publication with you.
                      Do not abuse the vulnerability. After a vulnerability has
                      been reported, you will be contacted within 2 working days
                      to make arrangements for a reasonable period of recovery,
                      a possible coordinated publication of the vulnerability
                      and reward.
                    </Trans>
                  </p>
                  <h2>
                    <Trans t={t}>Eligibility</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      Reward eligibility may be constrained by legal factors
                      (e.g., not being allowed to make payments to certain
                      countries or to transfer assets to anonymous accounts). We
                      will do our best to find a way to reward submitters fairly
                      for their discoveries, but may not be able to under all
                      circumstances. Also, vulnerability abuse or sharing with
                      third parties may disqualify you from any reward payment.
                    </Trans>
                  </p>
                  <h2>
                    <Trans t={t}>We are not network operators</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      As a decentralized system, we are entirely separate from
                      any validators running the Vega protocol and
                      vulnerabilities relevant to specific validators should be
                      reported to them directly (though feel free to let us know
                      if you think a validator is not responding appropriately).
                      In addition, we have no influence on how the validators
                      (or their cloud providers) might react if you poke their
                      systems, so we cannot help you if you do so in any way
                      that upsets them. For testing your discoveries, using a
                      separate protocol instance that you can run for yourselves
                      is advised. The best way to do this is via the{' '}
                      <a
                        href="https://docs.vega.xyz/mainnet/tools#vega-capsule"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Trans t={t}></Trans>Vega Capsule tool
                      </a>
                      .
                    </Trans>
                  </p>
                  <h2>
                    <Trans t={t}>Encrypted or anonymous submissions</Trans>
                  </h2>
                  <p>
                    <Trans t={t}>
                      If you want to send an encrypted message to
                      security@vegaprotocol.io, you can use our PGP key, which
                      is detailed below.
                    </Trans>
                  </p>
                </div>

                <Callout
                  title={t('PGP Key')}
                  text={t(
                    'This is the PGP key that can be used to securely submit security issues to the project team. Please note that this is the only usage of the key; especially, this key will never be used to issue signatures that are in any way meaningful or binding. We also may change the key at any time, so please make sure to check here for the current version.'
                  )}
                >
                  {/* prettier-ignore */}
                  <pre className="font-mono">
                    <div className="overflow-x-auto mt-8 mb-3">
                    {pgpKeyFile}
                    </div>
                  </pre>
                </Callout>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default BugBountiesPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
