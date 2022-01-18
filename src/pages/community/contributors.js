import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import Contributor from "../../components/Contributor";

const Contributors = () => {
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    async function fetchContributors() {
      let response = await fetch(
        "https://contributors.vega.win/contributors?sort=random"
      );
      response = await response.json();
      setContributors(response.github_contributors);
    }
    fetchContributors();
  }, []);

  return (
    <Layout>
      <Container>
        <div className="mb-16 lg:pt-16">
          <div className="max-w-[21.25rem] md:max-w-[44rem] mx-auto text-center mb-6 md:mb-12">
            <GlitchTitle level={1} size="medium">
              Meet our contributors
            </GlitchTitle>
          </div>

          <div className="mx-auto max-w-[42rem]">
            {contributors ? (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {contributors.map((contributor, idx) => {
                  return (
                    <Contributor
                      className=""
                      key={idx}
                      contributor={contributor}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Contributors;
