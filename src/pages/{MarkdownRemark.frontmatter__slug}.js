import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'

import { graphql } from 'gatsby'
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <Container>
        <div>
          <div className="mt-space-5 border-t border-current md:mt-space-6 lg:mt-space-10">
            <div className="pt-4 md:grid md:grid-cols-12">
              <div className="md:col-span-5 md:pr-12 lg:col-span-4">
                <h1 className="title-l mb-6 max-w-[25rem]">
                  {frontmatter.title}
                </h1>
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <div
                  className="prose max-w-none prose-headings:border-0 dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
