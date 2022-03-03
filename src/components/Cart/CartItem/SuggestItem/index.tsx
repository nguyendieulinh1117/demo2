import React from "react";

function SuggestItem() {
  return (
    <div className="suggest-product">
      <div className="boxed-title">Có thể bạn sẽ thích</div>
      <div className="list-suggest">
        <div className="item">
          <div className="item-img">
            <img src="../assets/img/cart-detail-2.png" alt="" />
          </div>
          <div className="item-des">
            <div className="suggest-name">Khoai tây chiên</div>
            <div className="suggest-price">79.000₫</div>
            <button className="btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
        <div className="item">
          <div className="item-img">
            <img src="../assets/img/cart-detail-3.png" alt="" />
          </div>
          <div className="item-des">
            <div className="suggest-name">Món thứ 1</div>
            <div className="suggest-price">79.000₫</div>
            <button className="btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
        <div className="item">
          <div className="item-img">
            <img src="../assets/img/cart-detail-4.png" alt="" />
          </div>
          <div className="item-des">
            <div className="suggest-name">Món thứ 2</div>
            <div className="suggest-price">79.000₫</div>
            <button className="btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuggestItem;
