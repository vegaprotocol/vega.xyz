import { useYesterday } from '@vegaprotocol/react-helpers'
import * as Schema from '@vegaprotocol/types'
import {
  AsyncRenderer,
  HealthBar,
  Indicator,
  Intent,
} from '@vegaprotocol/ui-toolkit'
import {
  addDecimalsFormatNumber,
  formatNumberPercentage,
  toBigNum,
} from '@vegaprotocol/utils'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import type {
  AgGridReact as AgGridReactType,
  AgGridReactProps,
  AgReactUiProps,
} from 'ag-grid-react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { graphql } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import BoxTitle from '../../components/BoxTitle'
import Container from '../../components/Container'
import GlitchTitle from '../../components/GlitchTitle'
import Layout from '../../components/Layout'
import LeadingLine from '../../components/LeadingLine'
import Link from '../../components/UI/Link'
import { Description } from '../../components/VegaMarkets/Description'
import { useMarketLiquidityProviders } from '../../hooks/use-market-liquidity'
import { useMarkets } from '../../hooks/use-markets'
import { calc24hVolume } from '../../utils/vega/24hVolume'
import { getStatus } from '../../utils/vega/getStatus'
import './liquidity-provision.css'

const MarketsLiquidity = () => {
  const { i18n, t } = useTranslation('page.liquidity-provision')

  const yesterday = useYesterday()
  const yTimestamp = useMemo(() => {
    return new Date(yesterday).toISOString()
  }, [yesterday])
  const { data, loading, error } = useMarkets(yTimestamp)

  if (loading) return <div>hi ho</div>
  if (error) return <div>Error loading markets</div>
  const markets = data?.marketsConnection?.edges || []

  return (
    <Layout stickyHeader={false}>
      <Container dataCy={'main'}>
        <div className="mx-auto max-w-[61rem] pt-6 text-center lg:pt-24">
          <h1>
            <BoxTitle text={t('Use Vega')} />
          </h1>
          <GlitchTitle
            level="1"
            color="red"
            className="title-m md:title-l lg:title-xl mb-4 mt-4 text-center md:mb-6"
          >
            <Trans t={t}>Provide Liquidity</Trans>
          </GlitchTitle>
        </div>
        <div className="mx-auto max-w-[44rem]">
          <LeadingLine className="text-center">
            <Trans t={t}>
              Liquidity providers receive a share of fees paid during trading in
              exchange for providing liquidity on the network.
            </Trans>
          </LeadingLine>
        </div>
        <div className="text-center">
          <Link
            to="https://docs.vega.xyz/mainnet/concepts/liquidity/provision"
            className="underline"
          >
            Learn more about committing liquidity
          </Link>
        </div>
        <AsyncRenderer loading={loading} error={error} data={data}>
          <div className="title-m relative mb-3 w-full">Futures</div>
          <div
            className="ag-theme-alpine relative w-full"
            style={{
              overflow: 'hidden',
            }}
          >
            <Grid
              rowData={markets}
              defaultColDef={{
                resizable: true,
                sortable: true,
                unSortIcon: true,
                cellClass: ['flex', 'flex-col', 'justify-center'],
                minWidth: 120,
              }}
            >
              <AgGridColumn
                headerName={t('Market')}
                field={'node.data.market.tradableInstrument.instrument.name'}
                cellRenderer={(params) => {
                  const market = params.data.node.data.market
                  return <Description market={market} />
                }}
                minWidth={200}
              />
              <AgGridColumn
                headerName={t('Mark Price')}
                field={'node.data.markPrice'}
                cellRenderer={(params) => {
                  const markPrice = params.data.node.data.markPrice
                  const decimals = params.data.node.data.market.decimalPlaces
                  const formattedMarkPrice = addDecimalsFormatNumber(
                    markPrice,
                    decimals
                  )
                  return formattedMarkPrice
                }}
              />
              <AgGridColumn
                headerName={t('Target Stake')}
                cellRenderer={(params) => {
                  const targetStake = params.data.node.data.targetStake
                  const decimals =
                    params.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  const formattedTargetStake = addDecimalsFormatNumber(
                    targetStake,
                    decimals
                  )
                  return formattedTargetStake
                }}
              />
              <AgGridColumn
                headerName={t('Supplied Stake')}
                cellRenderer={(params) => {
                  const suppliedStake = params.data.node.data.suppliedStake
                  const decimals =
                    params.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  const formattedSuppliedStake = addDecimalsFormatNumber(
                    suppliedStake,
                    decimals
                  )
                  const percentageStaked = percentageLiquidity(
                    params.data.node.data.suppliedStake,
                    params.data.node.data.targetStake
                  )
                  const status = params.data.node.data.marketTradingMode
                  const intent = intentForStatus(status)
                  return (
                    <div>
                      <Indicator variant={intent} />
                      {formattedSuppliedStake} <br />
                      <div
                        style={{ color: '#8B8B8B' }}
                      >{`(${percentageStaked})`}</div>
                    </div>
                  )
                }}
              />
              <AgGridColumn
                headerName={t('Liquidity Fee')}
                cellRenderer={(params) => {
                  const { data, loading, error } = useMarketLiquidityProviders(
                    params.data.node.data.market.id
                  )
                  if (loading) return null
                  if (data) {
                    const liquidityFee = data.market.fees?.factors?.liquidityFee
                    return `${liquidityFee}%`
                  }
                  return null
                }}
              />
              <AgGridColumn
                headerName={t('Volume (24h)')}
                cellRenderer={(params) => {
                  const volume24h = calc24hVolume(
                    params.data.node.candlesConnection?.edges || []
                  )
                  const positionDecimals =
                    params.data.node.data.market.positionDecimals
                  const formattedVolume24h = addDecimalsFormatNumber(
                    volume24h,
                    positionDecimals
                  )
                  return formattedVolume24h
                }}
              />
              <AgGridColumn
                headerName={t('Trading Mode')}
                field={'node.data.marketTradingMode'}
                cellRenderer={(params) => {
                  const { data, loading, error } = useMarketLiquidityProviders(
                    params.data.node.data.market.id
                  )

                  if (loading) return null
                  if (data) {
                    const targetStake = params.data.node.data.targetStake
                    const settlementAssetDecimals =
                      data.market.tradableInstrument.instrument.product
                        .settlementAsset.decimals
                    const feeLevels = getFeeLevels(
                      data.market?.liquidityProvisionsConnection?.edges || []
                    )

                    const tradingMode = params.data.node.data.marketTradingMode
                    const auctionTrigger = params.data.node.data.auctionTrigger
                    const tradingModeLabel = getStatus(
                      tradingMode,
                      auctionTrigger
                    )
                    return (
                      <div>
                        {tradingModeLabel}
                        <br />
                        <HealthBar
                          target={targetStake}
                          decimals={settlementAssetDecimals}
                          levels={feeLevels}
                          intent={intentForStatus(tradingMode)}
                        />
                      </div>
                    )
                  }
                }}
              />
            </Grid>
          </div>
        </AsyncRenderer>
      </Container>
    </Layout>
  )
}

const percentageLiquidity = (suppliedStake, targetStake) => {
  const roundedPercentage =
    parseInt((suppliedStake / parseFloat(targetStake)).toFixed(0)) * 100
  const display = Number.isNaN(roundedPercentage)
    ? 'N/A'
    : roundedPercentage > 100
      ? '>100%'
      : formatNumberPercentage(toBigNum(roundedPercentage, 0), 0)
  return display
}

type GridProps = (AgGridReactProps | AgReactUiProps) & {
  isRowClickable?: boolean
  style?: React.CSSProperties
  children: ReactNode
}
const Grid = ({ isRowClickable, children, ...props }: GridProps) => {
  const gridRef = useRef<AgGridReactType | null>(null)

  const resizeGrid = useCallback(() => {
    gridRef.current?.api?.sizeColumnsToFit()
  }, [gridRef])

  const handleOnGridReady = useCallback(() => {
    resizeGrid()
  }, [resizeGrid])

  useEffect(() => {
    window.addEventListener('resize', resizeGrid)
    return () => window.removeEventListener('resize', resizeGrid)
  }, [resizeGrid])

  return (
    <AgGridReact
      rowHeight={96}
      ref={gridRef}
      onGridReady={handleOnGridReady}
      onGridColumnsChanged={resizeGrid}
      suppressRowClickSelection
      domLayout="autoHeight"
      {...props}
    >
      {children}
    </AgGridReact>
  )
}

export default MarketsLiquidity

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

const marketTradingModeStyle = {
  [Schema.MarketTradingMode.TRADING_MODE_CONTINUOUS]: '#00D46E',
  [Schema.MarketTradingMode.TRADING_MODE_MONITORING_AUCTION]: '#CF0064',
  [Schema.MarketTradingMode.TRADING_MODE_OPENING_AUCTION]: '#0046CD',
  [Schema.MarketTradingMode.TRADING_MODE_BATCH_AUCTION]: '#CF0064',
  [Schema.MarketTradingMode.TRADING_MODE_NO_TRADING]: '#CF0064',
}

export const getColorForStatus = (status: Schema.MarketTradingMode) =>
  marketTradingModeStyle[status]

const marketTradingModeIntent = {
  [Schema.MarketTradingMode.TRADING_MODE_CONTINUOUS]: Intent.Success,
  [Schema.MarketTradingMode.TRADING_MODE_MONITORING_AUCTION]: Intent.Danger,
  [Schema.MarketTradingMode.TRADING_MODE_OPENING_AUCTION]: Intent.Primary,
  [Schema.MarketTradingMode.TRADING_MODE_BATCH_AUCTION]: Intent.Danger,
  [Schema.MarketTradingMode.TRADING_MODE_NO_TRADING]: Intent.Danger,
}

export const intentForStatus = (status: Schema.MarketTradingMode) => {
  return marketTradingModeIntent[status]
}

export const getFeeLevels = (providers: any[]) => {
  const parsedProviders = providers.map((p) => {
    const node = p?.node || {}
    return node
  })
  const lp = parsedProviders.reduce(
    (total: { [x: string]: number }, current) => {
      const { fee = '0', commitmentAmount = '0' } = current
      const ca = parseInt(commitmentAmount, 10)

      return {
        ...total,
        [fee]: total[fee] ? total[fee] + ca : ca,
      }
    },
    {}
  )

  const sortedProviders = Object.keys(lp)
    .sort()
    .map((p) => ({ fee: p, commitmentAmount: lp[p] }))

  return sortedProviders
}