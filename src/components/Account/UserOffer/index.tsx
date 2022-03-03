import Link from "next/link";
import React from "react";

function UserOffer() {
  return (
    <div className="box-rewards offer">
      <div className="title">
        <div className="box-title">
          <a href="./account-info.html">
            <img src="../assets/img/rewards/left-arrow.svg" alt="" />
          </a>
          Ưu đãi của tôi
        </div>
        <span>Tất cả ưu đãi (4)</span>
      </div>
      <div className="item-container">
        <div className="item">
          <div className="voucher">MÃ: MGIAMGIA1</div>
          <div className="discount">Giảm 30k đơn hàng đầu tiên</div>
          <div className="date">
            HSD: Còn 1 ngày
            HSD: Còn 1 ngày
            <Link href={'/account/uu-dai-cua-toi/1'}>
              <a className="view-more">
                Xem điều kiện
                <img src="../assets/img/rewards/left-arrow.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="voucher">MÃ: MGIAMGIA3</div>
          <div className="discount">Giảm 20k cho đơn hàng 150k</div>
          <div className="date">
            HSD: Còn 1 ngày
            <Link href={'/account/uu-dai-cua-toi/1'}>
              <a className="view-more">
                Xem điều kiện
                <img src="../assets/img/rewards/left-arrow.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="voucher">MÃ: MGIAMGIA2</div>
          <div className="discount">
            Đơn từ 2 miếng Gà tắm nước mắm - Giảm còn 12k/miếng
          </div>
          <div className="date">
          HSD: Còn 1 ngày
            <Link href={'/account/uu-dai-cua-toi/1'}>
              <a className="view-more">
                Xem điều kiện
                <img src="../assets/img/rewards/left-arrow.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="voucher">MÃ: MGIAMGIA4</div>
          <div className="discount">Giảm 40k đơn hàng đầu tiên</div>
          <div className="date">
            HSD: Còn 1 ngày
            HSD: Còn 1 ngày
            <Link href={'/account/uu-dai-cua-toi/1'}>
              <a className="view-more">
                Xem điều kiện
                <img src="../assets/img/rewards/left-arrow.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserOffer;
