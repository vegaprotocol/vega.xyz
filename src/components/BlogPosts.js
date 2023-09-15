import React from 'react'
import ButtonLink from './ButtonLink'
import BlogPost from './BlogPost'
import { graphql, useStaticQuery } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const BlogPosts = () => {
  const { t } = useTranslation('component.blog-posts')
  const latestPosts = useStaticQuery(graphql`
    query {
      allMediumPost(
        limit: 3
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
    }
  `)
  return (
    <div className="mb-14">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="title-m md:title-l max-w-[15rem] md:max-w-[26rem]">
          <Trans t={t}>Blog posts</Trans>
        </h2>
        <div className="hidden md:block">
          <ButtonLink link="https://blog.vega.xyz" text={t('View all posts')} />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {latestPosts.allMediumPost.edges.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
      <div className="mt-8 md:hidden">
        <ButtonLink link="https://blog.vega.xyz" text={t('View all posts')} />
      </div>
    </div>
  )
}

export default BlogPosts
