import React from "react";
import NavigationDropdown from "./Dropdown";
import NavigationItem from "./Item";
import { SiteNavigation } from "../../data/SiteNavigation";

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex text-lg tracking-wide">
        {SiteNavigation.map((section, idx) =>
          section.links ? (
            <NavigationDropdown section={section} key={idx} />
          ) : (
            <NavigationItem item={section} key={idx} />
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
