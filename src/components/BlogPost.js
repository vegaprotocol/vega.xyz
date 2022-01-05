import React from "react";
import SquareBullet from "./Svg/SquareBullet";

const BlogPost = ({ post }) => {
  return (
    <div className="flex flex-col justify-between pb-3 border-b border-white">
      <div>
        <a
          href={`https://blog.vega.xyz/${post.node.uniqueSlug}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mb-4"
            src={`https://cdn-images-1.medium.com/${post.node.virtuals.previewImage.imageId}`}
            alt={post.node.title}
          />
          <div className="text-[1.5rem] leading-[1.1] mb-4">
            {post.node.title}
          </div>
          <div className="copy-xs text-vega-mid-grey">
            {post.node.virtuals.subtitle}
          </div>
        </a>
      </div>

      <div>
        <SquareBullet size="10" />
        {post.node.createdAt}
        &nbsp;&nbsp;&nbsp;
        <SquareBullet size="5" />
        <span className="text-vega-mid-grey">
          {Math.ceil(post.node.virtuals.readingTime)} minute read
        </span>
      </div>
    </div>
  );
};

export default BlogPost;
