import Link from "next/link";
import React from "react";

function CartEmpty() {
  return (
    <section className="wrapper-cart-empty">
      <div className="container">
        <div className="row box-empty-text">
          <div className="col-12 col-md-6">
            <div className="img-chicken-empty">
              <img
                className="img-fluid"
                src="../assets/img/illustration/empty-cart.svg"
                alt=""
              />
            </div>
            <div className="box-cart-content">
              <h3>Giỏ hàng trống</h3>
              <p>
                Hiện tại bạn chưa đặt món nào trong giỏ hàng cả. <br /> Dạo vòng
                quanh chọn món nhé bạn ơi, ở đây nhiều món ngon lắm ;)
              </p>
              <Link href={'./product'}>
              <a className="btn btn-coke">
                Tiếp tục mua hàng
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartEmpty;
