import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/common/Layout";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function Page(props) {
  const router = useRouter();
  return (
    <Layout>
      <ProductDetail />
      {/* <h1>Product Detail page</h1>
            <div>query {JSON.stringify(router.query)}</div> */}
    </Layout>
  );
}

export default Page;
