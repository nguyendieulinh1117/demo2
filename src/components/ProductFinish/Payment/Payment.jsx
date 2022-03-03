import React from "react";

function Payment() {
  return (
    <div className="row payment-method">
      <div className="card card-body">
        <h5>Phương thức thanh toán</h5>
        <ul className="payment show-desktop">
          <div className="row">
            <div className="col-6">
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-1"
                    defaultValue={1}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-1"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/atm.png" alt />
                    </div>
                    <span>ATM</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-2"
                    defaultValue={2}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-2"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/visa.png" alt />
                    </div>
                    <span>Thẻ tín dụng / Ghi nợ</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-3"
                    defaultValue={3}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-3"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/momo.png" alt />
                    </div>
                    <span>Momo</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-4"
                    defaultValue={4}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-4"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/zalo.png" alt />
                    </div>
                    <span>ZaloPay</span>
                  </label>
                </div>
              </li>
            </div>
            <div className="col-6">
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-5"
                    defaultValue={5}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-5"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/moca.png" alt />
                    </div>
                    <span>MocaPay</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-6"
                    defaultValue={6}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-6"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/airpay.png" alt />
                    </div>
                    <span>AirPay</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-7"
                    defaultValue={7}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-7"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/cash.png" alt />
                    </div>
                    <span>Tiền mặt</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-8"
                    defaultValue={8}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-8"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/Union.png" alt />
                    </div>
                    <span>Trừ điểm thưởng</span>
                  </label>
                </div>
              </li>
            </div>
          </div>
        </ul>
        <ul className="payment show-mobile">
          <div className="row">
            <div className="col-12">
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-1"
                    defaultValue={1}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-1"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/cash.png" alt />
                    </div>
                    <span>Thanh toán bằng tiền mặt</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-2"
                    defaultValue={2}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-2"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/atm.png" alt />
                    </div>
                    <span>Thanh toán bằng thẻ ATM</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-3"
                    defaultValue={3}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-3"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/momo.png" alt />
                    </div>
                    <span>Thanh toán bằng Momo</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-radio org-custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="payment_method"
                    id="rdo-method-4"
                    defaultValue={4}
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="rdo-method-4"
                  >
                    <div className="payment-img">
                      <img src="../assets/img/payment/zalo.png" alt />
                    </div>
                    <span>Thanh toán bằng Zalopay</span>
                  </label>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Payment;
