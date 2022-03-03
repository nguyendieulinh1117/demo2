import React from "react";

function OfferDetail() {
  return (
    <div className="box-rewards offer-detail">
      <div className="title">
        <div className="box-title">
          <a href="./account-info.html">
            <img src="/assets/img/rewards/left-arrow.svg" alt='' />
          </a>
          Điều kiện
        </div>
      </div>
      <div className="item-container">
        <div className="item">
          <div className="item-title main">MGIAMGIA1</div>
          <div className="item-content main">HSD: Còn 1 ngày</div>
        </div>
        <div className="item">
          <div className="item-title">GIẢM 40% CHO CÁC MÓN ĂN LẺ.</div>
          <div className="item-content">
            Các Fan Gà rán ơi, Deal Hot như thế này thì làm sao có thể ngó lơ
            phải không nào? Popeyes giảm 40% cho các món lẻ khi order qua App
            đó. Từ Gà giòn đến Burger, tới khoai tây chiên, bắp cải trộn, tất cả
            đều được giảm 40% tất tần tật. Ở nhà hay công sở, chỉ cần vào App
            Popeyes, có bữa ăn ngon mà còn giao hàng miễn phí nên cứ để Popeyes
            lo hết cho bạn.
          </div>
        </div>
        <div className="item">
          <div className="item-title">Hướng dẫn để nhận khuyến mãi Online:</div>
          <div className="item-content step">
            <span>B1: Order các sản phẩm trong Thực Đơn, mục "Món lẻ" </span>
            <span>
              B2: Nhập mã khuyễn mãi: POPEYES40 trong phần thanh toán.
            </span>
            <span>
              {" "}
              B3: Hoàn thành đơn hàng và chờ shipper Popeyes giao hàng.
            </span>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Điều kiện áp dụng:</div>
          <div className="item-content">
            <ul>
              <li>- Áp dụng cho menu món lẻ "Món lẻ"</li>
              <li>- Không áp dụng cho đơn hàng trên 500.000đ</li>
              <li>- Không áp dụng với các khuyến mãi khác.</li>
              <li>- Mã giảm 40% áp dụng mỗi tuần 1 lần cho mỗi khách hàng.</li>
              <li>- Không áp dụng tại Popeyes sân bay và Phú Quốc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferDetail;
