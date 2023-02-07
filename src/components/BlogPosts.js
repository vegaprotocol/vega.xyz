import React, { useEffect, useState } from 'react'
import ButtonLink from './ButtonLink'
import BlogPost from './BlogPost'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const BlogPosts = () => {
  const { t } = useTranslation('component.blog-posts')
  const [blogPosts, setBlogPosts] = useState(null)
  const [blogPostsError, setBlogPostsError] = useState(false)

  useEffect(() => {
    async function fetchLatestBlogPosts() {
      let response = await fetch('/.netlify/functions/latest-blog-posts')
      let data = await response.json()
      if (response.status === 200) {
        setBlogPosts(data.data.slice(0, 3))
      } else {
        setBlogPostsError(true)
      }
    }
    fetchLatestBlogPosts()
  }, [])

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

      {blogPostsError && (
        <div>
          <Trans t={t}>Error fetching blog posts...</Trans>
        </div>
      )}
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post, index) => <BlogPost key={index} post={post} />)}
      </div>
      <div className="mt-8 md:hidden">
        <ButtonLink link="https://blog.vega.xyz" text={t('View all posts')} />
      </div>
    </div>
  )
}

export default BlogPosts
