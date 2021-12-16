import React from "react";
import NavigationDropdown from "./Dropdown";
import NavigationItem from "./Item";

const navigationSections = [
  {
    text: "navigation-learn",
    links: [
      {
        text: "navigation-key-concepts",
        description: "navigation-key-concepts-description",
        to: "/learn/key-concepts/",
      },
      {
        text: "navigation-papers",
        description: "navigation-papers-description",
        to: "/learn/papers/",
      },
      {
        text: "navigation-blog",
        description: "navigation-blog-description",
        to: "https://blog.vega.xzy",
      },
      {
        text: "navigation-talks",
        description: "navigation-talks-description",
        to: "/learn/talks",
      },
    ],
  },
  {
    text: "navigation-develop",
    link: "/develop",
  },
  {
    text: "navigation-use",
    link: "/use",
  },
  {
    text: "navigation-join-community",
    link: "/community",
  },
];

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex text-lg tracking-wide">
        {navigationSections.map((section, idx) =>
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
