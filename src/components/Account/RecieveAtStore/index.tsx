import Link from "next/link";
import React from "react";
import Map from "./map";
function Recieve() {
  return (
    <div className="box-rewards recieve">
      <div className="title">
        <div className="box-title">
          <a href="./account-info.html">
            <img src="../assets/img/rewards/left-arrow.svg" alt="" />
          </a>
          <span>Đặt đến lấy</span>
        </div>
        <div className="display-map">Tìm trên bản đồ</div>
      </div>
      <div className="item-container">
        <div className="item-box">
          <div className="box-address">
            <div className="address-title">
              Vị trí hiện tại của bạn
              <a href="">Thay đổi</a>
            </div>
            <div className="address">
              10 Đường số 10, Phường 10, Quận 10, TP. Hồ Chí Minh
            </div>
          </div>
          <div className="box-item">
            <div className="address-title">CHUỖI CỬA HÀNG POPEYES</div>
            <div className="list-item">
              <div className="item">
                <div className="item-content">
                  <div className="name">POPEYES NGUYỄN VĂN QUÁ</div>
                  <div className="bar" />
                  <div className="content">Giờ mở cửa: 10:00 - 22:00</div>
                  <div className="content">
                    {" "}
                    Địa chỉ: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà
                    Đông
                  </div>
                  <div className="store-position">
                    Cách bạn 1,8 km
                    <span>Gần nhất</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="name">POPEYES GÒ DẦU</div>
                  <div className="bar" />
                  <div className="content">Giờ mở cửa: 10:00 - 22:00</div>
                  <div className="content">
                    {" "}
                    Địa chỉ: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà
                    Đông
                  </div>
                  <div className="store-position">Cách bạn 1,8 km</div>
                </div>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="name">POPEYES THỐNG NHẤT</div>
                  <div className="bar" />
                  <div className="content">Giờ mở cửa: 10:00 - 22:00</div>
                  <div className="content">
                  Địa chỉ: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà
                    Đông
                  </div>
                  <div className="store-position">Cách bạn 1,8 km</div>
                </div>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="name">POPEYES THẢO ĐIỀN</div>
                  <div className="bar" />
                  <div className="content">Giờ mở cửa: 10:00 - 22:00</div>
                  <div className="content">
                    {" "}
                    Địa chỉ: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà
                    Đông
                  </div>
                  <div className="store-position">Cách bạn 1,8 km</div>
                </div>
              </div>
            </div>
            <div className="address-title small-title">
              Không tìm thấy cửa hàng? Đặt Giao tận nơi để shipper giao cho bạn
              nhé!
              <Link href={'/account/giao-hang-tan-noi'}>
                <a href="">Đổi sang giao hàng tận nơi</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="address-title">
            <span>Tìm trên bản đồ</span>
            <div className="select-list">
              <div className="box-select">
                <select name="" id="">
                  <option value="">Tỉnh/Thành phố</option>
                </select>
                <img src="../assets/img/rewards/select.svg" alt="" />
              </div>
              <div className="box-select">
                <select name="" id="">
                  <option value="">Quận/Huyện</option>
                </select>
                <img src="../assets/img/rewards/select.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="map-contain">
            <Map />
            <div className="map-control">
              <div className="d-flex">
                <input
                  className="form-control google-search-input d-inline-block search-box-address"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                />
                <div className="input-group-append">
                  <span className="input-group-text btn-address-disable">
                    <i className="icon-long-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recieve;
