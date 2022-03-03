import React from "react";

function CartProgress(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 wrapper-cart" id="cart-view">
      <div>
        <div className="code-orders">Mã đơn hàng: 000001</div>
        <div className="text-currency text-coke">
          <span className="sum">Tổng cộng:</span>
          <span className="sum">1.490.000₫</span>
        </div>
        <div className="text-currency text-armchair-dark">
          <p className="mb-0">MAGIAMGIADACBIET</p>
          <p className="mb-0">-50.000₫</p>
        </div>
        <table className="table-card">
          <tbody>
            <tr className="cart-r-item">
              <td className="cart-r-item-amount">1</td>
              <td className="cart-r-item-symbol">x</td>
              <td className="cart-r-item-product">
                <p className="name-product">Combo gà sốt kem tiêu - 1 người</p>
                <ul className="desc-product">
                  <li>Pepper Mayo Chicken</li>
                  <li>Khoai tây chiên - vừa</li>
                  <li>Coca</li>
                </ul>
              </td>
              <td className="cart-r-item-price">
                <div className="flex-column-end">
                  <span className="price">79.000 ₫</span>
                  <span className="price-sale desktop">99.000 ₫</span>
                  <div className="avatar">
                    <div className="avatar-img">
                      <img src="../assets/img/process/product.png" alt="" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="cart-r-item">
              <td className="cart-r-item-amount">1</td>
              <td className="cart-r-item-symbol">x</td>
              <td className="cart-r-item-product">
                <p className="name-product">Combo gà sốt kem tiêu - 2 người</p>
                <ul className="desc-product">
                  <li>Pepper Mayo Chicken</li>
                  <li>Khoai tây chiên - vừa</li>
                  <li>Coca</li>
                </ul>
              </td>
              <td className="cart-r-item-price">
                <div className="flex-column-end">
                  <span className="price">299.000 ₫</span>
                  <span className="price-sale desktop">99.000 ₫</span>
                  <div className="avatar">
                    <div className="avatar-img">
                      <img src="../assets/img/process/product.png" alt="" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="cart-r-item">
              <td className="cart-r-item-amount">1</td>
              <td className="cart-r-item-symbol">x</td>
              <td className="cart-r-item-product">
                <p className="name-product">Combo gà sốt kem tiêu - 1 người</p>
                <ul className="desc-product">
                  <li>Pepper Mayo Chicken</li>
                  <li>Khoai tây chiên - vừa</li>
                  <li>Coca</li>
                </ul>
              </td>
              <td className="cart-r-item-price">
                <div className="flex-column-end">
                  <span className="price">79.000 ₫</span>
                  <span className="price-sale desktop">99.000 ₫</span>
                  <div className="avatar">
                    <div className="avatar-img">
                      <img src="../assets/img/process/product.png" alt="" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartProgress;
