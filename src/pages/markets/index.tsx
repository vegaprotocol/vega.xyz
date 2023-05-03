import { useYesterday } from '@vegaprotocol/react-helpers'
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
import { ReactNode } from 'react'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import Layout from '../../components/Layout'
import { useMarketLiquidityProviders } from '../../hooks/use-market-liquidity'
import { useMarkets } from '../../hooks/use-markets'
import { calc24hVolume } from '../../utils/vega/24hVolume'
import './markets.css'

const MarketsLiquidity = () => {
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
      <AsyncRenderer loading={loading} error={error} data={data}>
        <div
          className="ag-theme-alpine w-full grow"
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
            }}
          >
            <AgGridColumn
              headerName={'Market'}
              field={'node.data.market.tradableInstrument.instrument.name'}
            />
            <AgGridColumn
              headerName={'Mark Price'}
              field={'node.data.markPrice'}
            />
            <AgGridColumn
              headerName={'Target Stake'}
              cellRenderer={(params) => {
                const targetStake = params.data.node.data.targetStake
                const formattedTargetStake = addDecimalsFormatNumber(
                  targetStake,
                  5
                )
                return formattedTargetStake
              }}
            />
            <AgGridColumn
              headerName={'Supplied Stake'}
              cellRenderer={(params) => {
                const suppliedStake = params.data.node.data.suppliedStake
                const formattedSuppliedStake = addDecimalsFormatNumber(
                  suppliedStake,
                  5
                )
                const percentageStaked = percentageLiquidity(
                  params.data.node.data.suppliedStake,
                  params.data.node.data.targetStake
                )
                return (
                  <div>
                    <Indicator variant={Intent.Danger} />
                    {formattedSuppliedStake} <br />
                    {`(${percentageStaked})`}
                  </div>
                )
              }}
            />
            <AgGridColumn
              headerName={'Liquidity Fee'}
              cellRenderer={(params) => {
                const { data, loading, error } = useMarketLiquidityProviders(
                  params.data.node.data.market.id
                )
                if (loading) return null
                if (data) {
                  const liquidityFee = data.market.fees?.factors?.liquidityFee
                  return liquidityFee
                }
                return null
              }}
            />
            <AgGridColumn
              headerName={'Volume (24h)'}
              cellRenderer={(params) => {
                const volume24h = calc24hVolume(
                  params.data.node.candlesConnection?.edges || []
                )
                return volume24h
              }}
            />
            <AgGridColumn
              headerName={'Trading Mode'}
              field={'node.data.marketTradingMode'}
              cellRenderer={(params) => {
                const tradingMode = params.data.node.data.marketTradingMode
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

                  return (
                    <div>
                      {tradingMode}
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

import * as Schema from '@vegaprotocol/types'

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
