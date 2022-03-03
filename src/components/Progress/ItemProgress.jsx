import React from "react";

function ItemProgress({ onclickUpdate, index }) {
  const DATA_PROCESS = [
    {
      id: 0,
      process: "Chuẩn bị",
      isActive: true,
      status: "Đang chuẩn bị",
      description:
        "Nguyên vật liệu tươi ngon đang được chuẩn bị tươm tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn. Bạn kiên nhẫn chờ nhé :)",
      image: "../assets/img/progress-1.png",
    },
    {
      id: 1,
      process: "Chế biến",
      isActive: false,
      status: "Đang chế biến",
      description:
        "Nguyên vật liệu tươi ngon đang được chuẩn bị tươm tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn. Bạn kiên nhẫn chờ nhé :)",
      image: "../assets/img/progress-1.png",
    },
    {
      id: 2,
      process: "Đóng gói",
      isActive: false,
      status: "Đang đóng gói",
      description:
        "Nguyên vật liệu tươi ngon đang được chuẩn bị tươm tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn. Bạn kiên nhẫn chờ nhé :)",
      image: "../assets/img/progress-1.png",
    },
    {
      id: 3,
      process: "Giao hàng",
      isActive: false,
      status: "Đang giao hàng",
      description:
        "Nguyên vật liệu tươi ngon đang được chuẩn bị tươm tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn. Bạn kiên nhẫn chờ nhé :)",
      image: "../assets/img/progress-1.png",
    },
    {
      id: 4,
      process: "Ăn thôi",
      isActive: false,
      status: "Giao hàng thành công",
      description:
        "Nguyên vật liệu tươi ngon đang được chuẩn bị tươm tất, chuẩn bị những món ăn tuyệt hảo dành cho bạn. Bạn kiên nhẫn chờ nhé :)",
      image: "../assets/img/progress-1.png",
    },
  ];
  return (
    <div className="col-12 col-md-8 col-lg-9">
      <div className="content-process">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-lg-5">
              <div className="img-process">
                <img
                  id="progress-img"
                  className="img-fluid"
                  src={DATA_PROCESS[index].image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="info-process">
                <h4 className="progress-title" id="progress-title">
                  {DATA_PROCESS[index].status}
                </h4>
                <div className="progress-wrapper-block-right">
                  <p className="progress-description">
                    {DATA_PROCESS[index].description}
                  </p>
                  <div>
                    <ul className="org-progress" id="progress-bar">
                    <li className={`org-progress-node ${index === 0 ? 'active' : ''}`}>{DATA_PROCESS[0].process}</li>
                    <li className={`org-progress-node ${index === 1 ? 'active' : ''}`}>{DATA_PROCESS[1].process}</li>
                    <li className={`org-progress-node ${index === 2 ? 'active' : ''}`}>{DATA_PROCESS[2].process}</li>
                    <li className={`org-progress-node ${index === 3 ? 'active' : ''}`}>{DATA_PROCESS[3].process}</li>
                    <li className={`org-progress-node ${index === 4 ? 'active' : ''}`}>{DATA_PROCESS[4].process}</li>
                    </ul>
                    <div className="d-flex">
                      <a
                        onClick={onclickUpdate}
                        className="btn-update"
                      >
                        Cập nhật
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProgress;
