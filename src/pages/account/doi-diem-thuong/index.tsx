import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import ScoreExchange from "../../../components/Account/ScoreExchange";
import Layout from "../../../components/common/Layout";

function index() {
  return (
    <Layout>
        <PageLayout>
          <ScoreExchange />
        </PageLayout>
        </Layout>
  );
}

export default index;
