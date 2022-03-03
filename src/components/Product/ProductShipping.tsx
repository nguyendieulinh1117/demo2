import React from "react";

function ProductShipping() {
  return (
    <div className="row product-shipping">
      <div className="org-search">
        <div className="nav-wrapper-simple" data-toggle="nav-simple">
          <ul
            className="nav nav-transform overflow-sm-hidden overflow-md-visible"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="tab-1"
                data-toggle="tab"
                href="#tab-ct-1"
                role="tab"
                aria-controls="tab-ct-1"
                aria-selected="true"
              >
                Giao hàng tận nơi
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab-2"
                data-toggle="tab"
                href="#tab-ct-2"
                role="tab"
                aria-controls="tab-ct-2"
                aria-selected="false"
              >
                Mua mang về
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="tab-ct-1"
            role="tabpanel"
            aria-labelledby="tab-1"
          >
            <div className="tab-pane-content">
              <form action="#">
                <div className="input-autocomplete" id="current-address">
                  <div className="input-group input-group-coke input-autocomplete-field">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập địa chỉ nhận hàng"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-orange">
                        <i
                          className="icon-search text-white"
                          style={{ fontSize: 24 }}
                        />
                      </span>
                    </div>
                  </div>
                  <div id="autocomplete-results" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductShipping;
