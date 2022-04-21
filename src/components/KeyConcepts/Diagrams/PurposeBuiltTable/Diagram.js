import React from "react";
import Small from "./Small";
import Medium from "./Medium";

const PurposeBuiltTableDiagram = () => {
  const tableData = [
    ["Runs slowly", "Fast trading"],
    [
      "Allows for unfair front running",
      "Built for fairness from the ground up",
    ],
    ["A fee for every transaction", "No fees on orders"],
    [
      "Generalist tool - A workaround for trading",
      "Specifically built for trading",
    ],
    [
      "Smart contracts for anything",
      "Small, purpose built smart products for trading",
    ],
  ];

  return (
    <div>
      <Small className="md:hidden" />
      <Medium className="hidden md:block max-w-[44rem] mx-auto" />
      <table className="w-full border-t-2 border-white relative -top-px">
        <thead>
          <tr>
            <th
              scope="col"
              className="p-5 title-s border-b border-vega-border-grey"
            >
              Ethereum
            </th>
            <th
              scope="col"
              className="p-5 title-s border-b border-vega-border-grey"
            >
              Vega
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr>
              <td className="text-vega-mid-grey py-5 px-10 text-center border-r border-b lg:border-r-0 border-vega-border-grey">
                {row[0]}
              </td>
              <td className="py-5 px-10 text-center border-b border-vega-border-grey">
                {row[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PurposeBuiltTableDiagram;
