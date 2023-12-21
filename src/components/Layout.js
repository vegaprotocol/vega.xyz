import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import { AnnouncementBanner, Banner } from '../components/AnnouncementRemote'
import { Analytics } from '@vercel/analytics/react'
import { GeorestrictedContext } from '../context/georestricted'

const Layout = ({ children, stickyHeader = true }) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <body className="georestricted" />
      </Helmet>
      <div className="max-w-full bg-white selection:bg-vega-yellow dark:bg-black dark:text-white dark:selection:bg-vega-pink">
        <div className="flex min-h-screen flex-col">
          <div className="grow">
            <Header sticky={stickyHeader} />
            <div
              className={stickyHeader ? 'mt-[4.8125rem] lg:mt-[6.25rem]' : ''}
            >
              <GeorestrictedContext.Consumer>
                {({ isGeorestricted }) => {
                  if (!isGeorestricted) {
                    return null
                  }

                  return (
                    <Banner>
                      <div className="mx-auto max-w-2xl overflow-hidden text-sm leading-tight md:max-w-3xl">
                        <p>
                          This website provides information only about the open
                          source Vega Protocol and related software. The
                          software, when deployed and used by third parties,
                          involves a decentralised exchange (DEX), a
                          peer-to-peer marketplace where users can trade
                          derivatives settled in cryptoassets without the need
                          for an intermediary or custodian.
                        </p>
                        <p className="mt-3">
                          If you intend to interact with a DEX, you should check
                          that you are comfortable with the associated risks and
                          that doing so is permitted within your jurisdiction
                        </p>
                      </div>
                    </Banner>
                  )
                }}
              </GeorestrictedContext.Consumer>
              <div>
                <AnnouncementBanner
                  app="wallet"
                  configUrl={process.env.GATSBY_ANNOUNCEMENTS_CONFIG_URL}
                />
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Analytics />
    </div>
  )
}

export default Layout
