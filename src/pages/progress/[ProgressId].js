import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/common/Layout";
import Progress2 from "../../components/Progress/Progress2/Progress2";
import Progress3 from "../../components/Progress/Progress3/Progress3";
import Progress4 from "../../components/Progress/Progress4/Progress4";
import Progress5 from "../../components/Progress/Progress5/Progress5";
function Page(props) {
  let router = useRouter();
  router = JSON.stringify(router.query);
  const { ProgressId } = JSON.parse(router);
  return (
    <Layout>
      {ProgressId == 2 ? (
        <Progress2 />
      ) : ProgressId == 3 ? (
        <Progress3 />
      ) : ProgressId == 4 ? (
        <Progress4 />
      ) : ProgressId == 5 ? (
        <Progress5 />
      ) : null}
    </Layout>
  );
}

export default Page;
