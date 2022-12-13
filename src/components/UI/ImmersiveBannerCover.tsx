import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Button from '../UI/Button'

export type Link = {
  to: string
  text: string
}

export interface ImmersiveBannerCoverProps {
  title: string
  text: string
  link1?: Link
  link2?: Link
  backgroundImage: IGatsbyImageData
  image: IGatsbyImageData
}

const ImmersiveBannerCover = ({
  title,
  text,
  link1,
  link2,
  backgroundImage,
  image,
}: ImmersiveBannerCoverProps) => {
  console.log(backgroundImage?.images?.fallback?.src)
  return (
    <div
      className="w-full rounded-[1.875rem] bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage?.images?.fallback?.src})`,
      }}
    >
      <div className="md:grid md:grid-cols-12 md:gap-space-10">
        <div className="p-space-6 md:col-span-8 md:p-space-7 lg:p-space-9">
          <div className="heading-l mb-space-5">{title}</div>
          <div className="body-xl mb-space-6">{text}</div>
          {link1 && (
            <div className="block md:inline-block">
              <Button to={link1.to}>{link1.text}</Button>
            </div>
          )}
          {link2 && (
            <div className="mt-space-5 block md:ml-space-5 md:mt-0 md:inline-block">
              <Button variant="secondary" to={link2.to} className="">
                {link2.text}
              </Button>
            </div>
          )}
        </div>
        <div className="mx-auto flex max-w-[21rem] items-end pt-space-6 pr-space-6 md:col-span-4 md:max-w-none md:pt-space-7 md:pr-space-7 lg:pt-space-9 lg:pr-space-9">
          <GatsbyImage image={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImmersiveBannerCover
