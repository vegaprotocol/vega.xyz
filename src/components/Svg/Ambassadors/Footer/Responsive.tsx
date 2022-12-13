import React from 'react'
import Small from './Small'
import Medium from './Medium'
import { MQMediumUp, MQSmall } from '../../../../utils/media-queries.js'

const UseVegaResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMediumUp>
        <Medium />
      </MQMediumUp>
    </div>
  )
}
export default UseVegaResponsive
