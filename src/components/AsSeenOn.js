import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const AsSeenOn = () => {
  const { t } = useTranslation('component.as-seen-on')

  return (
    <div>
      <div className="title-m lg:title-l mb-12 text-center">
        <h2>
          <Trans t={t}>As seen on</Trans>
        </h2>
      </div>
      <div className="mx-auto grid max-w-[26.25rem] grid-cols-1 gap-12 md:max-w-none md:grid-cols-3">
        <a
          href="https://www.coindesk.com/video/crypto-derivatives-protocol-vegas-mainnet-goes-live-for-futures-options-trading/"
          rel="noreferrer"
          target="_blank"
        >
          <StaticImage
            className="mb-4"
            src="../images/as-seen-on-coindesk.png"
            alt=""
            placeholder="none"
            layout="constrained"
            width={720}
            height={368}
          />

          <h3 className="font-glitched text-[1.3125rem] leading-[1.15]">
            A community of independent validators have deployed Vega Protocol on
            Alpha Mainnet
          </h3>
        </a>
        <a
          href="https://www.nasdaq.com/articles/how-to-build-through-the-bear"
          rel="noreferrer"
          target="_blank"
        >
          <StaticImage
            className="mb-4"
            src="../images/as-seen-on-nasdaq.png"
            alt=""
            placeholder="none"
            layout="constrained"
            width={720}
            height={368}
          />
          <h3 className="font-glitched text-[1.3125rem] leading-[1.15]">
            How to build through the bear
          </h3>
        </a>
        <a
          href="https://techcrunch.com/2021/12/14/7-investors-discuss-web3s-present-and-peer-into-its-future/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8"
          rel="noreferrer"
          target="_blank"
        >
          <StaticImage
            className="mb-4"
            src="../images/as-seen-on-tech-crunch.png"
            alt=""
            placeholder="none"
            layout="constrained"
            width={720}
            height={368}
          />
          <h3 className="font-glitched text-[1.3125rem] leading-[1.15]">
            7 investors discuss web3's present and peer into its future
          </h3>
        </a>
      </div>
    </div>
  )
}

export default AsSeenOn
