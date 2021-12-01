import React from "react";
import NavigationDropdown from "./Dropdown";
import NavigationItem from "./Item";
import { useIntl, Link } from "gatsby-plugin-react-intl";

const navigationSections = [
  // {
  //   text: "navigation-external",
  //   link: "https://vega.xyz",
  // },
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
    text: "navigation-use",
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
    text: "navigation-join-community",
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
];

const Navigation = () => {
  const intl = useIntl();
  return (
    <nav>
      <ul className="text-lg flex tracking-wide">
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
