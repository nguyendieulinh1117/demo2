import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import OfferDetail from "../../../components/Account/UserOffer/OfferDetail";
import Layout from "../../../components/common/Layout";

function index() {
  return (
    <Layout>
        <PageLayout>
          <OfferDetail />
        </PageLayout>
        </Layout>
  );
}

export default index;
