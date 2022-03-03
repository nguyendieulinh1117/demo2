import React from 'react';
import { useRouter } from 'next/dist/client/router'
import Layout from '../../components/common/Layout'

function Page(props) {
    const router = useRouter();
    return (
        <Layout>
            <h1>Card Detail page</h1>
            <div>query {JSON.stringify(router.query)}</div>
        </Layout>
    );
}

export default Page;