import React from 'react'
import Button from './UI/Button'
import LeaderboardListItem from './UI/LeaderboardListItem'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

export interface LeaderboardParams {
  data: any[]
  limit?: number | false
  moreLink?: string | null
}

const Leaderboard = ({ data, limit = false, moreLink }: LeaderboardParams) => {
  const { t } = useTranslation('component.ambassador-leaderboard')
  const leaderboardData = data.slice(0, limit ? limit : data.length)

  const extractHandle = (name) => {
    const idx = name.lastIndexOf('#')
    return {
      handle: name.substr(0, idx) ? name.substr(0, idx) : name,
      handleId: name.substr(idx) ? name.substr(idx) : '',
    }
  }

  return (
    <div>
      <div>
        <table className="mb-10 w-full">
          <thead className="uppercase">
            <tr className="heading-xxs !font-not-glitched border-b text-left md:p-3">
              <th scope="col" className="pb-space-3 ">
                <Trans t={t}>Rank</Trans>
              </th>
              <th scope="col" className="pb-space-3">
                <Trans t={t}>Ambassador</Trans>
              </th>
              <th scope="col" className="pb-space-3 text-right">
                <Trans t={t}>Points</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, idx) => {
              if (entry.Name) {
                return (
                  <LeaderboardListItem
                    key={idx}
                    position={entry.Position}
                    rank={entry.Rank}
                    handle={extractHandle(entry.Name).handle}
                    handleId={extractHandle(entry.Name).handleId}
                    value={entry.Points}
                  />
                )
              }
            })}
          </tbody>
        </table>
        {moreLink && limit && (
          <Button to={moreLink}>
            <Trans t={t}>View more</Trans>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Leaderboard
