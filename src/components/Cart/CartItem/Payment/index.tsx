import Link from "next/link";
import React from "react";

function Payment() {
  return (
    <div className="payment-wrap">
      <Link href={'./product-finish'}>
        <a className="pay-btn">
          Thanh toán
        </a>
      </Link>
      <span className="add-voucher voucher-mobile">Nhập mã giảm giá</span>
      <form>
        <input type="text" placeholder="Điền mã voucher của bạn" required />
        <button type="button">Áp dụng</button>
      </form>
      <div className="list-discount">
        <div className="discount-item">
          <div className="item-box">
            <div className="item">
              <span>MAGIAMGIATHU1</span>
              <span>-50.000₫</span>
            </div>
            <div className="delete">Xóa mã giảm giá</div>
          </div>
          <div className="item-box">
            <div className="item">
              <span>MAGIAMGIATHU1</span>
              <span>-50.000₫</span>
            </div>
            <div className="delete">Xóa mã giảm giá</div>
          </div>
        </div>
        <div className="add-voucher">Nhập thêm mã giảm giá</div>
      </div>
    </div>
  );
}

export default Payment;
