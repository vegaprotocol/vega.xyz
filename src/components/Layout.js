import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen dark:text-white dark:bg-black bg-white">
      <div className="flex-grow">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
