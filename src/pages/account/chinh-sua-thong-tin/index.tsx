import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import UpdateInfo from "../../../components/Account/UpdateInfo";
import Layout from "../../../components/common/Layout";
function index() {
  return (
    <Layout>
        <PageLayout>
          <UpdateInfo />
        </PageLayout>
        </Layout>
  );
}

export default index;
