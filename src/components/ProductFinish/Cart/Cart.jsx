import React from "react";

function Cart() {
  return (
    <div className="col-12 col-product-layout-cart" id="cart">
      <div className="container">
        <div className="org-cart">
          <div className="col-12 col-md-12 org-cart-content" id="cartOrder">
            <div
              className="org-cart-scollable"
              data-provider="PerfectScrollbar"
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
                      <img src="../assets/img/product-card-thumb.png" alt />
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
                        <input readOnly type="text" defaultValue={1} name id />
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
                      <img src="../assets/img/product-card-thumb.png" alt />
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
                        <input readOnly type="text" defaultValue={1} name id />
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
            </div>
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
                <label className="custom-control-label" htmlFor="voucher-point">
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
  );
}
export default Cart;
