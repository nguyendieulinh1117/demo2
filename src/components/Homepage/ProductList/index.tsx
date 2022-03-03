import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../../../hook/actions/products";
import { AppState } from "../../../hook/rootReducer";
import PerfectScrollbar from "react-perfect-scrollbar";
import useTranslation from "next-translate/useTranslation";
import DailyPromotion from "../DailyPromotion";
import BestSeller from "../BestSeller";

function ProductList(props) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { productList }: any = useSelector((state: AppState) => state.products);
    // console.log(productList);
    useEffect(() => {
        dispatch(getProductListAction());
    }, []);
    const productResponse = productList && productList.response;
    const products: [] = productResponse && productResponse.products;
    const bestSellerProduct = products && products.slice(0, 4);
    const promoteProduct = products && products.slice(-4);

    console.log(bestSellerProduct);
    return (
        <section className="pb-md-8 bg-grey-lightest product-home-section" id="pizza">
            <div className="org-product">
                <ul className="nav nav-transform overflow-sm-hidden overflow-md-visible" role="tablist">
                    <li className="nav-item title-best-seller" role="presentation">
                        <a className="nav-link main-title active" id="tab-1" data-toggle="tab" href="#tab-bestseller" role="tab" aria-controls="tab-bestseller" aria-selected="true">
                            {t("home:best_seller")}
                        </a>
                    </li>
                    <li className="nav-item title-best-seller" role="presentation">
                        <a className="nav-link main-title" id="tab-2" data-toggle="tab" href="#tab-promtion" role="tab" aria-controls="tab-promtion" aria-selected="false">
                            {t("home:promotion")}
                        </a>
                    </li>
                </ul>
                <div className="container container-1000">
                    <div className="tab-content">
                        {productList.success ? <BestSeller products={bestSellerProduct} /> : <div>loading....</div>}
                        {productList.success ? <DailyPromotion products={promoteProduct} /> : <div>loading....</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper-see-more">
                            <Link href={"/product"}>
                                <a className="btn btn-see-more font-600-16">{t("home:see_more")}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;
