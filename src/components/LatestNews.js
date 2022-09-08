import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { graphql, useStaticQuery } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const LatestNews = ({ data }) => {
  const { t } = useTranslation("component.latest-news");
  const latestPosts = useStaticQuery(graphql`
    query {
      allMediumPost(
        limit: 1
        sort: { fields: [firstPublishedAt], order: DESC }
      ) {
        edges {
          node {
            id
            title
            uniqueSlug
            firstPublishedAt(formatString: "ll")
            virtuals {
              subtitle
              readingTime
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
      allMarkdownRemark(
        limit: 1
        filter: { collection: { eq: "talks" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              date(formatString: "ll")
              location
              links {
                title
                link
              }
            }
            fields {
              slug
              locale
            }
          }
        }
      }
    }
  `);
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    async function fetchLatestTweet() {
      let response = await fetch("/.netlify/functions/latest-tweet");
      response = await response.json();
      setTweet(response.tweets);
      console.log(response.tweets);
    }
    fetchLatestTweet();
  }, []);

  return (
    <div>
      <div className="title-l mb-12 text-center">
        <h2>
          <Trans t={t}>Latest News</Trans>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <NewsCard
          title={latestPosts.allMediumPost.edges[0].node.title}
          text={latestPosts.allMediumPost.edges[0].node.virtuals.subtitle}
          link={`https://blog.vega.xyz/${latestPosts.allMediumPost.edges[0].node.uniqueSlug}`}
          date={latestPosts.allMediumPost.edges[0].node.firstPublishedAt}
          extra={t("x minute read", {
            minutes: Math.ceil(
              latestPosts.allMediumPost.edges[0].node.virtuals.readingTime
            ),
          })}
          image={`https://cdn-images-1.medium.com/${latestPosts.allMediumPost.edges[0].node.virtuals.previewImage.imageId}`}
          category="blog"
        />

        {tweet ? (
          <NewsCard
            text={tweet.text}
            category="Tweet"
            link={`https://twitter.com/twitter/status/${tweet.id}`}
          />
        ) : (
          <div>Loading</div>
        )}

        <NewsCard
          title={latestPosts.allMarkdownRemark.edges[0].node.frontmatter.title}
          text={`${latestPosts.allMarkdownRemark.edges[0].node.html
            .replace(/(<([^>]+)>)/gi, "")
            .split(" ")
            .splice(0, 25)
            .join(" ")}...`}
          date={latestPosts.allMarkdownRemark.edges[0].node.frontmatter.date}
          category="talk"
        />

        <NewsCard
          title="Vega Protocol Investment Thesis"
          text="Capital markets infrastructure for DeFi that will enable the creation of new markets by those closest to the market, the traders themselves."
          link="https://www.edenblock.com/post/vega-protocol-investment-thesis"
          date="February 23, 2022"
          category="insight"
        />
      </div>
    </div>
  );
};

export default LatestNews;
