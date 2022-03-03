import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch , useSelector } from "react-redux";
import { getProductDetailAction } from "../../../hook/actions/products";
import { AppState } from "../../../hook/rootReducer";

function ProductModal({ isShow, closeModal }) {
    const [show, setShow] = useState<boolean>();
    const [quantity , setQuantity] = useState<number>(1)
    const [dataImages , setDataImages] = useState<any>([]);
    const router = useRouter();
    const dispactch = useDispatch();
    const {productDetailResponse}:any = useSelector((state :AppState) => state.products);
    const { ProductId } = router.query;
    useEffect(() => {
        dispactch(getProductDetailAction(ProductId));
        if(productDetailResponse){
            productDetailResponse.data.images.map((e: [string])=>{
                return setDataImages(e)
            });
        }
        setShow(isShow);
    }, [dispactch , getProductDetailAction, ProductId , productDetailResponse , isShow]);
    
    const close = () =>{
        closeModal();

        setTimeout(()=>{
            setQuantity(1);
        } , 200)
    };
    const plusQuantity = () => {
        setQuantity(quantity + 1)
    };
    const minusQuantity = () => {
        if(quantity <=1){
            setQuantity(1)
        }else{
            setQuantity(quantity - 1)
        }
    }
    return (
        <Modal size="xl" scrollable={true} backdrop='static' keyboard={false} show={show} centered dialogClassName="product org-modal">
            <a data-dismiss="modal" href="javascript:void(0);" onClick={() => close()}>
                <i className="icon-close" />
            </a>
            <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="modal-body-img">
                        <img className="desktop-image" src={dataImages.originUrl} alt='' />
                        <img className="mobile-image" src={dataImages.smallUrl} alt='' />
                    </div>
                    <div className="modal-body-ctx">
                        <div className="modal-information">
                            <h4>{productDetailResponse ? productDetailResponse.data.name : null}</h4>
                            <div className="more-less">{productDetailResponse ? productDetailResponse.data.name : null}</div>
                            <span>{productDetailResponse ? productDetailResponse.data.price.toLocaleString('vi-vn') : null} ₫</span>
                            <hr />
                        </div>
                        <div className="modal-body">
                            <p className="title">Chọn phần ăn kèm</p>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-1" defaultValue="thuc-an-kem1" defaultChecked />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-1">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-3.png" alt="">
                                          </div> */}
                                            <span>Bắp cải trộn - Vừa</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-2" defaultValue="thuc-an-kem2" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-2">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-3.png" alt="">
                                          </div> */}
                                            <span>Bắp cải trộn - Lớn (+10.000đ)</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-3" defaultValue="thuc-an-kem3" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-3">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-5.png" alt="">
                                          </div> */}
                                            <span>Khoai tây nghiền - Vừa</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-4" defaultValue="thuc-an-kem4" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-4">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-6.png" alt="">
                                          </div> */}
                                            <span>Khoai tây nghiền - Lớn (+10.000đ)</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-5" defaultValue="thuc-an-kem5" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-5">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-7.png" alt="">
                                          </div> */}
                                            <span>Khoai tây chiên - Vừa</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-6" defaultValue="thuc-an-kem6" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-6">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-8.png" alt="">
                                          </div> */}
                                            <span>Khoai tây chiên - Lớn (+10.000đ)</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="phan-an-kem" id="thuc-an-kem-7" defaultValue="thuc-an-kem7" />
                                        <label className="custom-control-label" htmlFor="thuc-an-kem-7">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image64-9.png" alt="">
                                          </div> */}
                                            <span>Cơm trắng</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <p className="title">Chọn thức uống</p>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-1" defaultValue="thuc-uong1" defaultChecked />
                                        <label className="custom-control-label" htmlFor="thuc-uong-1">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image62.png" alt="">
                                          </div> */}
                                            <span>Coca</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-2" defaultValue="thuc-uong2" />
                                        <label className="custom-control-label" htmlFor="thuc-uong-2">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image60.png" alt="">
                                          </div> */}
                                            <span>Sprite</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-3" defaultValue="thuc-uong3" />
                                        <label className="custom-control-label" htmlFor="thuc-uong-3">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image61.png" alt="">
                                          </div> */}
                                            <span>Fanta</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-4" defaultValue="thuc-uong4" />
                                        <label className="custom-control-label" htmlFor="thuc-uong-4">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image59.png" alt="">
                                          </div> */}
                                            <span>Dasani</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-5" defaultValue="thuc-uong5" />
                                        <label className="custom-control-label" htmlFor="thuc-uong-5">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image59-1.png" alt="">
                                          </div> */}
                                            <span>Milo</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio org-custom-radio">
                                        <input className="custom-control-input" type="radio" name="thuc-uong" id="thuc-uong-6" defaultValue="thuc-uong6" />
                                        <label className="custom-control-label" htmlFor="thuc-uong-6">
                                            {/* <div class="stack stack-horizontal">
                                              <img src="../assets/img/menu/detail-combo/image59-2.png" alt="">
                                          </div> */}
                                            <span>Sjora</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <div className="input-group input-group-number-picker">
                                <div className="input-group-prepend">
                                    <button className="btn btn-grey-lighter btn-minus" type="button" id="inp-order-count" onClick={()=> minusQuantity()}>
                                        <i className="icon-minus" />
                                    </button>
                                </div>
                                <input type="text" className="form-control input-count border-grey-lighter" aria-describedby="inp-order-count" value={quantity}/>
                                <div className="input-group-append">
                                    <button className="btn btn-grey-lighter btn-pluss" type="button" id="inp-order-count" onClick={()=> plusQuantity()}>
                                        <i className="icon-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="wrapper-btn-add">
                                <button className="btn-coke-add" id="addToCart">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default ProductModal;
