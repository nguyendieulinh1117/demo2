import useTranslation from "next-translate/useTranslation";
import React from "react";

function Reorder(props) {
    const { t } = useTranslation();
    return (
        <section className="pb-md-8 bg-grey-lightest product-home-reorder" id="pizza">
            <div className="org-product container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="title-best-seller">
                            <h4 className="main-title">Reorder</h4>
                        </div>
                    </div>
                </div>

                {/* <p className="text-center content-no-bill">Bạn chưa có đơn hàng nào.</p> */}

                <div className="row-reorder">
                    <div className="reorder-slider">
                        <div className="box-reorder">
                            <div className="wrapper-reorder">
                                <div className="image-reorder">
                                    <div className="box-img-reorder">
                                        <img src="../assets/img/cart-detail-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="wrapper-content-reorder">
                                    <div className="content-reorder">
                                        <div className="name-product-reorder">
                                            <div className="name-reorder">Combo gà sốt kem tiêu - 1 người</div>
                                        </div>
                                        <div className="quality-product-home">
                                            x&nbsp;1
                                            <div className="price-reorder">79.000₫</div>
                                        </div>
                                    </div>
                                    <div className="detail-reorder">
                                        <a href="product-finish.html">{t("home:detail")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-btn">
                                <p className="review">
                                    <i className="icon-scooter" style={{ paddingRight: "8px" }}></i>
                                    {t("home:review")}
                                </p>
                                <a href="product-finish.html" className="btn-reorder">
                                    {t("home:reorder")}
                                </a>
                            </div>
                        </div>
                        <div className="box-reorder">
                            <div className="wrapper-reorder">
                                <div className="image-reorder">
                                    <div className="box-img-reorder">
                                        <img src="../assets/img/cart-detail-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="wrapper-content-reorder">
                                    <div className="content-reorder">
                                        <div className="name-product-reorder">
                                            <div className="name-reorder">Combo gà sốt kem tiêu - 1 người</div>
                                        </div>
                                        <div className="quality-product-home">
                                            x&nbsp;1
                                            <div className="price-reorder">79.000₫</div>
                                        </div>
                                    </div>
                                    <div className="detail-reorder">
                                        <a href="product-finish.html">{t("home:detail")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-btn">
                                <p className="review">
                                    <i className="icon-scooter" style={{ paddingRight: "8px" }}></i>
                                    {t("home:review")}
                                </p>
                                <a href="product-finish.html" className="btn-reorder">
                                    {t("home:reorder")}
                                </a>
                            </div>
                        </div>
                        <div className="box-reorder">
                            <div className="wrapper-reorder">
                                <div className="image-reorder">
                                    <div className="box-img-reorder">
                                        <img src="../assets/img/cart-detail-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="wrapper-content-reorder">
                                    <div className="content-reorder">
                                        <div className="name-product-reorder">
                                            <div className="name-reorder">Combo gà sốt kem tiêu - 1 người</div>
                                        </div>
                                        <div className="quality-product-home">
                                            x&nbsp;1
                                            <div className="price-reorder">79.000₫</div>
                                        </div>
                                    </div>
                                    <div className="detail-reorder">
                                        <a href="product-finish.html">{t("home:detail")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-btn">
                                <p className="review">
                                    <i className="icon-scooter" style={{ paddingRight: "8px" }}></i>
                                    {t("home:review")}
                                </p>
                                <a href="product-finish.html" className="btn-reorder">
                                    {t("home:reorder")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reorder;
