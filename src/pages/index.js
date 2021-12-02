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
          <div className="max-w-2xl">
            <h1 className="font-glitched mb-4 text-5xl uppercase">
              <ScrambleText
                text={intl.formatMessage({ id: "page-index-hero-title" })}
              ></ScrambleText>
            </h1>
            <p className="mb-6">
              {intl.formatMessage({ id: "page-index-hero-paragraph" })}
            </p>

            <p>
              <Link to="/" className="underline">
                {intl.formatMessage({ id: "learn-more" })} &raquo;
              </Link>
            </p>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
