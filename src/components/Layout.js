import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

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
            <div className="mt-[4.8125rem] md:mt-[6.25rem]">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
