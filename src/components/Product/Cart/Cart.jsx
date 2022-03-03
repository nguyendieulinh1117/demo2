import React from "react";

function Cart() {
  return (
    <div className="col-12 col-product-layout-cart" id="cart">
      <div className="container">
        <div className="row justify-content-center org-cart">
          <div className="col-12 col-md-12" id="cartEmpty">
            <div className="cart-empty">
              <img
                className="image-empty"
                src="../assets/img/illustration/empty-cart.svg"
              />
              <h6>
                Giỏ hàng chưa có sản phẩm
                <br />
                Xin mời bạn mua hàng
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
