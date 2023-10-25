import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import Button from './UI/Button'
import { graphql, useStaticQuery } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { stringify } from 'querystring'
import { getImage, getSrc } from 'gatsby-plugin-image'

const LatestNews = ({ blogPosts, talks, articles }) => {
  const { t } = useTranslation('component.latest-news')
  const [tweet, setTweet] = useState(null)

  useEffect(() => {
    async function fetchLatestTweet() {
      try {
        const functionPath = '/api/latest-tweet'
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
      <div className="mx-auto grid max-w-[26.25rem] grid-cols-1 gap-12 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.edges.length > 0 && (
          <div className="flex h-full flex-col justify-between">
            <NewsCard
              title={blogPosts.edges[0].node.title}
              text={blogPosts.edges[0].node.virtuals.subtitle}
              link={`https://blog.vega.xyz/${blogPosts.edges[0].node.uniqueSlug}`}
              date={blogPosts.edges[0].node.firstPublishedAt}
              extra={t('{{minutes}} minute read', {
                minutes: Math.ceil(
                  blogPosts.edges[0].node.virtuals.readingTime
                ),
              })}
              image={`https://cdn-images-1.medium.com/${blogPosts.edges[0].node.virtuals.previewImage.imageId}`}
              className="mb-space-5"
            />
            <div>
              <Button to="https://blog.vega.xyz">
                <Trans t={t}>Read our blog</Trans>
              </Button>
            </div>
          </div>
        )}

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

        {talks.edges.length > 0 && (
          <div className="flex h-full flex-col justify-between">
            <NewsCard
              title={talks.edges[0].node.frontmatter.title}
              text={`${talks.edges[0].node.html
                .replace(/(<([^>]+)>)/gi, '')
                .split(' ')
                .splice(0, 25)
                .join(' ')}...`}
              image={
                talks.edges[0].node.frontmatter.featuredImage
                  ? getSrc(talks.edges[0].node.frontmatter.featuredImage)
                  : undefined
              }
              date={talks.edges[0].node.frontmatter.date}
              link={`/articles#talk${talks.edges[0].node.fields.slug}`}
              className="mb-space-5"
            />
            <div>
              <Button to="articles">
                <Trans t={t}>Watch all Talks</Trans>
              </Button>
            </div>
          </div>
        )}

        {articles.edges.length > 0 && (
          <div className="flex h-full flex-col justify-between">
            <NewsCard
              title={articles.edges[0].node.frontmatter.title}
              text={`${articles.edges[0].node.html
                .replace(/(<([^>]+)>)/gi, '')
                .split(' ')
                .splice(0, 25)
                .join(' ')}...`}
              link={articles.edges[0].node.frontmatter.links[0].url}
              image={
                articles.edges[0].node.frontmatter.featuredImage
                  ? getSrc(articles.edges[0].node.frontmatter.featuredImage)
                  : undefined
              }
              articles
              date={articles.edges[0].node.frontmatter.date}
              className="mb-space-5"
            />
            <div>
              <Button to="/articles">
                <Trans t={t}>Read all Articles</Trans>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestNews
