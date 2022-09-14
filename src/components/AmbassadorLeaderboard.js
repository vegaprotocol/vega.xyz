import React, { useState, useEffect } from "react";
import ButtonLink from "./ButtonLink";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const AmbssadorLeaderboard = ({ limit = false }) => {
  const [leaderboard, setLeaderboard] = useState(false);
  const { t } = useTranslation("component.ambassador-leaderboard");

  const formatName = (name) => {
    const idx = name.lastIndexOf("#");
    if (idx > -1) {
      return (
        name.substr(0, idx) +
        " <span class='copy-xxs md:copy-xs text-vega-mid-grey'>" +
        name.substr(idx) +
        "</span>"
      );
    }
  };

  useEffect(() => {
    async function fetchLeaderboard() {
      let response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWl19OuiXSJaXPHp9z90tB6YEQstuxi8_ecqao7FxlZDU0073VkX3w6-qZAuzpwseOP7ncPhftXh_G/pub?gid=1930527218&single=true&output=csv"
      );
      let csv = await response.text();

      const lines = csv.replace(/(\r)/gm, "").split("\n");
      const keys = lines[0].replace(/(\r\n|\n|\r)/gm, "").split(",");

      let leaderboard = [];

      for (let i = 1; i < (limit ? limit + 1 : lines.length); ++i) {
        const values = lines[i].split(",");
        const dict = {};

        if (values[1] === "") continue;

        for (let k = 0; k < keys.length; ++k) {
          dict[keys[k]] = values[k];
        }
        leaderboard.push(dict);
      }

      setLeaderboard(leaderboard);
    }
    fetchLeaderboard();
  }, [limit]);

  return (
    <div>
      {leaderboard ? (
        <div>
          <table className="w-full mb-20">
            <thead className="bg-vega-box-grey text-white uppercase text-[0.9375rem]">
              <tr className="border-b border-vega-mid-grey">
                <th scope="col" className="p-2 md:p-3 text-left">
                  <Trans t={t}>Rank</Trans>
                </th>
                <th scope="col" className="p-2 md:p-3 text-left">
                  <Trans t={t}>Ambassador</Trans>
                </th>
                <th scope="col" className="p-2 md:p-3 text-right">
                  <Trans t={t}>Tasks completed</Trans>
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => {
                return (
                  <tr key={idx} className="border-b border-vega-mid-grey">
                    <td
                      className={`px-2 py-5 title-m md:title-l font-glitch-all ${
                        idx < 3 ? "text-vega-pink" : ""
                      }`}
                    >
                      {entry.Position}
                    </td>
                    <td className="px-2 py-5 max-w-[11rem] md:max-w-none break-words">
                      <div className="copy-xs md:copy-s !mb-0">
                        {}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formatName(entry.Name),
                          }}
                        />
                      </div>
                      <div className="copy-xxs md:copy-xs text-vega-mid-grey !mb-0">
                        {entry.Rank}
                      </div>
                    </td>
                    <td className="px-2 py-5 text-right title-m md:text-[2.5rem] font-glitch-all">
                      {entry["Tasks Completed"]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {limit && (
            <ButtonLink
              text={t("View more")}
              link="/community/ambassador-leaderboard"
            />
          )}
        </div>
      ) : (
        <div>
          <Trans t={t}>Loading...</Trans>
        </div>
      )}
    </div>
  );
};

export default AmbssadorLeaderboard;
