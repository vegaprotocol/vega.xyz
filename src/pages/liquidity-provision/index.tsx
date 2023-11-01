import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import type {
  AgGridReact as AgGridReactType,
  AgGridReactProps,
  AgReactUiProps,
} from 'ag-grid-react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import classNames from 'classnames'
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
import Seo from '../../components/Seo'
import Container from '../../components/Container'
import GlitchTitle from '../../components/GlitchTitle'
import { HealthBar } from '../../components/HealthBar'
import { Indicator } from '../../components/IntentInidcator'
import Layout from '../../components/Layout'
import LeadingLine from '../../components/LeadingLine'
import Link from '../../components/UI/Link'
import { Description } from '../../components/VegaMarkets/Description'
import { useMarketLiquidityProviders } from '../../hooks/use-market-liquidity'
import { useMarkets, validMarketStates } from '../../hooks/use-markets'
import { useYesterday } from '../../hooks/use-yesterday'
import { calc24hVolume } from '../../utils/vega/24hVolume'
import { getStatus } from '../../utils/vega/getStatus'
import { Intent } from '../../utils/vega/Intent'
import {
  addDecimalsFormatNumber,
  formatNumberPercentage,
  toBigNum,
} from '../../utils/vega/number'
import * as Schema from '../../utils/vega/types'
import './liquidity-provision.css'
import CalloutHero from '../../components/CalloutHero'
import BigNumber from 'bignumber.js'
import TranslationsBanner from '../../components/TranslationsBanner'
import { ITooltipParams, RowClickedEvent } from 'ag-grid-community'

/*
We're using a global variable here to store the selected product type, because
ag-grid doesn't update the doesExternalFilterPass function on any state change.
By externalising the state, we can force the check to always happen on an up-to-
date value.
We set this value alongside setState() for selectedProductType and have an empty
useEffect reading selectedProductType to force a rerender when the value changes.
*/
let localSelectedProductType

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
  const [selectedProductType, setSelectedProductType] = useState<
    string | undefined
  >(undefined)

  useEffect(() => { }, [selectedProductType])

  if (loading) return <div>hi ho</div>
  if (error) return <div>Error loading markets</div>
  const markets = data?.marketsConnection?.edges || []

  return (
    <Layout stickyHeader={false}>
      <Seo
        title={t('Liquidity Provision')}
        description={t(
          'Liquidity providers receive a share of fees paid during trading in exchange for providing liquidity on the network.'
        )}
      />
      <Container dataCy={'main'}>
        {missingTranslations && <TranslationsBanner />}
        <div className="mx-auto max-w-[61rem] pt-6 text-center lg:pt-24">
          <GlitchTitle
            level="1"
            color="red"
            className="title-m md:title-l lg:title-xl mb-4 mt-4 text-center md:mb-6"
          >
            <Trans t={t}>Liquidity Provision</Trans>
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
                <li>
                  <Trans t={t}>
                    Provides its software under open source licences
                  </Trans>
                </li>
                <li>
                  <Trans t={t}>
                    Does not operate or run the Vega Blockchain or any other
                    blockchain
                  </Trans>
                </li>
                <li>
                  <Trans t={t}>
                    Does not create, generate or warrant the accuracy of the
                    data
                  </Trans>
                </li>
                <li>
                  <Trans t={t}>
                    Has no liability for any loss arising from the use of that
                    data.
                  </Trans>
                </li>
              </ul>
            </div>
          </CalloutHero>
        </div>
        <div>
          <div className="mb-2 flex w-full gap-4 text-lg">
            <button
              className={classNames('rounded p-2', {
                'text-vega-dark-600 dark:text-vega-light-600 bg-vega-light-200 dark:bg-vega-dark-200':
                  selectedProductType === undefined,
                'text-vega-light-300 dark:text-vega-dark-300':
                  selectedProductType !== undefined,
              })}
              onClick={() => {
                setSelectedProductType(undefined)
                localSelectedProductType = undefined
              }}
            >
              All
            </button>
            <button
              className={classNames('rounded p-2', {
                'text-vega-dark-600 dark:text-vega-light-600 bg-vega-light-200 dark:bg-vega-dark-200':
                  selectedProductType === 'Future',
                'text-vega-light-300 dark:text-vega-dark-300':
                  selectedProductType !== 'Future',
              })}
              onClick={() => {
                setSelectedProductType('Future')
                localSelectedProductType = 'Future'
              }}
            >
              Futures
            </button>
            <button
              className={classNames('rounded p-2', {
                'text-vega-dark-600 dark:text-vega-light-600 bg-vega-light-200 dark:bg-vega-dark-200':
                  selectedProductType === 'Perpetual',
                'text-vega-light-300 dark:text-vega-dark-300':
                  selectedProductType !== 'Perpetual',
              })}
              onClick={() => {
                setSelectedProductType('Perpetual')
                localSelectedProductType = 'Perpetual'
              }}
            >
              Perpetuals
            </button>
          </div>
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
                  const {
                    data: marketWithLiquidityData,
                    loading,
                    error,
                  } = useMarketLiquidityProviders(
                    params.data.node.data.market.id
                  )

                  if (loading) return null
                  if (marketWithLiquidityData) {
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
                    const auctionTrigger =
                      marketWithLiquidityData.market
                        .liquidityMonitoringParameters.triggeringRatio

                    const intentForLiquidity = intentForProvisionedLiquidity(
                      parseFloat(targetStake),
                      parseFloat(suppliedStake),
                      parseFloat(auctionTrigger)
                    )
                    return (
                      <div>
                        <Indicator variant={intentForLiquidity} />
                        {formattedSuppliedStake} <br />
                        <div
                          style={{ color: '#8B8B8B' }}
                        >{`(${percentageStaked})`}</div>
                      </div>
                    )
                  }
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
                colId="liquiditySLATime"
                headerName={t('Min time on book')}
                headerTooltip={t(
                  'The minimum percentage of market time on book liquidity providers are expected to be available for this market'
                )}
                cellRenderer={(params) => {
                  const { commitmentMinTimeFraction } =
                    params.data.node.data.market.liquiditySLAParameters

                  const timePercentage = commitmentMinTimeFraction * 100
                  return <>{timePercentage}%</>
                }}
              />
              <AgGridColumn
                colId="liquiditySLAVolume"
                headerName={t('Liquidity price range')}
                headerTooltip={t(
                  'The minimum amount of volume liquidity providers are expected to have available for this market'
                )}
                cellRenderer={(params) => {
                  const { priceRange } =
                    params.data.node.data.market.liquiditySLAParameters

                  const pricePercentage = priceRange * 100
                  return (
                    <>
                      {pricePercentage}%
                      <span className="text-vega-mid-grey"> of midprice</span>
                    </>
                  )
                }}
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
                  const {
                    data: marketWithLiquidityData,
                    loading,
                    error,
                  } = useMarketLiquidityProviders(
                    params.data.node.data.market.id
                  )

                  if (loading) return null
                  if (marketWithLiquidityData) {
                    const targetStake = params.data.node.data.targetStake
                    const settlementAssetDecimals =
                      marketWithLiquidityData.market.tradableInstrument
                        .instrument.product.settlementAsset.decimals

                    const networkStakeToCcyVolume =
                      marketWithLiquidityData.networkParameter?.value || 1
                    const feeLevels = getFeeLevels(
                      marketWithLiquidityData.market
                        ?.liquidityProvisionsConnection?.edges || [],
                      networkStakeToCcyVolume
                    )

                    const tradingMode = params.data.node.data.marketTradingMode
                    const auctionTrigger =
                      marketWithLiquidityData.market
                        .liquidityMonitoringParameters.triggeringRatio
                    const tradingModeLabel = getStatus(
                      tradingMode,
                      auctionTrigger
                    )
                    const suppliedStake = params.data.node.data.suppliedStake
                    const intent = intentForProvisionedLiquidity(
                      parseFloat(targetStake),
                      parseFloat(suppliedStake),
                      parseFloat(auctionTrigger)
                    )
                    return (
                      <div>
                        {tradingModeLabel}
                        <br />
                        <HealthBar
                          target={targetStake}
                          decimals={settlementAssetDecimals}
                          levels={feeLevels}
                          intent={intent}
                          triggerRatio={auctionTrigger}
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
        </div>
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
          const productType =
            node.data.node.data.market.tradableInstrument.instrument.product
              .__typename

          const isSelectedProductType =
            !localSelectedProductType ||
            localSelectedProductType === productType

          return validMarketStates.includes(state) && isSelectedProductType
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

const intentForProvisionedLiquidity = (
  targetStake,
  suppliedStake,
  auctionTrigger
) => {
  if (suppliedStake >= targetStake) {
    return Intent.Success
  }
  if (suppliedStake <= targetStake) {
    if (suppliedStake <= auctionTrigger * targetStake) {
      {
        return Intent.Danger
      }
    } else return Intent.Warning
  }
  return Intent.Primary
}

export const getFeeLevels = (
  providers: any[],
  networkStakeToCcyVolume: number
) => {
  const parsedProviders = providers.map((p) => {
    const node = p?.node || {}
    return node
  })
  const lp = parsedProviders.reduce(
    (total: { [x: string]: number }, current) => {
      const {
        fee = '0',
        commitmentAmount = '0',
        party: {
          accountsConnection: { edges },
        },
      } = current
      const bondAccountBalance =
        parseInt(edges[0]?.node?.balance, 10) * networkStakeToCcyVolume
      const ca = parseInt(commitmentAmount, 10)

      return {
        ...total,
        [fee]: total[fee]
          ? total[fee] + bondAccountBalance
          : bondAccountBalance,
      }
    },
    {}
  )

  const sortedProviders = Object.keys(lp)
    .sort()
    .map((p) => {
      return { fee: p, commitmentAmount: lp[p] }
    })
  return sortedProviders
}

const percentageFormatter = (value) => {
  if (!value) return '-'
  return formatNumberPercentage(new BigNumber(value).times(100), 2) || '-'
}

const liquidityDetailsConsoleLink = (marketId: string, consoleLink: string) =>
  `${consoleLink}/#/liquidity/${marketId}`

const tooltipContentClasses =
  'max-w-sm bg-vega-light-100 dark:bg-vega-dark-100 border border-vega-light-200 dark:border-vega-dark-200 px-2 py-1 z-20 rounded text-xs text-black dark:text-white break-word'
const TooltipCellComponent = (props: ITooltipParams) => {
  return (
    <div className={tooltipContentClasses} role="tooltip">
      {props.value}
    </div>
  )
}
