import React from "react";

function Info() {
  return (
    <div className="row info">
      <div className="col-12 col-lg-6 form-box">
        <div className="card card-body">
          <h5>Thông tin người nhận hàng</h5>
          <div className="form-group">
            <label htmlFor="inp-fullname">Họ và tên của bạn</label>
            <input
              type="text"
              className="form-control"
              id="inp-fullname"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inp-phone">Số điện thoại</label>
            <input
              type="tel"
              className="form-control"
              id="inp-phone"
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inp-phone">Email</label>
            <input
              type="tel"
              className="form-control"
              id="inp-phone"
              placeholder="Nhập email của bạn"
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 form-box">
        <div className="card card-body">
          <h5 className="mb-3">Thông tin đặt hàng</h5>
          <div className="form-group">
            <label htmlFor="inp-note">Ghi chú</label>
            <input
              type="text"
              className="form-control placeholder-text-grey-light placeholder-nomal"
              id="inp-note"
              placeholder="Nhập ghi chú cho đơn hàng"
            />
          </div>
          <ul className="list-unstyled mr-0 mb-3" id="delivery-time">
            <li className="border-bottom border-grey-lighter py-3">
              <div className="custom-control custom-radio org-custom-radio">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="time"
                  defaultValue="option1"
                  defaultChecked
                  id="option3"
                />
                <label className="custom-control-label" htmlFor="option3">
                  Đặt hàng ngay
                </label>
              </div>
            </li>
            <li className="border-bottom border-grey-lighter py-3">
              <div className="custom-control custom-radio org-custom-radio">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="time"
                  defaultValue="option1"
                  defaultChecked
                  id="option4"
                />
                <label className="custom-control-label" htmlFor="option4">
                  Đặt hàng sau
                </label>
              </div>
            </li>
          </ul>
          <select
            className="custom-select org-custom-select text-grey"
            name="hour"
          >
            <option value="null" selected>
              Chọn giờ giao hàng
            </option>
            <option value={1}>6h - 8h</option>
            <option value={1}>8h - 12h</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Info;
