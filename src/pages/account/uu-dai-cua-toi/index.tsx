import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import UserOffer from "../../../components/Account/UserOffer";
import Layout from "../../../components/common/Layout";

function index() {
  return (
    <Layout>
        <PageLayout>
          <UserOffer />
        </PageLayout>
        </Layout>
  );
}

export default index;
