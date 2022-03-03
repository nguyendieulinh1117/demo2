import Link from "next/link";
import React, { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

function BestSeller({ products }) {
    return (
        <div className="tab-pane active" id="tab-bestseller" role="tabpanel" aria-labelledby="tab-bestseller">
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

                                    <p className="product-price">{item.price.toLocaleString("vi-VN")}₫</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </PerfectScrollbar>
        </div>
    );
}

export default BestSeller;
