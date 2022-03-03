import Link from "next/link";
import React from "react";
import Cart from "./Cart/Cart";
import Info from "./Info/Info";
import Payment from "./Payment/Payment";
import PerfectScrollbar from "react-perfect-scrollbar";

function ProductFinish() {
  return (
    <main role="main">
      <section className="product-finish">
        <div className="row row-product-layout">
          <div className="col-12 col-product-layout-list">
            <div className="row cart-delivery">
              <p className="delivery-status">
                <span>
                  Bạn đang chọn:
                  <a href="#" className>
                    Giao hàng tận nơi
                  </a>
                </span>
                <span>440 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú</span>
              </p>
              <a href="#" className="delivery-edit float-right">
                <i className="icon-edit" />
              </a>
            </div>
            <div className="delivery-form">
              <form action method="post" className="nomal">
                <Info />
                <Payment />

                <div className="box-code-order show-mobile">
                  <div className="order-code">Mã đơn hàng: 000001</div>
                  <div className="box-price">
                    <div className="item-price">
                      <div className="title-total">Tổng cộng:</div>
                      <div className="price-total">1.490.000 ₫</div>
                    </div>
                    <div className="item-coupon">
                      <div className="title-total">MAGIAMGIADACBIET</div>
                      <div className="price-total">-50.000₫</div>
                    </div>
                  </div>
                  <div className="wrapper-item-cart-finish">
                    <div className="box-cart-finish">
                      <div className="content-cart-finish">
                        <div className="quality-product-home">1 &nbsp; x</div>
                        <div className="name-product-cart-finish">
                          <div className="name-cart-finish">
                            Combo gà sốt kem tiêu - 1 người
                          </div>
                          <ul className="list-sub-cart-finish">
                            <li>Pepper Mayo Chicken</li>
                            <li>Khoai tây chiên - vừa</li>
                            <li>Gà rán giòn</li>
                            <li>Coca</li>
                          </ul>
                        </div>
                      </div>
                      <div className="image-cart-finish">
                        <div className="price-cart-finish">79.000₫</div>
                        <div className="box-img-cart-finish">
                          <img src="../assets/img/cart-detail-1.png" alt />
                        </div>
                      </div>
                    </div>
                    <div className="box-cart-finish">
                      <div className="content-cart-finish">
                        <div className="quality-product-home">1 &nbsp; x</div>
                        <div className="name-product-cart-finish">
                          <div className="name-cart-finish">
                            Combo gà sốt kem tiêu - 1 người
                          </div>
                          <ul className="list-sub-cart-finish">
                            <li>Pepper Mayo Chicken</li>
                            <li>Khoai tây chiên - vừa</li>
                            <li>Gà rán giòn</li>
                            <li>Coca</li>
                          </ul>
                        </div>
                      </div>
                      <div className="image-cart-finish">
                        <div className="price-cart-finish">79.000₫</div>
                        <div className="box-img-cart-finish">
                          <img src="../assets/img/cart-detail-1.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="progress.html" className="finish-btn desktop">
                  HOÀN TẤT ĐƠN HÀNG
                </a>
                <a
                  href="progress.html"
                  className="finish-btn finish-btn-mobile mobile"
                >
                  THANH TOÁN – 79.000₫
                </a>
              </form>
            </div>
          </div>

          <div className="col-12 col-product-layout-cart" id="cart">
            <div className="container">
              <div className="org-cart">
                <div
                  className="col-12 col-md-12 org-cart-content"
                  id="cartOrder"
                >
                  <PerfectScrollbar
                    className="org-cart-scollable"
                    data-provider="PerfectScrollbar"
                    options={{suppressScrollX: true}}
                  >
                    <div className="org-cart-title">
                      <span>Đơn hàng của bạn:</span>
                      <span>8 món</span>
                    </div>
                    <a
                      className="voucher-confirm"
                      href="javascript:void(0);"
                      id="addCoupon"
                    >
                      Bạn có mã giảm giá?
                    </a>
                    <div className="cart-order">
                      <div className="order-item">
                        <div className="info-order">
                          <div className="image-product">
                            <img
                              src="../assets/img/product-card-thumb.png"
                              alt
                            />
                          </div>
                          <div className="content">
                            <div className="product-name">
                              Combo gà sốt kem tiêu - 1 người
                            </div>
                            <ul className="attach-list">
                              <li>Pepper Mayo Chicken</li>
                              <li>Khoai tây chiên - vừa</li>
                              <li>Coca</li>
                            </ul>
                          </div>
                        </div>
                        <div className="action-order">
                          <div className="action-form">
                            <form className="quantity">
                              <button className="minus">-</button>
                              <input
                                readOnly
                                type="text"
                                defaultValue={1}
                                name
                                id
                              />
                              <button className="plus">+</button>
                            </form>
                            <div className="action">
                              <a href="#">Điều chỉnh</a>
                              <a href="#">Xoá</a>
                            </div>
                          </div>
                          <div className="product-price">79.000₫</div>
                        </div>
                        <div className="voucher-order">
                          <div className="question">Chọn mua theo</div>
                          <div className="choosen">
                            <a href>Chương trình khuyến mãi</a>
                            <a href>Combo</a>
                          </div>
                        </div>
                      </div>
                      <div className="order-item">
                        <div className="info-order">
                          <div className="image-product">
                            <img
                              src="../assets/img/product-card-thumb.png"
                              alt
                            />
                          </div>
                          <div className="content">
                            <div className="product-name">
                              Combo gà sốt kem tiêu - 1 người
                            </div>
                            <ul className="attach-list">
                              <li>Pepper Mayo Chicken</li>
                              <li>Khoai tây chiên - vừa</li>
                              <li>Coca</li>
                            </ul>
                          </div>
                        </div>
                        <div className="action-order">
                          <div className="action-form">
                            <form className="quantity">
                              <button className="minus">-</button>
                              <input
                                readOnly
                                type="text"
                                defaultValue={1}
                                name
                                id
                              />
                              <button className="plus">+</button>
                            </form>
                            <div className="action">
                              <a href="#">Điều chỉnh</a>
                              <a href="#">Xoá</a>
                            </div>
                          </div>
                          <div className="product-price">79.000₫</div>
                        </div>
                        <div className="voucher-order">
                          <div className="question">Chọn mua theo</div>
                          <div className="choosen">
                            <a href>Chương trình khuyến mãi</a>
                            <a href>Combo</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                  <div className="org-cart-fixed voucher-point">
                    <div className="custom-control custom-radio org-custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="payment_method"
                        id="voucher-point"
                        defaultValue={4}
                        defaultChecked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="voucher-point"
                      >
                        <div className="title-voucher">
                          <p>Dùng điểm tích tũy để thanh toán</p>
                          <span>-50.000₫</span>
                        </div>
                        <span className="description-voucher">
                          Bạn đang có 3412 điểm tích luỹ
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
export default ProductFinish;
