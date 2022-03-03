import Link from "next/link";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

function DailyPromotion({ products }) {
    return (
        <div className="tab-pane" id="tab-promtion" role="tabpanel" aria-labelledby="tab-promtion">
            <PerfectScrollbar className="row org-product-grid">
                {products &&
                    products.map((item, index) => (
                        <div key={index} className="col-10 col-sm-6 col-md-3 flex-fit">
                            <div className="card product product-card">
                                <Link href={`/product/${item.slug}`}>
                                    <a className="card-img-top">
                                        <img src={item.image.originUrl} alt={item.slug} />
                                    </a>
                                </Link>

                                <div className="card-body">
                                    <Link href={`/product/${item.slug}`}>
                                        <a className="product-name">{item.name}</a>
                                    </Link>
                                    <p className="product-price">
                                        <span className="product-cost">{item.price.toLocaleString("vi-VN")} ₫</span> <br />
                                        {(item.price - item.discount).toLocaleString("vi-VN")} ₫
                                    </p>
                                </div>
                                <span className="product-label">
                                    <i className="icon-label-promotion"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                {/* <div className="col-10 col-sm-6 col-md-3 flex-fit">
                    <div className="card product product-card">
                        <a href="product-detail.html" className="card-img-top">
                            <img src="../assets/img/seller-home-5.png" alt="" />
                        </a>
                        <div className="card-body">
                            <a href="product-detail.html" className="product-name">
                                Gà giòn cay
                            </a>

                            <p className="product-price">
                                <span className="product-cost">42.000 ₫</span> <br />
                                32.000 ₫
                            </p>
                        </div>
                        <span className="product-label">
                            <i className="icon-label-promotion"></i>
                        </span>
                    </div>
                </div>
                <div className="col-10 col-sm-6 col-md-3 flex-fit">
                    <div className="card product product-card">
                        <a href="product-detail-combo.html" className="card-img-top">
                            <img src="../assets/img/seller-home-6.png" alt="" />
                        </a>
                        <div className="card-body">
                            <a href="product-detail-combo.html" className="product-name">
                                Burger gà
                            </a>
                            <p className="product-price">
                                <span className="product-cost">54.000 ₫</span> <br />
                                45.000 ₫
                            </p>
                        </div>
                        <span className="product-label">
                            <i className="icon-label-promotion"></i>
                        </span>
                    </div>
                </div>
                <div className="col-10 col-sm-6 col-md-3 flex-fit">
                    <div className="card product product-card">
                        <a href="product-detail.html" className="card-img-top">
                            <img src="../assets/img/seller-home-7.png" alt="" />
                        </a>
                        <div className="card-body">
                            <a href="product-detail.html" className="product-name">
                                Gà giòn không cay
                            </a>
                            <p className="product-price">
                                <span className="product-cost">79.000 ₫</span> <br />
                                69.000 ₫
                            </p>
                        </div>
                        <span className="product-label">
                            <i className="icon-label-promotion"></i>
                        </span>
                    </div>
                </div>
                <div className="col-10 col-sm-6 col-md-3 flex-fit">
                    <div className="card product product-card">
                        <a href="product-detail.html" className="card-img-top">
                            <img src="../assets/img/seller-home-8.png" alt="" />
                        </a>
                        <div className="card-body">
                            <a href="product-detail.html" className="product-name">
                                Gà tắm nước mắm
                            </a>
                            <p className="product-price">
                                <span className="product-cost">139.000 ₫</span> <br />
                                100.000 ₫
                            </p>
                        </div>
                        <span className="product-label white">
                            <i className="icon-label-promotion"></i>
                        </span>
                    </div>
                </div> */}
            </PerfectScrollbar>
        </div>
    );
}

export default DailyPromotion;
