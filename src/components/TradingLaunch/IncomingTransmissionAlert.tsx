import React, { useState } from "react";
import Button from "../UI/Button";
import CrossMedium from "../Svg/CrossMedium";
import { motion } from "framer-motion";

const IncomingTransmissionAlert = () => {
  const [panelClosed, setClosed] = useState(false);

  const closePanel = () => {
    setClosed(true);
  };

  return (
    <>
      {
        !panelClosed && <div className="fixed right-4 bottom-4 w-[17.1875rem] lg:w-[20rem] dark:text-black text-white z-50">
          <div className="">
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: 'auto',
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.5
                }
              }}
              className="overflow-hidden"
            >
              <div className="dark:bg-white bg-black p-2">
                <div className="border border-current p-4 pb-6 notched-corner-top-right">
                  <div className="heading-m !my-0">Incoming Trans-mission</div>
                  <p className="body-m mt-3">Vega launches live trading<br />Please standby...</p>
                  <Button variant="secondary" to="/trading-launch" className="mt-6">Show me now...</Button>

                  <button className="absolute top-0 right-0 cursor-pointer z-50" onClick={() => { closePanel() }}>
                    <CrossMedium />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      }
    </>
  )
};

export default IncomingTransmissionAlert;
