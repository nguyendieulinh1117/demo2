import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import Layout from "../../../components/common/Layout";
import ScorePage from "../../../components/Account/ScoreHistory";


function index() {
  return (
    <Layout>
        <PageLayout>
          <ScorePage />
        </PageLayout>
        </Layout>
  );
}

export default index;
