import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import ScrambleText from "../components/ScrambleText";
import { useIntl, Link } from "gatsby-plugin-react-intl";

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <Container>
          <h1 className="font-glitched text-5xl max-w-2xl uppercase">
            <ScrambleText
              text={intl.formatMessage({ id: "page-index-main-title" })}
            ></ScrambleText>
          </h1>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
