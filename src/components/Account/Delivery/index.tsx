import Link from "next/link";
import React from "react";

function Delivery() {
  return (
    <div className="box-rewards address">
      <div className="title">
        <a href="./account-info.html">
          <img src="../assets/img/rewards/left-arrow.svg" alt="" />
        </a>
        Giao hàng tận nơi
      </div>
      <div className="item-container">
        <form action="#" className="mb-0 ">
          <div className="input-autocomplete" id="current-address">
            <div className="input-group input-group-coke">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập địa chỉ của bạn"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="icon-search" />
                </span>
              </div>
            </div>
            <div id="autocomplete-results" />
          </div>
        </form>
        <div className="list-address">
          <div className="address-title">
            Sổ địa chỉ của bạn
            <Link href={'/account/giao-hang-tan-noi/them-dia-chi-moi'}>
              <a className="address-btn">
                Thêm địa chỉ mới
              </a>
            </Link>
          </div>
          <div className="item">
            <div className="desktop-view">
              <div className="list-title list">
                <div className="title-item main">Công ty</div>
                <div className="title-item">Họ và tên</div>
                <div className="title-item">Số điện thoại</div>
                <div className="title-item">Địa chỉ</div>
              </div>
              <div className="list-content list">
                <div className="default flex-item">
                  <span>Mặc định</span>
                  <img src="../assets/img/rewards/pen.svg" alt="" />
                </div>
                <div className="title-item ">Thái Nguyễn Hợp</div>
                <div className="title-item">0836665555</div>
                <div className="title-item default-setting">
                  10 Đường số 10, Phường 10, Quận 10, TP. Hồ Chí Minh
                  <a href="" className="default-btn active">
                    Thiết lập mặc định
                  </a>
                </div>
              </div>
            </div>
            <div className="mobile-content">
              <div className="address">
                10 Đường số 10, Phường 10, Quận 10, TP. Hồ Chí Minh
              </div>
              <div className="user">Thái Nguyễn Hợp - 0836665555</div>
            </div>
          </div>
          <div className="item">
            <div className="desktop-view">
              <div className="list-title list">
                <div className="title-item main">Nhà riêng</div>
                <div className="title-item">Họ và tên</div>
                <div className="title-item">Số điện thoại</div>
                <div className="title-item">Địa chỉ</div>
              </div>
              <div className="list-content list">
                <div className="default">
                  <img src="../assets/img/rewards/pen.svg" alt="" />
                </div>
                <div className="title-item ">Bích</div>
                <div className="title-item">0838881101</div>
                <div className="title-item default-setting">
                  07 Phan Huy Ích, Phường 15, Quận Tân Bình, TP. Hồ Chí Minh
                  <a href="" className="default-btn">
                    Thiết lập mặc định
                  </a>
                </div>
              </div>
            </div>
            <div className="mobile-content">
              <div className="address">
                07 Phan Huy Ích, Phường 15, Quận Tân Bình, TP...
              </div>
              <div className="user">Bích - 0838881101</div>
            </div>
          </div>
          <div className="item">
            <div className="desktop-view">
              <div className="list-title list">
                <div className="title-item main">Công ty</div>
                <div className="title-item">Họ và tên</div>
                <div className="title-item">Số điện thoại</div>
                <div className="title-item">Địa chỉ</div>
              </div>
              <div className="list-content list">
                <div className="default">
                  <img src="../assets/img/rewards/pen.svg" alt="" />
                </div>
                <div className="title-item ">Thuỵ Anh</div>
                <div className="title-item">0837775555</div>
                <div className="title-item default-setting">
                  89 Nguyễn Đình Chiểu, Phường 6, Quận 3, TP. Hồ Chí Minh
                  <a href="" className="default-btn">
                    Thiết lập mặc định
                  </a>
                </div>
              </div>
            </div>
            <div className="mobile-content">
              <div className="address">
                89 Nguyễn Đình Chiểu, Phường 6, Quận 3, TP...
              </div>
              <div className="user">Thụy Anh - 0837775555</div>
            </div>
          </div>
        </div>
        <div className="list-address current-address">
          <div className="address-title">
            Địa chỉ đã nhập gần đây
            <a href="" className="address-btn clear-btn">
              Dọn dẹp
            </a>
          </div>
          <div className="item">
            <div className="desktop-view">
              <div className="list-title list">
                <div className="title-item main">371 Cộng Hoà</div>
              </div>
              <div className="list-content list">
                <div className="default flex-item">
                  <div>Phường 13, Quận Tân Bình, TPHCM</div>
                  <img src="../assets/img/rewards/pen.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="mobile-content">
              <div className="address">
                89 Nguyễn Đình Chiểu, Phường 6, Quận 3, TP...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Delivery;
