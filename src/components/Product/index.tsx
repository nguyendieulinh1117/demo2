import React , {useState} from "react";
import ProductShipping from "./ProductShipping";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import Cart from "./Cart/Cart";
function Product() {
  const [showModal , setShowModal] = useState<boolean>(true);
  const toggleModal =()=> setShowModal(true);

  return (
    <main role="main">
      <section className="product-listing">
        <div className="row row-product-layout">
          <div className="col-12 col-product-layout-list">
            <ProductShipping />
            <div
              className="row cart-product-view"
              data-provider="PerfectScrollbar"
            >
              <ProductFilter />
              <ProductList toggleModal={toggleModal}/>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </main>
  );
}
export default Product;
