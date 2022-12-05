import React, { useState, useEffect } from 'react'
import ButtonLink from './ButtonLink'
import LeaderboardListItem from './UI/LeaderboardListItem'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const AmbssadorLeaderboard = ({ limit = false }) => {
  const [leaderboard, setLeaderboard] = useState(false)
  const { t } = useTranslation('component.ambassador-leaderboard')

  const extractHandle = (name) => {
    const idx = name.lastIndexOf('#')
    return {
      handle: name.substr(0, idx) ? name.substr(0, idx) : name,
      handleId: name.substr(idx) ? name.substr(idx) : '',
    }
  }

  useEffect(() => {
    async function fetchLeaderboard() {
      let response = await fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWl19OuiXSJaXPHp9z90tB6YEQstuxi8_ecqao7FxlZDU0073VkX3w6-qZAuzpwseOP7ncPhftXh_G/pub?gid=1930527218&single=true&output=csv'
      )
      let csv = await response.text()

      const lines = csv.replace(/(\r)/gm, '').split('\n')
      const keys = lines[0].replace(/(\r\n|\n|\r)/gm, '').split(',')

      let leaderboard = []

      for (let i = 1; i < (limit ? limit + 1 : lines.length); ++i) {
        const values = lines[i].split(',')
        const dict = {}

        // omit blank entries and those with fewer than 4 points
        if (values[1] === '' || values[2] < 4) continue

        for (let k = 0; k < keys.length; ++k) {
          dict[keys[k]] = values[k]
        }
        leaderboard.push(dict)
      }

      setLeaderboard(leaderboard)
    }
    fetchLeaderboard()
  }, [limit])

  return (
    <div>
      {leaderboard ? (
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
              {leaderboard.map((entry, idx) => {
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
              })}
            </tbody>
          </table>
          {limit && (
            <ButtonLink
              text={t('View more')}
              link="/community/ambassador-leaderboard"
            />
          )}
        </div>
      ) : (
        <div>
          <Trans t={t}>Loading...</Trans>
        </div>
      )}
    </div>
  )
}

export default AmbssadorLeaderboard
