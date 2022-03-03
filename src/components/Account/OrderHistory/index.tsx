import React from "react";

function OrderHistory(){
    return(
        <div className="box-rewards order-history">
  <div className="title title-score">
    <a href="./account-info.html">
      <img src="../assets/img/rewards/left-arrow.svg" alt='' />
    </a>
    Lịch sử đơn hàng
  </div>
  <div className="item-container">
    <div className="item">
      <div className="box-item">
        <div className="content-item">
          <div className="item-title">
            <div className="quantity">
              <span>x 1</span>
              <div className="payment">79.000₫</div>
            </div>
            Combo gà sốt kem tiêu - 2 người
          </div>
          <a href="#">
            <div className="sub-content">
              Xem chi tiết
            </div>
          </a>
        </div>
        <div className="img-item">
          <div className="box-img">
            <img src="../assets/img/rewards/order-item.png" alt='' />
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="re-order">
        <span>
          <img src="../assets/img/rewards/misc.svg" alt="" />
          Giao hàng thành công
        </span>
        <button  className="btn btn-pay">Đặt lại</button>
      </div>
    </div>
    <div className="item">
      <div className="box-item">
        <div className="content-item">
          <div className="item-title">
            <div className="quantity">
              <span>x 1</span>
              <div className="payment">79.000₫</div>
            </div>
            Combo gà sốt kem tiêu - 2 người
          </div>
          <a href="#">
            <div className="sub-content">
              Xem chi tiết
            </div>
          </a>
        </div>
        <div className="img-item">
          <div className="box-img">
            <img src="../assets/img/rewards/order-item.png" alt='' />
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="re-order">
      <span>
          <img src="../assets/img/rewards/misc.svg" alt="" />
          Giao hàng thành công
        </span>
        <button className="btn btn-pay">Đặt lại</button>
      </div>
    </div>
    <div className="item">
      <div className="box-item">
        <div className="content-item">
          <div className="item-title">
            <div className="quantity">
              <span>x 1</span>
              <div className="payment">79.000₫</div>
            </div>
            Combo gà sốt kem tiêu - 2 người
          </div>
          <a href="#">
            <div className="sub-content">
              Xem chi tiết
            </div>
          </a>
        </div>
        <div className="img-item">
          <div className="box-img">
            <img src="../assets/img/rewards/order-item.png" alt='' />
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="re-order">
      <span>
          <img src="../assets/img/rewards/misc.svg" alt="" />
          Giao hàng thành công
        </span>
        <button className="btn btn-pay">Đặt lại</button>
      </div>
    </div>
  </div>
</div>

    )
}
export default OrderHistory