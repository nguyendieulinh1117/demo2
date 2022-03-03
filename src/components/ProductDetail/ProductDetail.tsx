import React , {useState , useEffect} from "react";
import ProductShipping from "../Product/ProductShipping";
import ProductFilter from "../Product/ProductFilter";
import ProductList from "../Product/ProductList";
import Cart from "../Product/Cart/Cart";
import ProductModal from "./Modal/ProductModal";

function ProductDetail() {
  const [showModal , setShowModal] = useState<boolean>(true);
  const toggleModal =()=> setShowModal(true);
  const closeModal =()=> setShowModal(false);
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
        <ProductModal isShow={showModal} closeModal={closeModal}/>
      </section>
    </main>
  );
}
export default ProductDetail;
