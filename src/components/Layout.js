import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import { AnnouncementBanner as Banner } from '@vegaprotocol/announcements'
import { Analytics } from '@vercel/analytics/react'

const Layout = ({ children, stickyHeader = true }) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />
      <div className="max-w-full bg-white selection:bg-vega-yellow dark:bg-black dark:text-white dark:selection:bg-vega-pink">
        <div className="flex min-h-screen flex-col">
          <div className="grow">
            <Header sticky={stickyHeader} />
            <div
              className={stickyHeader ? 'mt-[4.8125rem] lg:mt-[6.25rem]' : ''}
            >
              <div>
                <Banner
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
