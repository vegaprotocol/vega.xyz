import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteBanner from "../components/SiteBanner";

const Layout = (props) => {
  return (
    <div className="dark:text-white dark:bg-black bg-white">
      <SiteBanner />
      <div className="flex flex-col min-h-screen">
        <div className="grow">
          <Header />
          <div className="max-w-[1536px] mx-auto 2xl:border border-vega-border-grey 2xl:pb-32">
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
