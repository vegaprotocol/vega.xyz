import React, { useState, useEffect } from 'react'
import Incentive from './Incentive'
import Button from './UI/Button'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Incentives = ({ limit = 10, allowLoadMore = false }) => {
  const { t } = useTranslation('component.incentives')
  const pageSize = limit
  const [incentives, setIncentives] = useState(null)
  const [list, setList] = useState(null)
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    async function fetchIncentives() {
      let response = await fetch(
        'https://notion-data-service.ops.vega.xyz/query?id=aa64c6a0-0e0d-460d-ad44-ceacc6cd5957'
      )
      response = await response.json()

      // the following logic will probably be made redundant when the calendar API feed is updated

      // extract relevant data
      let result = response.notion_data.map((elem) => {
        return {
          link: elem.properties.find((element) => element.name === 'Link')
            .values,
          status: elem.properties.find((element) => element.name === 'Status')
            .values[0],
          type: elem.properties.find((element) => element.name === 'Type')
            .values[0],
          tags: elem.properties.find((element) => element.name === 'Tags')
            .values,
          reward: elem.properties.find((element) => element.name === 'Reward')
            .values[0],
          name: elem.properties.find((element) => element.name === 'Name')
            .values[0],
          start_date: new Date(
            // create date objects
            elem.properties.find(
              (element) => element.name === 'Start Date'
            ).values[0]
          ),
          end_date: new Date(
            // create date objects
            elem.properties.find(
              (element) => element.name === 'End Date'
            ).values[0]
          ),
        }
      })

      // remove entries with no name (assumed an empty row) and reverse array
      result = result.filter((elem) => elem.name).reverse()

      setIncentives(result)
      setList([...result.slice(0, pageSize)])
      setHasMore(result.length > pageSize)
    }
    fetchIncentives()
  }, [])

  useEffect(() => {
    if (incentives) {
      if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < incentives.length
        const nextResults = isMore
          ? incentives.slice(currentLength, currentLength + pageSize)
          : []
        setList([...list, ...nextResults])
        setLoadMore(false)
      }
    }
  }, [loadMore, hasMore, incentives, list])

  useEffect(() => {
    if (incentives && list) {
      const isMore = list.length < incentives.length
      setHasMore(isMore)
    }
  }, [list, incentives])

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  return (
    <div className="grey-box mb-16 bg-vega-light-grey p-6 dark:bg-vega-box-grey dark:text-white md:p-8">
      <div className="mb-space-5 flex items-end justify-between md:mb-space-8">
        <h1 className="title-m font-glitched md:title-l mt-4">
          <Trans t={t}>Developer Bounties</Trans>
        </h1>
        <div className="hidden md:block">
          <Button to="https://github.com/vegaprotocol/bounties/">
            <Trans t={t}>View all</Trans>
          </Button>
        </div>
      </div>
      {list ? (
        <div>
          {list.map((incentive, idx) => (
            <Incentive
              key={idx}
              title={incentive.name}
              status={incentive.status}
              type={incentive.type}
              reward={incentive.reward}
              difficulty="5"
              link={incentive.link}
            />
          ))}

          {allowLoadMore && hasMore && (
            <button
              onClick={handleLoadMore}
              className="button-link
              group
              relative
              inline-block"
            >
              <div className="leading-1 relative top-0 z-10 inline-block border border-black bg-vega-light-grey px-8 py-3 text-[0.9375rem] uppercase tracking-[0.01rem] transition-[top] group-hover:-top-1.5 dark:border-white dark:bg-vega-box-grey">
                <Trans t={t}>Load more...</Trans>
              </div>
              <div className="absolute inset-0 border border-black bg-white dark:border-white dark:bg-black"></div>
            </button>
          )}
          <div className="md:hidden">
            <Button to="https://github.com/vegaprotocol/bounties/">
              <Trans t={t}>View all</Trans>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default Incentives
