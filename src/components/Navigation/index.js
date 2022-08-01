import React from "react";
import { Link } from "gatsby";
import Use from "./items/Use";
import Community from "./items/Community";
import Governance from "./items/Governance";
import Develop from "./items/Develop";
import Learn from "./items/Learn";
import Dropdown from "./Dropdown";

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex text-lg tracking-wide">
        <Dropdown title="Use Vega">
          <Use />
        </Dropdown>
        <Dropdown title="Community">
          <Community />
        </Dropdown>
        <Dropdown title="Governance">
          <Governance />
        </Dropdown>
        <Dropdown title="Develop">
          <Develop />
        </Dropdown>
        <Dropdown title="Learn">
          <Learn />
        </Dropdown>
      </ul>
    </nav>
  );
};

export default Navigation;
