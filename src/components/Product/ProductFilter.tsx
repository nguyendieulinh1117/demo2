import React, { useState } from "react";
import Slider from "react-slick";

const settingProductFilter = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      //   arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      //   arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      //   arrows: false,
      }
    },
  ]

};

function ProductFilter() {
  return (
    <div className="product-filter">
      <Slider className="slick-filter" {...settingProductFilter}>
        <a href="product-category-1.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/khuyen-mai.svg"
              alt=""
            />
          </div>
          <span>Khuyến mãi</span>
        </a>
        <a href="product-listing.html" className="item-filter main">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/tat-ca.svg"
              alt=""
            />
          </div>
          <span>Tất cả</span>
        </a>
        <a href="product-category-2.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/mon-moi.svg"
              alt=""
            />
          </div>
          <span>Món mới</span>
        </a>
        <a href="product-category-3.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/ga-gion.svg"
              alt=""
            />
          </div>
          <span>Gà giòn</span>
        </a>
        <a href="product-category-4.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/ga-khong-xuong.svg"
              alt=""
            />
          </div>
          <span>Gà không xương</span>
        </a>
        <a href="product-category-5.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/mi-y-va-com.svg"
              alt=""
            />
          </div>
          <span>Mì ý và cơm</span>
        </a>
        <a href="product-category-6.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/mon-an-kem.svg"
              alt=""
            />
          </div>
          <span>Món ăn kèm</span>
        </a>
        <a href="product-category-7.html" className="item-filter">
          <div className="icon">
            <img
              src="../assets/img/products/product-filter-icon/thuc-uong.svg"
              alt=""
            />
          </div>
          <span>Thức uống</span>
        </a>
      </Slider>
    </div>
  );
}
export default ProductFilter;
