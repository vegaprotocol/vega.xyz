import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const Events = ({ data }) => {
  return <Layout></Layout>
}

export default Events

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
