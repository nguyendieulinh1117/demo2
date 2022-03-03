const newProductNeedAddToCart = `<li class="row no-gutters border-bottom border-grey-lighter pdt-24">
<div class="col-12">
    <div class="row">
        <div class="d-none d-lg-block box-item-cart mr-b-18">
            <img class="img-fluid rounded-xl" src="assets/img/cart-detail-6.png" alt="">
        </div>
        <div class="col-lg-8 pl-md-0">

            <!-- start promotion info -->
            <div class="row no-gutters mb-2">
                <div class="col-md-6">
                    <div class="d-flex flex-column">
                        <div class="product mb-3 mb-lg-0">
                            <p class="mb-2 font-size-16">Combo gà sốt kem tiêu - 1 người
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="d-flex justify-content-between align-items-center align-items-md-start flex-md-row-reverse">
                        <div
                            class="input-group input-group-number-picker input-group-responsive flex-nowrap float-md-right">
                            <div class="input-group-prepend">
                                <button class="btn btn-grey-lighter btn-minus disabled"
                                    type="button" id="inp-order-count">
                                    <i class="icon-minus"></i>
                                </button>
                            </div>
                            <input type="text"
                                class="form-control border-grey-lighter input-count"
                                value="1">
                            <div class="input-group-append">
                                <button class="btn btn-grey-lighter btn-pluss"
                                    type="button" id="inp-order-count">
                                    <i class="icon-plus"></i>
                                </button>
                            </div>
                        </div>

                        <a href="#"
                            class="small text-armchair d-md-none mr-auto ml-3">Xóa toàn
                            bộ combo</a>

                        <span class="font-600-16">79.000 ₫</span>
                    </div>
                </div>
            </div>
            <!-- start promotion info -->

            <div class="w-100 mr-minus-24">
                <div class="d-flex flex-column">
                    <div class="product font-size-16">
                        <ul class="list-unstyled nomal text-grey-dark list-sub-detail">
                            <li class="pd-bt-4">Pepper Mayo Chicken</li>
                            <li class="pd-bt-4">Khoai tây chiên - vừa</li>
                            <li class="pd-bt-4">Coca</li>
                        </ul>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="javascript:void(0)"
                            class="text-armchair font-size-12 pd-right-32"
                            data-toggle="modal" data-target="#product-edit-modal">Điều
                            chỉnh</a>
                        <a href="javascript:void(0)"
                            class="text-armchair font-size-12 ">Xóa</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</li>`;

function addToCart() {
    const newCartItemEl = $.parseHTML(newProductNeedAddToCart)[0];
    $('#listCart').append(newCartItemEl);
    $('#toastAddToCartOke').toast('show');
}

$(function () {

});