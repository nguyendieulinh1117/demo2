import React from "react";
function DeliveryAddress(props) {
  return (
    <section className="h-100">
      <div className="container-fluid">
        <div className="row row-product-layout">
          <div className="col-12 col-product-layout-list py-0 py-md-5 mx-auto">
            <div className="container-md px-0 mr-lg-0">
              <div className="row">
                <div className="col-12">
                  <div className="wrapper">
                    <div className="nav-wrapper-simple mx-n3 mx-md-0 mb-3 mb-md-0" data-toggle="nav-simple">
                      <ul className="nav nav-transform org-nav-tabs-fit border-bottom border-grey-lightest" role="tablist" id="main-tabs-control">
                        <li className="nav-item" role="delivery">
                          <a className="nav-link active" id="tab-1" data-toggle="tab" data-target="#tab-ct-1" data-multiple="#tab-ct-1-else" role="tab" href="#tab-1">
                            Giao hàng tận nơi
                          </a>
                        </li>
                        <li className="nav-item" role="delivery">
                          <a className="nav-link" id="tab-2" data-toggle="tab" data-target="#tab-ct-2" data-multiple="#tab-ct-2-else" role="tab" href="#tab-2">
                            Mua mang về
                          </a>
                        </li>
                        <li className="nav-item" role="delivery">
                          <a className="nav-link" id="tab-3" data-toggle="tab" data-target="#tab-ct-3" data-multiple="#tab-ct-3-else" role="tab" href="#tab-3">
                            Đặt bàn trước
                          </a>
                        </li>
                      </ul>
                      <button className="nav-curr nav-curr-prev d-md-none">
                        <i className="icon-back"></i>
                      </button>
                      <button className="nav-curr nav-curr-next d-md-none">
                        <i className="icon-next"></i>
                      </button>
                    </div>
                    <div className="tab-content" id="as">
                      {/* <!-- start tab-1 --> */}
                      <div className="tab-pane active" id="tab-ct-1" role="tabpanel">
                        <div className="tab-pane-content">
                          <div className="org-maps mb-3" id="dtd-delivery-map">
                            <div className="org-maps-control">
                              <div className="btn-group btn-group-maps-setting d-none d-md-flex" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>

                              <div className="input-group input-group-maps-search mx-2">
                                <input type="text" className="form-control" placeholder="Nhập địa chỉ hiện tại của bạn" />
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    <i className="icon-search text-dark font-weight-bold"></i>
                                  </span>
                                </div>
                              </div>

                              <button className="btn btn-my-position">
                                <i className="icon-toggle-full-screen bigger"></i>
                              </button>
                            </div>
                            <div className="org-maps-layer d-md-none">
                              <div className="btn-group btn-group-maps-setting" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>
                            </div>
                            <div className="org-maps-zoom">
                              <div className="btn-group btn-group-vertical" role="group">
                                <button type="button" className="btn" id="maps-zoom-in">
                                  <i className="icon-plus"></i>
                                </button>
                                <button type="button" className="btn" id="maps-zoom-out">
                                  <i className="icon-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* <!-- start address label --> */}
                          <div className="wrapper">
                            <div className="d-flex align-items-center">
                              <span>Bạn đang chọn giao hàng đến địa chỉ:</span>
                              <a href="javascript:void(0);" className="text-coke small text-decoration-none d-none d-md-block ml-auto">
                                Thêm vào sổ địa chỉ
                              </a>
                            </div>
                            <a href="#" className="text-armchair-dark font-weight-bold mb-1 d-block" id="delivery-address-value">
                              371-373 Cộng Hòa, phường 13, quận Tân Bình
                            </a>
                            <a href="javascript:void(0);" className="text-coke small text-decoration-none ml-auto d-md-none float-right">
                              Thêm vào sổ địa chỉ
                            </a>
                          </div>
                          {/* <!-- end address label --> */}

                          <div className="justify-content-center py-4 d-none d-md-flex">
                            <button data-toggle="modal" data-target="#add-address-model" className="btn btn-coke px-md-9" id="btn-continute-to-by">
                              Giao hàng đến địa chỉ này
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- end tab-1 --> */}

                      {/* <!-- start tab-2 --> */}
                      <div className="tab-pane fade" id="tab-ct-2" role="tabpanel">
                        <div className="tab-pane-content">
                          <div className="org-maps mb-3" id="dtd-delivery-map-1">
                            <div className="org-maps-control">
                              <div className="btn-group btn-group-maps-setting d-none d-md-flex" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>

                              <div className="input-group input-group-maps-search mx-2">
                                <input type="text" className="form-control" placeholder="Nhập địa chỉ hiện tại của bạn" />
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    <i className="icon-search text-dark font-weight-bold"></i>
                                  </span>
                                </div>
                              </div>

                              <button className="btn btn-my-position">
                                <i className="icon-toggle-full-screen bigger"></i>
                              </button>
                            </div>
                            <div className="org-maps-layer d-md-none">
                              <div className="btn-group btn-group-maps-setting" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>
                            </div>
                            <div className="org-maps-zoom">
                              <div className="btn-group btn-group-vertical" role="group">
                                <button type="button" className="btn" id="maps-zoom-in">
                                  <i className="icon-plus"></i>
                                </button>
                                <button type="button" className="btn" id="maps-zoom-out">
                                  <i className="icon-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">Bạn sẽ đến nhận tại cửa hàng:</p>
                          <a href="#" className="text-armchair-dark font-weight-bold" id="delivery-address-value">
                            187 Hai Bà Trưng, District 3, Ho Chi Minh City, Vietnam
                          </a>
                          <div className="justify-content-center py-4 d-none d-md-flex">
                            <a href="home.html" className="btn btn-coke px-md-9" id="btn-continute-to-by">
                              Tiếp tục mua hàng
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- end tab-2 --> */}

                      {/* <!-- start tab-3 --> */}
                      <div className="tab-pane fade" id="tab-ct-3" role="tabpanel">
                        <div className="tab-pane-content">
                          <div className="org-maps mb-3" id="dtd-delivery-map-3">
                            <div className="org-maps-control">
                              <div className="btn-group btn-group-maps-setting d-none d-md-flex" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>

                              <div className="input-group input-group-maps-search mx-2">
                                <input type="text" className="form-control" placeholder="Nhập địa chỉ hiện tại của bạn" />
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    <i className="icon-search text-dark font-weight-bold"></i>
                                  </span>
                                </div>
                              </div>

                              <button className="btn btn-my-position">
                                <i className="icon-toggle-full-screen bigger"></i>
                              </button>
                            </div>
                            <div className="org-maps-layer d-md-none">
                              <div className="btn-group btn-group-maps-setting" role="group">
                                <button type="button" className="btn">
                                  Map
                                </button>
                                <button type="button" className="btn text-grey">
                                  Satellite
                                </button>
                              </div>
                            </div>
                            <div className="org-maps-zoom">
                              <div className="btn-group btn-group-vertical" role="group">
                                <button type="button" className="btn" id="maps-zoom-in">
                                  <i className="icon-plus"></i>
                                </button>
                                <button type="button" className="btn" id="maps-zoom-out">
                                  <i className="icon-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">Bạn sẽ đến nhận tại cửa hàng:</p>
                          <a href="#" className="text-armchair-dark font-weight-bold" id="delivery-address-value">
                            371-373 Cộng Hòa, phường 13, quận Tân Bình
                          </a>
                          <div className="justify-content-center py-4 d-none d-md-flex">
                            <a href="home.html" className="btn btn-coke px-md-9" id="btn-continute-to-by">
                              Tiếp tục mua hàng
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- end tab-3 --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-product-layout-cart py-0 py-md-5">
            <div className="tab-content" id="af">
              {/* <!-- start tab-1 --> */}
              <div className="tab-pane active" id="tab-ct-1-else" role="tabpanel">
                <div className="tab-pane-content">
                  <form action="get" target="/" className="pt-3 pt-md-0">
                    <p className="font-weight-bold mb-2">Sổ địa chỉ của bạn</p>
                    <ul className="list-unstyled mb-3" id="list-store">
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x border-armchair">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">
                                    Nhà riêng <span className="float-right text-success small">Mặc định</span>
                                  </p>
                                  <p className="mb-1 text-grey">371-373 Cộng Hòa,phường 13, quận Tân Bình</p>
                                  <div className="d-flex justify-content-start flex-wrap small">
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);">
                                      Điều chỉnh
                                    </a>
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);" data-toggle="modal" data-target="#confirm-delete-model">
                                      Xóa
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Nhà riêng 2</p>
                                  <p className="mb-1 text-grey">371-373 Cộng Hòa,phường 13, quận Tân Bình</p>
                                  <div className="d-flex justify-content-start flex-wrap small">
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);">
                                      Điều chỉnh
                                    </a>
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);" data-toggle="modal" data-target="#confirm-delete-model">
                                      Xóa
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Nhà riêng 2</p>
                                  <p className="mb-1 text-grey">371-373 Cộng Hòa,phường 13, quận Tân Bình</p>
                                  <div className="d-flex justify-content-start flex-wrap small">
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);">
                                      Điều chỉnh
                                    </a>
                                    <a className="text-coke text-decoration-none mr-2" href="javascript:void(0);" data-toggle="modal" data-target="#confirm-delete-model">
                                      Xóa
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <div className="py-4 d-md-none">
                      <button data-toggle="modal" data-target="#add-address-model" className="btn btn-coke w-100" id="btn-continute-to-by">
                        Giao hàng đến địa chỉ này
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- end tab-1 --> */}

              {/* <!-- start tab-2 --> */}
              <div className="tab-pane fade" id="tab-ct-2-else" role="tabpanel">
                <div className="tab-pane-content">
                  <form action="get" target="/" className="pt-3 pt-md-0">
                    <p className="font-weight-bold mb-2">Chọn cửa hàng theo khu vực</p>
                    <select className="custom-select org-custom-select text-grey mb-3" name="city" defaultValue={"null"}>
                      <option value="null">Chọn Tỉnh/Thành phố</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">Nghệ An</option>
                      <option value="3">TP Hồ Chí Minh</option>
                    </select>

                    <select className="custom-select org-custom-select text-grey mb-3" name="district" defaultValue={"null"}>
                      <option value="null">Chọn Quận/Huyện</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">Nghệ An</option>
                      <option value="3">TP Hồ Chí Minh</option>
                    </select>

                    <p className="font-weight-bold mb-2">Danh sách cửa hàng</p>
                    <ul className="list-unstyled" id="list-store">
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x border-armchair">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Cộng Hòa</p>
                                  <p className="mb-1 text-grey">371-373 Cộng Hòa,phường 13, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Lê Văn Sỹ</p>
                                  <p className="mb-1 text-grey">335A Lê Văn Sỹ, phường 1, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Phan Huy Ích</p>
                                  <p className="mb-1 text-grey">07 Phan Huy Ích, phường 15, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <p className="font-weight-bold mb-3">Thời gian giao hàng</p>
                    <ul className="list-unstyled ml-3 mb-4" id="delivery-time">
                      <li className="border-bottom border-grey-lighter py-3">
                        <div className="custom-control custom-radio org-custom-radio">
                          <input className="custom-control-input" type="radio" name="time" value="option1" defaultChecked id="option3" />
                          <label className="custom-control-label" htmlFor="option3">
                            Đặt hàng ngay
                          </label>
                        </div>
                      </li>
                      <li className="border-bottom border-grey-lighter py-3">
                        <div className="custom-control custom-radio org-custom-radio">
                          <input className="custom-control-input" type="radio" name="time" value="option1" defaultChecked id="option4" />
                          <label className="custom-control-label" htmlFor="option4">
                            Đặt hàng sau
                          </label>
                        </div>
                      </li>
                    </ul>

                    <div className="d-md-none">
                      <a href="home.html" className="btn btn-coke w-100" id="btn-continute-to-by">
                        Tiếp tục mua hàng
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- end tab-2 --> */}

              {/* <!-- start tab-3 --> */}
              <div className="tab-pane fade" id="tab-ct-3-else" role="tabpanel">
                <div className="tab-pane-content">
                  <form action="get" target="/" className="pt-3 pt-md-0">
                    <p className="font-weight-bold mb-2">Chọn cửa hàng theo khu vực</p>
                    <select className="custom-select org-custom-select text-grey mb-3" name="city" defaultValue={"null"}>
                      <option value="null">Chọn Tỉnh/Thành phố</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">Nghệ An</option>
                      <option value="3">TP Hồ Chí Minh</option>
                    </select>

                    <select className="custom-select org-custom-select text-grey mb-3" name="district" defaultValue={"null"}>
                      <option value="null">Chọn Quận/Huyện</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">Nghệ An</option>
                      <option value="3">TP Hồ Chí Minh</option>
                    </select>

                    <p className="font-weight-bold mb-2">Danh sách cửa hàng</p>
                    <ul className="list-unstyled mb-3" id="list-store">
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x border-armchair">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Cộng Hòa</p>
                                  <p className="mb-1 text-grey">371-373 Cộng Hòa,phường 13, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Lê Văn Sỹ</p>
                                  <p className="mb-1 text-grey">335A Lê Văn Sỹ, phường 1, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="card-wrapper mb-2">
                        <a href="javascript:void(0);" className="text-decoration-none text-reset">
                          <div className="card rounded-xl border-2x">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-start">
                                <div className="icon mr-2">
                                  <i className="icon-map-pin" style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className="content w-100 px-1">
                                  <p className="font-weight-bold mb-1">Domino Phan Huy Ích</p>
                                  <p className="mb-1 text-grey">07 Phan Huy Ích, phường 15, quận Tân Bình</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <p className="font-weight-bold mb-2">Thời gian</p>
                    <div className="form-row mb-3">
                      <div className="form-group col-6">
                        <select className="custom-select org-custom-select text-grey" name="hour" defaultValue={"null"}>
                          <option value="null">Giờ</option>
                          <option value="1">12h</option>
                          <option value="2">13h</option>
                          <option value="3">14h</option>
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <select className="custom-select org-custom-select text-grey" name="minute" defaultValue={"null"}>
                          <option value="null">Phút</option>
                          <option value="1">01</option>
                          <option value="2">02</option>
                          <option value="3">03</option>
                        </select>
                      </div>
                    </div>

                    <p className="font-weight-bold mb-2">Số người</p>
                    <select className="custom-select org-custom-select text-grey mb-4" name="hour" defaultValue={"null"}>
                      <option value="null">Chọn số người</option>
                      <option value="1">1 - 2 người</option>
                      <option value="2">2 - 4 người</option>
                      <option value="3">3 - 6 người</option>
                    </select>

                    <p className="font-weight-bold mb-2">Ghi chú</p>
                    <input type="text" className="form-control org-custom-control" placeholder="Nhập ghi chú cho cửa hàng" />

                    <div className="d-md-none py-4">
                      <a href="home.html" className="btn btn-coke w-100" id="btn-continute-to-by">
                        Tiếp tục mua hàng
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- end tab-3 --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DeliveryAddress;
