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
    <div className="grid grid-cols-12 md:gap-x-16">
      <div className="hidden md:block md:col-span-4"></div>
      <div className="col-span-12 md:col-span-7">
        <Small className="md:hidden" />
        <Medium className="hidden md:block" />
        <table>
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
                <td className="text-vega-mid-grey py-5 px-10 text-center border-r border-b border-vega-border-grey">
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
    </div>
  );
};
export default PurposeBuiltTableDiagram;
