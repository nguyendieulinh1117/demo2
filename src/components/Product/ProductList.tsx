import React, { useEffect } from "react";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";

import { useDispatch, useSelector } from "react-redux";
import { getProductListAction, getProductDetailAction } from "../../hook/actions/products";
import { getCategoryListAction } from "../../hook/actions/categories";

import { AppState } from "../../hook/rootReducer";

function ProductList({toggleModal}) {
  const dispatch = useDispatch();
  const products: any = useSelector((state: AppState) => state.products);
  const categories: any = useSelector((state: AppState) => state.categories);

  // console.log("products :>> ", products);
  // console.log('categories :>> ', categories);

  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getProductDetailAction(9));
    dispatch(getCategoryListAction());
  }, []);

  const handleToggle = ()=> toggleModal()
  return (
    <>
      <div className="category-products">
        <div className="title-main">MÓN MỚI</div>

        <PerfectScrollbar className="org-product-grid" options={{ suppressScrollX: false }} onScrollX={(container) => console.log(`scrolled to: ${container.scrollTop}.`)}>
          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <Link href={"/product/mi-y-mua-1-tang-1"}>
                  <a onClick={()=>handleToggle()}>
                    <img src="../assets/img/products/gatamnuocmam-1.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  GÀ TẮM NƯỚC MẮM
                </a>
                <p className="product-price">42.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}

          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <Link href={"/product/ga-gion-khong-cay"}>
                  <a onClick={()=>handleToggle()}>
                    <img src="../assets/img/products/gatamnuocmam-2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  COMBO GÀ TẮM NƯỚC MẮM - 2 NGƯỜI
                </a>
                <p className="product-price">159.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}

          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <Link href={"/product/3"}>
                  <a onClick={()=>handleToggle()}>
                    <img src="../assets/img/products/gatamnuocmam-3.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  COMBO GÀ TẮM NƯỚC MẮM
                </a>
                <p className="product-price">95.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}
        </PerfectScrollbar>
      </div>
      <div className="category-products">
        <div className="title-main">GÀ GIÒN</div>
        <PerfectScrollbar className="org-product-grid" options={{ suppressScrollX: false }} onScrollX={(container) => console.log(`scrolled to: ${container.scrollTop}.`)}>
          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <a href="product-detail.html">
                  <img src="../assets/img/products/gatamnuocmam-1.png" alt="image" />
                </a>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  GÀ TẮM NƯỚC MẮM
                </a>
                <p className="product-price">42.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}

          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <a href="product-detail.html">
                  <img src="../assets/img/products/gatamnuocmam-2.png" alt="image" />
                </a>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  COMBO GÀ TẮM NƯỚC MẮM - 2 NGƯỜI
                </a>
                <p className="product-price">159.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}

          {/* start product item*/}
          <div className="col-10 col-sm-6 col-md-4 product-item flex-fit">
            <div className="card product product-card">
              <div className="card-img-top">
                <a href="product-detail.html">
                  <img src="../assets/img/products/gatamnuocmam-3.png" alt="image" />
                </a>
              </div>
              <div className="card-body px-4">
                <a href="product-detail.html" className="product-name">
                  COMBO GÀ TẮM NƯỚC MẮM
                </a>
                <p className="product-price">95.000 ₫</p>
              </div>
            </div>
          </div>
          {/* end product item */}
        </PerfectScrollbar>
      </div>
    </>
  );
}
export default ProductList;
