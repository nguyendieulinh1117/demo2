import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import Recieve from "../../../components/Account/RecieveAtStore";
import Layout from "../../../components/common/Layout";
function index() {
  return (
    <Layout>
        <PageLayout>
          <Recieve />
        </PageLayout>
        </Layout>
  );
}

export default index;
