import React, { useEffect } from "react";
import NewsCard from "./NewsCard";

const LatestTweet = () => {
  useEffect(() => {
    async function fetchIncentives() {
      let response = await fetch("/.netlify/functions/latest-tweet");
      response = await response.json();

      console.log(response);
    }
    fetchIncentives();
  }, []);

  return <div className=""></div>;
};

export default LatestTweet;
