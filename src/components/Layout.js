import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Link from '../components/UI/Link'
import SiteBanner from '../components/SiteBanner'

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
                <SiteBanner>
                  Mainnet SIMS #4 is coming soon!{' '}
                  <Link
                    to="https://fairground.wtf"
                    className="font-bold underline hover:no-underline"
                  >
                    <br className="md:hidden" />
                    Learn more
                  </Link>
                </SiteBanner>
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
