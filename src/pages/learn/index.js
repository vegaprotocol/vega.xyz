import React from "react";
import Layout from "../../components/Layout";
import { useIntl } from "gatsby-plugin-react-intl";

const LearnPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <div class="container mx-auto">
        <title>Learn</title>
        <h1 class="text-5xl uppercase"></h1>
      </div>
    </Layout>
  );
};

export default LearnPage;
