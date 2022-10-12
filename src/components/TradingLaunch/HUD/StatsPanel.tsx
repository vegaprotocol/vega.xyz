import React, { useEffect, useState } from "react";
type Props = {};

const HUDStatsPanel = (props: Props) => {
  const [futureDateTime, setFutureDateTime] = useState<Date>(new Date());
  const [futureTimeString, setFutureTimeString] = useState("");

  useEffect(() => {
    let interval = setInterval(function () {
      const dateTime = futureDateTime;
      dateTime.setMilliseconds(dateTime.getMilliseconds() + 1);
      setFutureDateTime(dateTime);
      setFutureTimeString(futureDateTime.toISOString().slice(11, -1));
    }, 1);
  }, []);

  return (
    <div>
      <div className="blur-[1px] px-6 mb-6 leading-none text-[0.9375rem]">
        LOG ENTRY: 00032
        <br />
        LOCATION: ALPHA MAINNET
        <br />
        DATE: {futureDateTime && futureDateTime.toLocaleDateString("en-US")}
        <br />
        TIME: {futureTimeString && futureTimeString}
        <br />
        <br />
        VEGABOND: XERO
        <br />
        ID: #278882735
      </div>
    </div>
  );
};

export default HUDStatsPanel;
