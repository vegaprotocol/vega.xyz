import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery } from "gatsby";

const Contributors = () => {
  const contributors = useStaticQuery(graphql`
    query Contributors {
      allContributors {
        nodes {
          username
          avatar
          total_contributions
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <h1>Contributors</h1>

        <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
          {contributors.allContributors.nodes.map((contributor) => (
            <div>
              {contributor.username}
              <img src={contributor.avatar} width="50" height="50" />
              {contributor.total_contributions}
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Contributors;
