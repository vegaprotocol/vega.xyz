import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      />
      <div className="dark:text-white dark:bg-black bg-white max-w-full dark:selection:bg-vega-pink selection:bg-vega-yellow">
        <div className="flex flex-col min-h-screen">
          <div className="grow">
            <Header />
            {props.needsTranslating && <div>NEEDS TRANSLATING</div>}
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
