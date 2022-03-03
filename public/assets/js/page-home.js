function getSearchService() {
    const platform = window.$here || {};
    return platform.getSearchService();
}

function renderAddressItem(el, data) {
    return [
        el('i', { attrs: { class: 'icon-map-pin bigger mr-1' } }),
        data.address.street,
        el('span', {
            attrs: { class: 'small text-grey' },
            children: [
                ' District ', data.address.city, ', ', data.address.county, ', ',
                data.address.countryName
            ]
        })
    ]
}

function renderAddressList(el, data) {
    const refer = $s.get('tab.current');
    if (!data.length) {
        return []
    } else return data.map(re => el('li', {
        children: [el('a', {
            attrs: {
                href: `delivery-address.html?place=${re.id}&ref=${refer}`,
                class: 'text-dark'
            },
            children: renderAddressItem(el, re)
        })]
    }));
}

function initHelloBarSlickSlider() {
    // hellobar
    $('#hellobar').slick({
        infinite: true,
        dots: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // adaptiveHeight: true
    });
    // var maxHeight = -1;
    // $('#hellobar .slick-slide').each(function () {
    //     if ($(this).height() > maxHeight) {
    //         maxHeight = $(this).height();
    //     }
    // });
    // $('#hellobar .slick-slide').each(function () {
    //     if ($(this).height() < maxHeight) {
    //         $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0');
    //     }
    // });
}

$(function () {
    const $s = window.$s;
    const $search = getSearchService();
    // init object events
    $s.set('tab.current', 'tab-1');

    // $s.set('hideButtonGTA', false);
    // $s.watch('hideButtonGTA', function (value) {
    //     if (value) $('.btn-cta-order').hide('fade');
    // })
    // $(document).on('scroll', function () {
    //     if (!$s.get('hideButtonGTA')) $s.set('hideButtonGTA', true);
    // });

    $s.set('address.results', []);
    $s.validators('address.results', [v => v instanceof Array]);
    $s.liveDOM('address.results', '#autocomplete-results', function (context, el) {
        const results = context.newValue;
        const hasResults = !!results.length;
        return el('div', {
            attrs: {
                class: ['input-autocomplete-results', hasResults ? 'show' : 'fade'],
                id: 'autocomplete-results'
            },
            children: [el('ul', { children: renderAddressList(el, results) })]
        });
    });

    $s.set('address.input', "");
    $s.validators('address.input', [v => typeof v === 'string']);
    $s.bind('address.input', '#current-address input', null, 'keyup');
    $s.watch('address.input', function (value) {
        $search.geocode({ q: value }, (result) => {
            // Add a marker for each location found
            let address = result.items.map(item => ({
                address: item.address,
                id: item.id
            }));
            $s.set('address.results', address || []);
        });
    }, 500 /* delay 500ms */);

    $('.nav-item[role="presentation"]').on('click', function (evt) {
        $s.set('tab.current', evt.target.id);
    });

    initHelloBarSlickSlider();
})