import React from 'react'
import SquareBullet from './Svg/SquareBullet'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const BlogPost = ({ post }) => {
  const { t } = useTranslation('component.blog-post')
  return (
    <div className="flex flex-col justify-between border-b border-current pb-3">
      <div>
        <a
          href={`https://blog.vega.xyz/${post.uniqueSlug}`}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <div
            className="aspect-w-16 aspect-h-9 mb-4 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://cdn-images-1.medium.com/${post.virtuals.previewImage.imageId})`,
            }}
          ></div>
          <div className="mb-4 text-[1.5rem] leading-[1.1]">{post.title}</div>
          <div className="copy-xs text-vega-mid-grey">
            {post.virtuals.subtitle}
          </div>
        </a>
      </div>

      <div className="mt-space-3">
        <SquareBullet size="10" />
        {post.firstPublishedAt}
        &nbsp;&nbsp;&nbsp;
        <SquareBullet size="5" />
        <span className="text-vega-mid-grey">
          {t('{{minutes}} minute read', {
            minutes: Math.ceil(post.virtuals.readingTime),
          })}
        </span>
      </div>
    </div>
  )
}

export default BlogPost
