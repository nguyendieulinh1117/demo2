import React from "react";
import Payment from "../Payment";

function UserCart() {
  return (
    <div className="user-cart">
      <div className='list-cart-item'>
      <div className="boxed-title">Giỏ hàng của bạn</div>
      <div className="item-des">
        <div className="name">Flash sale – Combo gà sốt kem tiêu</div>
        <div className="delete-combo">Xoá toàn bộ combo</div>
        <div className="cart-price">79.000 ₫</div>
      </div>
      <div className="list-cart-item">
        <div className="item">
          <div className="order">1</div>
          <div className="img-detail">
            <img
              className="img-fluid rounded-xl"
              src="../assets/img/cart-detail-1.png"
              alt=""
            />
          </div>
          <div className="product-cart-detail">
            <div className="combo-name">Combo gà sốt kem tiêu - 1 người</div>
            <div className="products-combo">
              <span>Pepper Mayo Chicken</span>
              <span>Khoai tây chiên - vừa</span>
              <span>Coca</span>
            </div>
            <div className="edit">Điều chỉnh</div>
          </div>
        </div>
        <div className="item">
          <div className="order">2</div>
          <div className="img-detail">
            <img
              className="img-fluid rounded-xl"
              src="../assets/img/cart-detail-1.png"
              alt=""
            />
          </div>
          <div className="product-cart-detail">
            <div className="combo-name">Combo gà sốt kem tiêu - 1 người</div>
            <div className="products-combo">
              <span>Pepper Mayo Chicken</span>
              <span>Khoai tây chiên - vừa</span>
              <span>Coca</span>
            </div>
            <div className="edit">Điều chỉnh</div>
          </div>
        </div>
      </div>
      </div>
      <Payment/>
    </div>
  );
}
export default UserCart;
