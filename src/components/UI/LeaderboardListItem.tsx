import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import Medal1 from '../Svg/Medal1'
import Medal2 from '../Svg/Medal2'
import Medal3 from '../Svg/Medal3'
import { integer } from 'aws-sdk/clients/cloudfront'

export interface LeaderboardListItemProps {
  position: string
  handle: string
  handleId?: string
  rank?: string
  value: integer
}

const LeaderboardListItem = ({
  position,
  handle,
  handleId,
  rank,
  value,
}: LeaderboardListItemProps) => {
  return (
    <tr className="border-b">
      <td>
        <div className="font-glitch-all w-space-10 shrink-0 py-space-4 text-[2.5rem] leading-none leading-none md:py-space-5 md:text-[3rem] lg:text-[3.375rem]">
          <div className="flex items-center justify-between">
            <div>{position}</div>
            {parseInt(position) === 1 && <Medal1 />}
            {parseInt(position) === 2 && <Medal2 />}
            {parseInt(position) === 3 && <Medal3 />}
          </div>
        </div>
      </td>
      <td>
        <div className="body-xl  py-space-4 md:py-space-5">
          <div className="mb-space-1 md:inline-block">{handle}</div>
          {handleId && (
            <>
              {' '}
              <div className="heading-xxs mb-space-2 text-vega-light-300 dark:text-vega-dark-300 md:inline-block">
                {handleId}
              </div>
            </>
          )}
          {rank && (
            <div className="body-l text-vega-light-400 dark:text-vega-dark-400">
              {rank}
            </div>
          )}
        </div>
      </td>
      <td>
        <div className="font-glitch-all py-space-4 text-right text-[2.5rem] leading-none md:py-space-5 md:text-[3rem] lg:text-[3.375rem]">
          {value}
        </div>
      </td>
    </tr>
  )
}

export default LeaderboardListItem
