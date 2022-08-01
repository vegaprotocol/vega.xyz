import React, { useState } from "react";
import Use from "./items/Use";
import Community from "./items/Community";
import Governance from "./items/Governance";
import Develop from "./items/Develop";
import Learn from "./items/Learn";
import MobileDropdown from "./MobileDropdown";

const MobileNavigation = () => {
  const [showId, setShowId] = useState();
  const handleShow = (id) => setShowId(id);

  return (
    <nav>
      <ul className="max-w-[20rem] text-lg tracking-wide w-full py-4">
        <MobileDropdown
          title="Use Vega"
          id={1}
          show={showId === 1}
          onShow={handleShow}
        >
          <Use />
        </MobileDropdown>
        <MobileDropdown
          title="Community"
          id={2}
          show={showId === 2}
          onShow={handleShow}
        >
          <Community />
        </MobileDropdown>
        <MobileDropdown
          title="Governance"
          id={3}
          show={showId === 3}
          onShow={handleShow}
        >
          <Governance />
        </MobileDropdown>
        <MobileDropdown
          title="Develop"
          id={4}
          show={showId === 4}
          onShow={handleShow}
        >
          <Develop />
        </MobileDropdown>
        <MobileDropdown
          title="Learn"
          id={5}
          show={showId === 5}
          onShow={handleShow}
        >
          <Learn />
        </MobileDropdown>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
