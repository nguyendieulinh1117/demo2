import React from "react";

function Auth() {
  return (
    <section class="pb-md-8 bg-grey-lightest product-home-reorder" id="pizza">
      <div class="org-product container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="title-best-seller">
              <h4 class="main-title">Reorder</h4>
            </div>
          </div>
        </div>
        <div class="form-register">
          <div class="tabs">
            <input
              type="radio"
              class="tabs__radio"
              name="tabs-bar"
              id="tab1"
              checked
            />
            <label for="tab1" class="tabs__label">
              Đăng nhập
            </label>
            <div class="tabs__content">
              <form action="" class="form-login">
                <div class="form-group">
                  <div class="form-label">Số điện thoại</div>
                  <div class="form-input">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label">Mật khẩu</div>
                  <div class="form-input">
                    <input type="text" placeholder="Nhập email của bạn" />
                  </div>
                </div>
                <div class="btn-forget-pass">Quên mật khẩu?</div>
                <div class="wrapper-btn-login">
                  <a href="index.html" class="btn-login">
                    Đăng nhập
                  </a>
                  <a href="index.html" class="btn-login login-google">
                    <img src="../assets/img/icon/google.svg" alt="icon" />
                    Đăng nhập bằng Google
                  </a>
                  <a href="index.html" class="btn-login login-facebook">
                    <img src="../assets/img/icon/facebook.svg" alt="icon" />
                    Đăng nhập bằng Facebook
                  </a>
                </div>
              </form>
            </div>

            <input type="radio" class="tabs__radio" name="tabs-bar" id="tab2" />
            <label for="tab2" class="tabs__label">
              Tạo tài khoản
            </label>
            <div class="tabs__content">
              <form action="" class="form-login">
                <div class="form-group">
                  <div class="form-label">Họ và tên của bạn</div>
                  <div class="form-input">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label">Số điện thoại</div>
                  <div class="form-input">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label">Mật khẩu</div>
                  <div class="form-input">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-label">Xác nhận mật khẩu</div>
                  <div class="form-input">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div class="wrapper-btn-login btn-register">
                  <a href="index.html" class="btn-login">
                    Đăng nhập
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
