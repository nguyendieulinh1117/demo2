import React from "react";

function NewAddress() {
  return (
    <div className="box-rewards settings address-form">
      <div className="title">
        <a href="./account-info.html">
          <img src="/assets/img/rewards/left-arrow.svg" alt="" />
        </a>
        Giao hàng tận nơi
      </div>
      <div className="item-container">
        <form>
          <div className="mobile-bg">
            <div className="title">Thêm địa chỉ mới</div>
            <div className="input-item">
              <label>Địa chỉ *</label>
              <div className="input-form">
                <input
                  type="text"
                  defaultValue="89 Nguyễn Đình Chiểu"
                  className="input-style"
                />
                <img src="/assets/img/rewards/black-arrow.svg" alt="" />
              </div>
            </div>
            <div className="input-item">
              <label>Tên địa chỉ</label>
              <div className="input-form">
                <input
                  type="text"
                  placeholder="Vd: Nhà, Công ty, Trường học..."
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <label>Email</label>
              <div className="input-form">
                <input
                  type="email"
                  placeholder="Nhập tên người nhận"
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <label>Số điện thoại </label>
              <div className="input-form">
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại người nhận"
                  className="input-style"
                />
              </div>
            </div>
            <div className="check-list input-item">
              <input id="check" type="checkbox" />
              <label htmlFor="check">Đặt làm mặc định</label>
            </div>
          </div>
          <button type="submit" className="hidden">
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}
export default NewAddress;
