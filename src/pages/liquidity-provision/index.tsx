import { useYesterday } from '@vegaprotocol/react-helpers'
import * as Schema from '@vegaprotocol/types'
import {
  AsyncRenderer,
  HealthBar,
  Indicator,
  Intent,
  TooltipCellComponent,
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
  useState,
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
import CalloutHero from '../../components/CalloutHero'
import BigNumber from 'bignumber.js'
import TranslationsBanner from '../../components/TranslationsBanner'
import { RowClickedEvent } from 'ag-grid-community'

const MarketsLiquidity = () => {
  const { i18n, t } = useTranslation('page.liquidity-provision')
  const [missingTranslations, setMissingTranslations] = useState(false)
  i18n.on('missingKey', (_lng) => {
    setMissingTranslations(true)
  })

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
        {missingTranslations && <TranslationsBanner />}
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
        <div className="mx-auto mb-3 max-w-[44rem]">
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
        <div className="my-8">
          <CalloutHero
            title={t(
              'The data relating to markets on this page is obtained from nodes on the Vega Blockchain.'
            )}
            text={undefined}
            buttonText={undefined}
            buttonLink={undefined}
          >
            <div className="copy-xxs">
              Gobalsky Labs Limited:
              <ul className="list-inside list-disc">
                <li>Provides its software under open source licences</li>
                <li>
                  Does not operate or run the Vega Blockchain or any other
                  blockchain
                </li>
                <li>
                  Does not create, generate or warrant the accuracy of the data
                </li>
                <li>
                  Has no liability for any loss arising from the use of that
                  data.
                </li>
              </ul>
            </div>
          </CalloutHero>
        </div>
        <AsyncRenderer loading={loading} error={error} data={data}>
          <div className="title-m relative mb-3 w-full">Futures</div>
          <div
            className="ag-theme-alpine relative mb-16 w-full"
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
                tooltipComponent: TooltipCellComponent,
              }}
              tooltipShowDelay={500}
            >
              <AgGridColumn
                colId="market"
                headerName={t('Market')}
                field={'node.data.market.tradableInstrument.instrument.name'}
                cellRenderer={(params) => {
                  const market = params.data.node.data.market
                  return <Description market={market} />
                }}
                headerTooltip={t('The market name, code and settlement asset')}
                minWidth={200}
              />
              <AgGridColumn
                colId="markPrice"
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
                headerTooltip={t('Latest price for this market')}
                comparator={(valueA, valueB, nodeA, nodeB) => {
                  const parsedA = toBigNum(
                    valueA,
                    nodeA.data.node.data.market.decimalPlaces
                  )
                  const parsedB = toBigNum(
                    valueB,
                    nodeB.data.node.data.market.decimalPlaces
                  )

                  return parsedA.minus(parsedB).toNumber()
                }}
              />
              <AgGridColumn
                colId="targetStake"
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
                headerTooltip={t(
                  'The ideal committed liquidity to operate the market, derived from the maximum open interest observed over a rolling time window. If the total commitment is currently below this level then LPs can set the fee level with a new commitment.'
                )}
                comparator={(_valueA, _valueB, nodeA, nodeB) => {
                  const parsedA = toBigNum(
                    nodeA.data.node.data.targetStake,
                    nodeA.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  )
                  const parsedB = toBigNum(
                    nodeB.data.node.data.targetStake,
                    nodeB.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  )

                  return parsedA.minus(parsedB).toNumber()
                }}
              />
              <AgGridColumn
                colId="suppliedStake"
                headerName={t('Supplied Stake')}
                cellRenderer={(params) => {
                  const suppliedStake = params.data.node.data.suppliedStake
                  const targetStake = params.data.node.data.targetStake
                  const decimals =
                    params.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  const formattedSuppliedStake = addDecimalsFormatNumber(
                    suppliedStake,
                    decimals
                  )
                  const percentageStaked = percentageLiquidity(
                    suppliedStake,
                    targetStake
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
                headerTooltip={t(
                  'The current amount of liquidity supplied for this market.'
                )}
                comparator={(_valueA, _valueB, nodeA, nodeB) => {
                  const stakedA = nodeA.data.node.data.suppliedStake
                  const decimalsA =
                    nodeA.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals
                  const stakedB = nodeB.data.node.data.suppliedStake
                  const decimalsB =
                    nodeB.data.node.data.market.tradableInstrument.instrument
                      .product.settlementAsset.decimals

                  const parsedA = toBigNum(stakedA, decimalsA)
                  const parsedB = toBigNum(stakedB, decimalsB)

                  const targetA = toBigNum(
                    nodeA.data.node.data.targetStake,
                    decimalsA
                  )
                  const targetB = toBigNum(
                    nodeB.data.node.data.targetStake,
                    decimalsB
                  )

                  if (targetA.isEqualTo(0) && targetB.isEqualTo(0)) return 0
                  if (targetA.isEqualTo(0)) return -1
                  if (targetB.isEqualTo(0)) return 1
                  const percentageA = parsedA
                    .dividedBy(targetA)
                    .multipliedBy(100)
                  const percentageB = parsedB
                    .dividedBy(targetB)
                    .multipliedBy(100)
                  if (
                    percentageA.isGreaterThanOrEqualTo(100) &&
                    percentageB.isGreaterThanOrEqualTo(100)
                  ) {
                    return parsedA.minus(parsedB).toNumber()
                  }

                  return percentageA.minus(percentageB).toNumber()
                }}
              />
              <AgGridColumn
                colId="liquidityFee"
                headerName={t('Liquidity Fee')}
                cellRenderer={(params) => {
                  const { data, loading, error } = useMarketLiquidityProviders(
                    params.data.node.data.market.id
                  )
                  if (loading) return null
                  if (data) {
                    const liquidityFee = data.market.fees?.factors?.liquidityFee
                    return percentageFormatter(liquidityFee)
                  }
                  return null
                }}
                headerTooltip={t(
                  'The fee percentage (per trade) charged by liquidity providers on this market'
                )}
                sortable={false}
              />
              <AgGridColumn
                colId="volume24h"
                headerName={t('Volume (24h)')}
                cellRenderer={(params) => {
                  const volume24h = calc24hVolume(
                    params.data.node.candlesConnection?.edges || []
                  )
                  const positionDecimals =
                    params.data.node.data.market.positionDecimalPlaces
                  const formattedVolume24h = addDecimalsFormatNumber(
                    volume24h,
                    positionDecimals
                  )
                  return formattedVolume24h
                }}
                headerTooltip={t(
                  'The total number of contracts traded in the last 24 hours.'
                )}
                comparator={(_valueA, _valueB, nodeA, nodeB) => {
                  const volume24hA = calc24hVolume(
                    nodeA.data.node.candlesConnection?.edges || []
                  )
                  const volume24hB = calc24hVolume(
                    nodeB.data.node.candlesConnection?.edges || []
                  )
                  const positionDecimalsA =
                    nodeA.data.node.data.market.positionDecimalPlaces
                  const positionDecimalsB =
                    nodeB.data.node.data.market.positionDecimalPlaces
                  const parsedA = toBigNum(volume24hA, positionDecimalsA)
                  const parsedB = toBigNum(volume24hB, positionDecimalsB)
                  return parsedA.minus(parsedB).toNumber()
                }}
              />
              <AgGridColumn
                colId="marketStatus"
                headerName={t('Market Status')}
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
                headerTooltip={t(
                  'The current market status - those below the black target stake line are at risk of entering liquidity auction'
                )}
                sortable={false}
              />
            </Grid>
          </div>
        </AsyncRenderer>
      </Container>
    </Layout>
  )
}

const percentageLiquidity = (suppliedStake, targetStake) => {
  const roundedPercentage = (suppliedStake / targetStake) * 100
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

  const handleOnFirstData = useCallback((params) => {
    const defaultSortModel = [
      {
        colId: 'suppliedStake',
        sort: 'asc',
        sortIndex: 0,
      },
      {
        colId: 'targetStake',
        sort: 'desc',
        sortIndex: 1,
      },
    ]
    params.columnApi.applyColumnState({ state: defaultSortModel })
  }, [])

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
      onFirstDataRendered={handleOnFirstData}
      suppressRowClickSelection
      domLayout="autoHeight"
      multiSortKey="ctrl"
      {...props}
      gridOptions={{
        onRowClicked: ({ data }: RowClickedEvent) => {
          window.open(
            liquidityDetailsConsoleLink(
              data.node.data.market.id,
              'https://console.vega.xyz'
            ),
            '_blank',
            'noopener,noreferrer'
          )
        },
        isExternalFilterPresent: () => true,
        doesExternalFilterPass: (node) => {
          const state = node.data.node.data.marketState
          return validMarketStates.includes(state)
        },
      }}
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

const percentageFormatter = (value) => {
  if (!value) return '-'
  return formatNumberPercentage(new BigNumber(value).times(100), 2) || '-'
}

const liquidityDetailsConsoleLink = (marketId: string, consoleLink: string) =>
  `${consoleLink}/#/liquidity/${marketId}`

const validMarketStates = [
  'STATE_UNSPECIFIED',
  'STATE_PENDING',
  'STATE_ACTIVE',
  'STATE_SUSPENDED',
]
