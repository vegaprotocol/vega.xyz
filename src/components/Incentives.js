import React, { useState, useEffect } from "react";
import Incentive from "./Incentive";
import { graphql, useStaticQuery } from "gatsby";

const Incentives = () => {
  const incentives = useStaticQuery(graphql`
    query Incentives {
      allIncentives {
        nodes {
          name
          type
          status
          reward
          start_date
          end_date
          link
          tags
        }
      }
    }
  `);

  const pageSize = 5;
  const allIncentives = incentives.allIncentives.nodes;
  const [list, setList] = useState([...allIncentives.slice(0, pageSize)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(allIncentives.length > pageSize);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allIncentives.length;
      const nextResults = isMore
        ? allIncentives.slice(currentLength, currentLength + pageSize)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMore = list.length < allIncentives.length;
    setHasMore(isMore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <div className="grey-box my-12 p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
      <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-8 uppercase">
        Incentives +<br /> Bounties
      </h3>
      {list.map((bounty, idx) => (
        <Incentive
          key={idx}
          title={bounty.name}
          status={bounty.status}
          type={bounty.type}
          reward={bounty.reward}
          difficulty="5"
          link={bounty.link}
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
  );
};

export default Incentives;
