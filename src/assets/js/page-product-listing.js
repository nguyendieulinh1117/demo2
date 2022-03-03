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
    $('#addToCart').on('click', function () {
        $('#productDetailModal').modal('hide');
        // $('#cart').removeClass('bg-armchair-lightest').addClass('bg-white');
        $('#cart').find('#cartEmpty').addClass('d-none');
        $('#cart').find('#cartOrder').removeClass('d-none');
        initProductSuggetion();
    })
    $('#addCoupon').on('click', function () {
        $('#couponModal').modal('show');
    });
    $('#applyCoupon').on('click', function () {
        $('#couponModal').modal('hide');
        $('#listCoupon').removeClass('d-none');
        $('#removeCoupon').removeClass('d-none');
    });
    $('#productDetailModal').modal('show');
})

$('.slick-filter').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
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
  
  })