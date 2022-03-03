import React from "react";
import Headers from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import { store } from "../../../hook/store";

function index({ children }:any) {
  const { pathname } = useRouter();
  return (
    <Provider store={store}>
      <Headers />
      {children}
      {pathname === "/product" || pathname === "/product/[ProductId]" ? null : <Footer />}
    </Provider>
  );
}
export default index;
