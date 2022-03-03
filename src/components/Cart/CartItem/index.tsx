import React from "react";
import Payment from "./Payment";
import SuggestItem from "./SuggestItem";
import UserCart from "./UserCart";

function CartItem() {
  return (
    <main role="main">
      <section className="cart">
        <div className="cart-container">
          <div className="item-wrap">
            <UserCart/>
            <SuggestItem/>
          </div>
          <Payment/>
        </div>
      </section>
    </main>
  );
}
export default CartItem;
