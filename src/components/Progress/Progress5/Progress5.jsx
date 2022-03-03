import React from "react";
import Cart from "../Cart/Cart";

function Progress5(props) {
  return (
    <div className="bg-cover--black-zone bg-img-sm-none">
      <section className="process-page">
        <div className="container-fluid mb-0">
          <div className="row">
            {/* <!-- start viewzone --> */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="content-process">
                <div className="card-body">
                  <div className="row">
                    <div className="img-process">
                      <img
                        id="progress-img"
                        className="img-fluid"
                        src="../assets/img/progress-5.png"
                        alt
                      />
                    </div>
                    <div className="col-md-12 col-lg-7">
                      <div className="info-process">
                        <h4 className="progress-title" id="progress-title">
                          Giao hàng thành công
                        </h4>
                        <div className="progress-wrapper-block-right">
                          <p className="progress-description">
                            Nguyên vật liệu tươi ngon đang được chuẩn bị tươm
                            tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn.
                            Bạn kiên nhẫn chờ nhé ;)
                          </p>
                          <div>
                            <ul className="org-progress" id="progress-bar">
                              <li className="org-progress-node">Chuẩn bị</li>
                              <li className="org-progress-node">Nướng bánh</li>
                              <li className="org-progress-node">Đóng gói</li>
                              <li className="org-progress-node">Giao hàng</li>
                              <li className="org-progress-node active">
                                Ăn thôi!
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- end viewzone --> */}

            {/* <!-- start cart --> */}
            <Cart />
            {/* <!-- end cart --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Progress5;
