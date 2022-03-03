import React from "react";
import OrderHistory from "../../../components/Account/OrderHistory";
import PageLayout from "../../../components/Account/pageLayout";
import Layout from "../../../components/common/Layout";
function index(props) {
  return (
    <Layout>
        <PageLayout>
            <OrderHistory/>
        </PageLayout>
    </Layout>
  );
};

export default index;
