import React, { useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

function Cart(){
    if (typeof window !== 'undefined') {
        var inCart = localStorage.getItem('cart')
      }
  
    return(
       <main>
           {inCart ? <CartItem/>  : <CartEmpty/>}
       </main>
    )
}
export default Cart