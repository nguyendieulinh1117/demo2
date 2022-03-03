import React from "react";
import PageLayout from "../../../components/Account/pageLayout";
import Layout from "../../../components/common/Layout"
import NewAddress from "../../../components/Account/Delivery/NewAddress";
function Page(){
    return (
        <Layout>
            <PageLayout>
                <NewAddress/>
            </PageLayout>
        </Layout>
    )
}
export default Page