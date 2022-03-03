import React from "react";

function UpdateInfo() {
  return (
    <div className="box-rewards settings">
      <div className="title">
        <a href="./account-info.html">
          <img src="../assets/img/rewards/left-arrow.svg" alt="" />
        </a>
        Cài đặt
      </div>
      <div className="item-container">
        <form action="">
          <div className="mobile-bg">
            <div className="title">Thông tin tài khoản</div>
            <div className="input-item">
              <label>Họ và tên</label>
              <div className="input-form">
                <input
                  type="text"
                  defaultValue="Thái Nguyễn Hợp"
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <span>Số điện thoại</span>
              <div className="input-form">
                <input
                  type="tel"
                  defaultValue={'083666555'}
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <label>Email</label>
              <div className="input-form">
                <input
                  type="email"
                  defaultValue="thainguyenhop@gmail.com"
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <label>Mật khẩu</label>
              <div className="input-form">
                <input
                  type="password"
                  defaultValue="******"
                  className="input-style"
                />
              </div>
            </div>
            <div className="input-item">
              <label>Giới tính</label>
              <div className="input-form">
                <select name="" id="" className="input-style">
                  <option value="">Chưa xác định</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                </select>
                <img src="../assets/img/rewards/select.svg" alt="" />
              </div>
            </div>
            <div className="input-item">
              <label>Sinh nhật</label>
              <div className="select-list">
                <div className="input-form">
                  <select name="" id="" className="input-style">
                    <option value="">Ngày</option>
                  </select>
                  <img src="../assets/img/rewards/select.svg" alt="" />
                </div>
                <div className="input-form">
                  <select name="" id="" className="input-style">
                    <option value="">Tháng</option>
                  </select>
                  <img src="../assets/img/rewards/select.svg" alt="" />
                </div>
                <div className="input-form">
                  <select name="" id="" className="input-style">
                    <option value="">Năm</option>
                  </select>
                  <img src="../assets/img/rewards/select.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="input-item">
              <label>Địa chỉ</label>
              <div className="input-form">
                <input
                  type="text"
                  placeholder="Bấm để xem và quản lý địa chỉ"
                  className="input-style"
                />
                <img src="../assets/img/rewards/black-arrow.svg" alt="" />
              </div>
            </div>
          </div>
          <button type="submit" className="hid=''den">
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateInfo;
