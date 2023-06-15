import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import Button from './UI/Button'
import { graphql, useStaticQuery } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { stringify } from 'querystring'
import { getImage, getSrc } from 'gatsby-plugin-image'

const isVercel = process.env.IS_VERCEL === 'true'

const LatestNews = () => {
  const { t } = useTranslation('component.latest-news')
  const latestPosts = useStaticQuery(graphql`
    query {
      blogPosts: allMediumPost(
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
      talks: allMarkdownRemark(
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
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 640)
                }
              }
            }
            fields {
              slug
              locale
            }
          }
        }
      }
      insights: allMarkdownRemark(
        limit: 1
        filter: { collection: { eq: "insights" } }
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
                url
              }
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 640)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const [tweet, setTweet] = useState(null)

  useEffect(() => {
    async function fetchLatestTweet() {
      try {
       const functionPath = isVercel ? '/api/latest-tweet' : '/.netlify/functions/latest-tweet' 
        let response = await fetch(functionPath)
        response = await response.json()
        setTweet({
          id: response.id,
          text: response.tweet_text,
          image: response.image,
        })
      } catch (e) {
        console.error('Error fetching latest tweet')
      }
    }
    fetchLatestTweet()
  }, [])

  return (
    <div>
      <div className="title-l lg:title-xl mb-12 text-center">
        <h2>
          <Trans t={t}>Latest News</Trans>
        </h2>
      </div>
      <div className="mx-auto grid max-w-[26.25rem] grid-cols-1 gap-12 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
        <div className="flex h-full flex-col justify-between">
          <NewsCard
            title={latestPosts.blogPosts.edges[0].node.title}
            text={latestPosts.blogPosts.edges[0].node.virtuals.subtitle}
            link={`https://blog.vega.xyz/${latestPosts.blogPosts.edges[0].node.uniqueSlug}`}
            date={latestPosts.blogPosts.edges[0].node.firstPublishedAt}
            extra={t('{{minutes}} minute read', {
              minutes: Math.ceil(
                latestPosts.blogPosts.edges[0].node.virtuals.readingTime
              ),
            })}
            image={`https://cdn-images-1.medium.com/${latestPosts.blogPosts.edges[0].node.virtuals.previewImage.imageId}`}
            className="mb-space-5"
          />
          <div>
            <Button to="https://blog.vega.xyz">
              <Trans t={t}>Read our blog</Trans>
            </Button>
          </div>
        </div>

        {tweet ? (
          <div className="flex h-full flex-col justify-between">
            <NewsCard
              title="@vegaprotocol"
              image={tweet.image}
              text={tweet.text}
              link={`https://twitter.com/twitter/status/${tweet.id}`}
              className="mb-space-5"
            />
            <div>
              <Button to="https://twitter.com/vegaprotocol">
                <Trans t={t}>See all Tweets</Trans>
              </Button>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}

        <div className="flex h-full flex-col justify-between">
          <NewsCard
            title={latestPosts.talks.edges[0].node.frontmatter.title}
            text={`${latestPosts.talks.edges[0].node.html
              .replace(/(<([^>]+)>)/gi, '')
              .split(' ')
              .splice(0, 25)
              .join(' ')}...`}
            image={
              latestPosts.talks.edges[0].node.frontmatter.featuredImage
                ? getSrc(
                    latestPosts.talks.edges[0].node.frontmatter.featuredImage
                  )
                : undefined
            }
            date={latestPosts.talks.edges[0].node.frontmatter.date}
            link={`/talks#talk${latestPosts.talks.edges[0].node.fields.slug}`}
            className="mb-space-5"
          />
          <div>
            <Button to="/talks">
              <Trans t={t}>Watch all Talks</Trans>
            </Button>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          <NewsCard
            title={latestPosts.insights.edges[0].node.frontmatter.title}
            text={`${latestPosts.insights.edges[0].node.html
              .replace(/(<([^>]+)>)/gi, '')
              .split(' ')
              .splice(0, 25)
              .join(' ')}...`}
            link={latestPosts.insights.edges[0].node.frontmatter.links[0].url}
            image={
              latestPosts.insights.edges[0].node.frontmatter.featuredImage
                ? getSrc(
                    latestPosts.insights.edges[0].node.frontmatter.featuredImage
                  )
                : undefined
            }
            date={latestPosts.insights.edges[0].node.frontmatter.date}
            className="mb-space-5"
          />
          <div>
            <Button to="/insights">
              <Trans t={t}>Read all Insights</Trans>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
