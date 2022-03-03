function initProductSuggetion() {
    $('.org-product-suggestion').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow : '<button class="slick-prev" style="font-size: 16px; before:none"><i class="icon-back text-dark"></i></button>',
        nextArrow : '<button class="slick-next" style="font-size: 16px; before:none"><i class="icon-next text-dark"></i></button>'
    });
}

$(function () {
    initProductSuggetion();
})