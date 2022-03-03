"use strict";
!(function () {
  $(function () {
    $(document).on("show.bs.modal", ".modal", function (event) {
      var zIndex = 1040 + 10 * $(".modal:visible").length;
      $(this).css("z-index", zIndex);
      setTimeout(function () {
        $(".modal-backdrop")
          .not(".modal-stack")
          .css("z-index", zIndex - 1)
          .addClass("modal-stack");
      }, 0);
    });
    $("#btnMenuWrap").on("click", function () {
      $(this).toggleClass("is-active");
      $($(this).data("target")).toggleClass("active");
    });
  });
})(),
  (function () {
    !!$.fn.slick &&
      $(".org-slider").slick({
        dots: false,
        centerMode: true,
        centerPadding: "12%",
        slidesToShow: 1,
        infinite: true,
        speed: 300,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              dots: true,
            },
          },
        ],
      });
  })(),
  (function () {
    const els = document.querySelectorAll('[data-provider="slimScroll"]'),
      defaultoptions = {
        color: "#BCC1CB",
        position: "right",
        opacity: 1,
        size: "8px",
        // wheelStep: 10
      };
    !!$.fn.slimScroll &&
      [].forEach.call(els, function (el) {
        typeof el != "undefined" &&
          (function (el) {
            var options = el.dataset.options;
            options = options ? JSON.parse(options) : {};
            $(el).slimScroll(Object.assign(options, defaultoptions));
          })(el);
      });
  })(),
  (function () {
    const els = document.querySelectorAll('[data-provider="PerfectScrollbar"]');
    typeof PerfectScrollbar != "undefined" &&
      [].forEach.call(els, function (el) {
        typeof el != "undefined" &&
          (function (el) {
            var options = el.dataset.options;
            options = options ? JSON.parse(options) : {};
            var ps = new PerfectScrollbar(el, options);
            console.log(ps);
          })(el);
      });
  })(),
  (function () {
    typeof H != "undefined" &&
      (window.$here = new H.service.Platform({
        apikey: "PZFcaraRI5xMlSPl6rERNCs0vz3WNyLuWY91GA3VS_I",
      }));
  })(),
  (function () {
    typeof ObbinJS != "undefined" && (window.$s = ObbinJS);
  })(),
  (function () {
    function getCurrent(items, classes = "active") {
      return items.toArray().findIndex(function (el) {
        return el.classList.contains(classes);
      });
    }

    function getActiveElement(items, action) {
      let currentPos = getCurrent(items),
        position = 0,
        virtualPos = 0;
      if (action === "next") {
        virtualPos = currentPos + 1;
        position = virtualPos >= items.length ? 0 : virtualPos;
      } else {
        virtualPos = currentPos - 1;
        position = virtualPos < 0 ? (position = items.length - 1) : virtualPos;
      }
      return items[position];
    }

    function stayActiveCenter(items) {
      const currentPos = getCurrent(items),
        arr = items.toArray();
      const current = arr.splice(currentPos, 1)[0];
      const centerPos = Math.floor(arr.length / 2);
      arr.splice(centerPos, 0, current);
      for (let index = 0; index < arr.length; index++) {
        let element = arr[index],
          parentElement = $(element).parent();
        parentElement.removeClass(function (index, css) {
          return (css.match(/\order-\S+/g) || []).join(" "); // removes anything that starts with "order-"
        });
        parentElement.addClass("order-" + index);
      }
    }

    $(function () {
      const els = document.querySelectorAll('[data-toggle="nav-simple"]');
      !!els.length &&
        [].forEach.call(els, function (el) {
          typeof el != "undefined" &&
            (function (el) {
              let ctx = $(el),
                btnNext = ctx.find(".nav-curr.nav-curr-next"),
                btnPrev = ctx.find(".nav-curr.nav-curr-prev");
              $(btnPrev).on("click", function (evt) {
                let items = ctx.find(".nav-link");
                let active = getActiveElement(items, "prev");
                items.removeClass("active");
                $(active).addClass("active");
                stayActiveCenter(items);
              });
              $(btnNext).on("click", function (evt) {
                let items = ctx.find(".nav-link");
                let active = getActiveElement(items, "next");
                items.removeClass("active");
                $(active).addClass("active");
                stayActiveCenter(items);
              });
            })(el);
        });
    });
  })(),
  (function () {
    const storiesRatio = [16, 9], //work on [4,3], [5,4], [3,2], [16,10], [16,9], [4,1]
      clientHeight = window.innerHeight,
      storiesPopupMarginY = 32,
      storiesPopupHeaderY = 92;

    const storiesPopupX = clientHeight - storiesPopupMarginY,
      actualImageXCanShow = storiesPopupX - storiesPopupHeaderY;

    const storiesPopupWidthRatio = Math.ceil(
      (actualImageXCanShow / storiesRatio[0]) * storiesRatio[1]
    );
    $(".org-stories-popup").each(function () {
      this.style.maxWidth = storiesPopupWidthRatio + "px";
      this.style.height = storiesPopupX + "px";
      $(this).find(".org-stories-popup-slider").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
      });
    });
  })(),
  (function () {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    function handleTabletChange(e) {
      // Check if the media query is true
      if (e.matches && $("#btnMenuWrap").hasClass("is-active")) {
        $("#btnMenuWrap").click();
      }
    }
    mediaQuery.addListener(handleTabletChange);
  })(),
  (function () {
    // min-width: 992 this is break point of lg
    if (window.innerWidth > 992) {
      return;
    }

    const imageMinY = 100,
      imageMaxY = 200,
      lagValue = 4;

    const modalProducts = document.querySelectorAll(".org-modal.product");
    for (let index = 0; index < modalProducts.length; index++) {
      const modal = modalProducts[index];
      const modalImage = modal.querySelector(".modal-body-img");
      const modalBodyCtx = modal.querySelector(".modal-body-ctx");
      const modalBodyScollview = modal.querySelector(".modal-body");
      const moreLessTextElement = modal.querySelector(
        ".modal-information .more-less"
      );

      // default status of readmore is expanded == true
      var isReadMoreExpand = true;
      // init current image height. value change on scroll modal body
      var currentImageHeight = imageMaxY;

      function validateModalImageHeight(height) {
        // value safe from imageMinY to imageMaxY
        return height >= imageMinY && height <= imageMaxY;
      }

      function updateModalImageHeight(height) {
        if (!validateModalImageHeight(height)) {
          return;
        }
        modalImage.style.height = height;
        modalBodyCtx.style.height = `calc(100% - ${height}px)`;
        currentImageHeight = height;
      }
      function handlerReadMoreDescription(toggle) {
        var toggleButton;
        if (isReadMoreExpand && !toggle) {
          toggleButton = modal.querySelector(
            ".modal-information .more-less-less"
          );
        } else if (!isReadMoreExpand && toggle) {
          toggleButton = modal.querySelector(
            ".modal-information .more-less-more"
          );
        }
        !!toggleButton && toggleButton.click();
      }

      function initReadMoreDescription(selector) {
        setTimeout(() => {
          !!$.fn.readmore &&
            $(selector).readmore({
              speed: 1000,
              startOpen: isReadMoreExpand,
              collapsedHeight: 36,
              moreLink:
                '<a class="more-less-more nomal text-armchair" href="#">Xem thêm</a>',
              lessLink: '<a class="more-less-less d-none" href="#"></a>',
              beforeToggle: function () {
                isReadMoreExpand = !isReadMoreExpand;
              },
            });
        }, 1000);
      }

      // init default image size
      updateModalImageHeight(currentImageHeight);
      initReadMoreDescription(moreLessTextElement);

      var lastScrollTopValue = 0;
      modalBodyScollview.addEventListener("scroll", function (e) {
        const scrollTopValue = e.target.scrollTop;

        if (scrollTopValue > lastScrollTopValue) {
          // scroll to bottom
          if (scrollTopValue <= imageMaxY) {
            updateModalImageHeight(currentImageHeight - lagValue);
            handlerReadMoreDescription(false);
          }
        } else {
          // scroll to top
          updateModalImageHeight(currentImageHeight + lagValue);
          handlerReadMoreDescription(true);
        }

        lastScrollTopValue = scrollTopValue;
      });
    }
  })();

$(document).ready(function () {
  if ($(".store-slider").length > 0) {
    $(".store-slider").slick({
      // dots: true,
      centerMode: true,
      slidesToShow: 6,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
          },
        },
      ],
    });
  }
});
// $(document).ready(function () {
//   if ($(".reorder-slider").length > 0) {
//     $(".reorder-slider").slick({
//       // dots: true,
//       centerMode: true,
//       slidesToShow: 2,
//       infinite: true,
//       arrows: false,
//       speed: 300,
//     //   variableWidth: true,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerMode: false,
//             infinite: true,
//           },
//         },
//         {
//           breakpoint: 400,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerMode: false,
//             infinite: true,
//           },
//         },
//       ],
//     });
//   }
// });
if ($(".org-slider-mobile").length > 0) {
  $(".org-slider-mobile").slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  });
}

// Tab
// const tabs = document.querySelectorAll("[data-tab-click]");
// const tabContents = document.querySelectorAll("[data-tab-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const click = document.querySelector(tab.dataset.tabClick);
//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");
//     click.classList.add("active");
//   });
// });
