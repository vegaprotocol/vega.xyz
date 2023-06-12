import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby'
import Tag from '../../components/UI/Tag'
import Callout from '../../components/Callout'
import Button from '../../components/UI/Button'
import Link from '../../components/UI/Link'
import NetworkParameter from '../../components/NetworkParameter'
import ParameterBox from '../../components/ParameterBox'
import ValidatorsFooterResponsive from '../../components/Svg/Validators/Footer/Responsive'

import Table from '../../components/UI/Table'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'
import { useNetworkParams } from '../../hooks/use-network-params'

const Arrow = () => {
  return (
    <div className="max-w-[18.75rem]">
      <StaticImage
        src="../../images/page-validators-rewards-arrow.png"
        alt=""
        width={64}
        height={18}
      />
    </div>
  )
}

const StandByValidatorsLimit = () => {
  const { params } = useNetworkParams()

  return (
    <>
      {params && (
        <ParameterBox
          value={Math.floor(
            params.network_validators_ersatz_multipleOfTendermintValidators *
              params.network_validators_tendermint_number
          )}
          description={`This value is determined by the network parameter ‘network.validators.ersatz.multipleOfTendermintValidators’ multiplied by ‘network.validators.tendermint.number’`}
        />
      )}
    </>
  )
}

const ValidatorsPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.validators')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const { params } = useNetworkParams()

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const tableData = {
    headings: ['', 'Limit*', 'Reward multiplier**', 'Validator Score'],
    rows: [
      ['Candidate Validators', 'Standby Validators', 'Consensus Validators'],
      [
        'Unlimited',
        <StandByValidatorsLimit />,
        <NetworkParameter param="network_validators_tendermint_number" />,
      ],
      [
        'None',
        <NetworkParameter
          param="network_validators_ersatz_rewardFactor"
          prefix="x "
        />,
        <ParameterBox
          value="1"
          prefix="x "
          description="This value is always set to 1 for Consensus validators"
        />,
      ],
      ['Lowest', <Arrow />, 'Highest'],
    ],
  }

  return (
    <Layout>
      <Seo
        title={t('Validate and secure the network')}
        description={t(
          "Vega is a delegated proof of stake network with a finite number of validators, rewarded for securing the network. Consensus validators run a node validating the blocks containing the network's transactions and Vega token holders nominate validators through staking - delegating their VEGA to their chosen validator."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-space-8 max-w-[60rem] pt-space-5 md:pt-space-6 lg:pt-space-7">
          <h1 className="mb-space-4">
            <Tag>
              <Trans t={t}>Use Vega</Trans>
            </Tag>
          </h1>
          <h2 className="heading-l mb-space-8">
            <Trans t={t}>Validate and secure the network</Trans>
          </h2>
          <div className="body-xl">
            <Trans t={t}>
              Vega is a delegated proof of stake network with a finite number of
              validators, rewarded for securing the network. Consensus
              validators run a node validating the blocks containing the
              network's transactions and Vega token holders nominate validators
              through staking - delegating their VEGA to their chosen validator.
            </Trans>
          </div>
        </div>
        <h2 className="heading-s">
          <Trans t={t}>Validator rewards</Trans>
        </h2>

        <div className="mt-10 mb-16">
          {params && (
            <>
              <Table headings={tableData.headings} rows={tableData.rows} />
              <div className="max-w-[50rem]">
                <p className="body-m mt-4 text-vega-mid-grey dark:text-vega-grey">
                  <Trans t={t}>
                    * The no. of Consensus Validators is expected to increase
                    through governance, further decentralising the protocol over
                    time, with the no. of Standby Validators increasing as a
                    multiple of the number of Consensus Validators, currently
                    configured to{' '}
                    <NetworkParameter param="network_validators_ersatz_multipleOfTendermintValidators" />
                    .
                  </Trans>
                </p>
                <p className="body-m mt-4 text-vega-mid-grey dark:text-vega-grey">
                  <Trans t={t}>
                    **Consensus validators secure the network and therefore earn
                    rewards. Standby validators are ready to step up and fill
                    open consensus validator slots and therefore are also
                    rewarded by the protocol. However their share of rewards is
                    penalised relative to consensus validators by a factor of{' '}
                    <NetworkParameter
                      param="network_validators_ersatz_rewardFactor"
                      prefix="x "
                    />
                  </Trans>
                </p>
              </div>
            </>
          )}
        </div>

        <Callout>
          <h2 className="body-xl mb-4">
            <Trans t={t}>Become a Mainnet Validator</Trans>
          </h2>
          <div className="body-l prose mb-6 max-w-none prose-a:text-black dark:prose-a:text-white">
            <p>
              <Trans t={t}>
                Any participant in the Vega network can become a validator.
                You'll need to set up a node and its infrastructure, submit a
                transaction on chain, self-stake{' '}
                <NetworkParameter
                  param="reward_staking_delegation_minimumValidatorStake"
                  formatForVega={true}
                  suffix=" $VEGA"
                />{' '}
                and attract token holders to stake (delegate) their tokens to
                you.
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                Those with the highest{' '}
                <Link to="https://docs.vega.xyz/docs/mainnet/concepts/vega-chain#validating-node-performance">
                  validator scores
                </Link>{' '}
                (a measure of performance and stake) become consensus validators
                and earn the greatest rewards from infrastructure fees paid on
                every trade and transfer, with a portion distributed to stakers
                and standby validators. The{' '}
                <Link to="https://governance.vega.xyz/validators">
                  validators list
                </Link>{' '}
                is refreshed every epoch{' '}
                <NetworkParameter param="validators_epoch_length" />.
              </Trans>
            </p>
          </div>
          <Button to="https://docs.vega.xyz/mainnet/node-operators">
            Become a Mainnet validator
          </Button>
        </Callout>
      </Container>
      <ValidatorsFooterResponsive />
    </Layout>
  )
}

export default ValidatorsPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
