import React from "react";
import Layout from "../../components/common/Layout";
import Banner from "../../components/Homepage/Banner/Banner";
import Reorder from "../../components/Homepage/Reorder/Reorder";
import SearchForm from "../../components/Homepage/SeachForm/SearchForm";
import Auth from "../../components/Auth/Auth";
import ProductList from "../../components/Homepage/ProductList";

function Page(props) {
    const isAuth = false;

    return (
        <Layout>
            <Banner />
            <SearchForm />
            <ProductList />
            <Reorder />
            {/* {isAuth ? <Reorder /> : <Auth />} */}
        </Layout>
    );
}

export default Page;
