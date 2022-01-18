import React, { useState, useEffect } from "react";
import Incentive from "./Incentive";

const Incentives = () => {
  const pageSize = 5;
  const [incentives, setIncentives] = useState(null);
  const [list, setList] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function fetchIncentives() {
      let response = await fetch(
        "https://notion-api.vega.win/query?id=aa64c6a0-0e0d-460d-ad44-ceacc6cd5957"
      );
      response = await response.json();

      // the following logic will probably be made redundant when the calendar API feed is updated

      // extract relevant data
      let result = response.notion_data.map((elem) => {
        return {
          link: elem.properties.find((element) => element.name === "Link")
            .values,
          status: elem.properties.find((element) => element.name === "Status")
            .values[0],
          type: elem.properties.find((element) => element.name === "Type")
            .values[0],
          tags: elem.properties.find((element) => element.name === "Tags")
            .values,
          reward: elem.properties.find((element) => element.name === "Reward")
            .values[0],
          name: elem.properties.find((element) => element.name === "Name")
            .values[0],
          start_date: new Date(
            // create date objects
            elem.properties.find(
              (element) => element.name === "Start Date"
            ).values[0]
          ),
          end_date: new Date(
            // create date objects
            elem.properties.find(
              (element) => element.name === "End Date"
            ).values[0]
          ),
        };
      });

      // remove entries with no name (assumed an empty row)
      result = result.filter((elem) => elem.name);

      setIncentives(result);
      setList([...result.slice(0, pageSize)]);
      setHasMore(result.length > pageSize);
    }
    fetchIncentives();
  }, []);

  useEffect(() => {
    if (incentives) {
      if (loadMore && hasMore) {
        const currentLength = list.length;
        const isMore = currentLength < incentives.length;
        const nextResults = isMore
          ? incentives.slice(currentLength, currentLength + pageSize)
          : [];
        setList([...list, ...nextResults]);
        setLoadMore(false);
      }
    }
  }, [loadMore, hasMore, incentives, list]);

  useEffect(() => {
    if (incentives && list) {
      const isMore = list.length < incentives.length;
      setHasMore(isMore);
    }
  }, [list, incentives]);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  return (
    <div className="grey-box my-12 p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
      <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-8 uppercase">
        Incentives +<br /> Bounties
      </h3>
      {list ? (
        <div>
          {list.map((incentive, idx) => (
            <Incentive
              key={idx}
              title={incentive.name}
              status={incentive.status}
              type={incentive.type}
              reward={incentive.reward}
              difficulty="5"
              link={incentive.link}
            />
          ))}

          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="group
              button-link
              relative
              inline-block"
            >
              <div className="leading-1 text-[0.9375rem] tracking-[0.01rem] transition-[top] relative z-10 group-hover:-top-1.5 top-0 inline-block px-8 py-3 bg-white dark:bg-black border border-black dark:border-white uppercase">
                Load more...
              </div>
              <div className="absolute inset-0 border bg-white dark:bg-black border-black dark:border-white"></div>
            </button>
          ) : (
            <p>No more results</p>
          )}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Incentives;
