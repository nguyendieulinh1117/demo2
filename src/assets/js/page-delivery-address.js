function getMapLayers() {
    const platform = window.$here || {};
    return platform.createDefaultLayers();
}

function geocodingReverse(id, callback) {
    const s = window.$here.getSearchService();
    s.lookup({ id: id }, callback);
}

function initialMaps(options) {
    // Instantiate the map:
    const mapLayers = getMapLayers();
    var map = new H.Map(
        document.getElementById('dtd-delivery-map'),
        mapLayers.vector.normal.map, options);
    // Create the default UI:
    return {
        map: map,
        ui: H.ui.UI.createDefault(map, mapLayers)
    };
}

function getPlaceId(callback) {
    const params = new URLSearchParams(window.location.search);
    var placeId = params.get('place') || "here:af:streetsection:OUBkcJnkPlHuuBShdSEp5A:CggIBCCYn4zkAhABGgIyMyhk";
    geocodingReverse(placeId, callback);
}

function addMarkerToMap(position, mapUI) {
    var positionMarker = new H.map.Marker(position, {
        icon: new H.map.Icon('assets/img/icon/google-maps-pin.svg')
    });
    mapUI.addObject(positionMarker);
}

function zoomMaps(zoom, value = 2) {
    const maps = window.$s.get('maps');
    var currentZoomValue = maps.map.getZoom();
    if (zoom == 'in') {
        maps.map.setZoom(currentZoomValue + value, true);
    } else {
        maps.map.setZoom(currentZoomValue - value, true);
    }
}

getPlaceId(function (obj) {
    $s.set('delivery.address', obj)
});

function showTabTogether(navivationId) {
    const navivationItem = $(navivationId);
    const target = navivationItem.data('multiple');
    if (typeof target != 'undefined') {
        let anotherTab = $(target);
        anotherTab.parent('.tab-content').find('.tab-pane.active').removeClass('active');
        anotherTab.tab('show');
    }
    navivationItem.tab('show');
}

function initital(params) {
    const designateTab = params.get('ref') || 'tab-1';
    showTabTogether('#' + designateTab);
    window.$s.set('tab.current', designateTab);
}

$(function () {
    const params = new URLSearchParams(window.location.search);
    const $s = window.$s;

    // init object events
    $s.set('map', { inspect: 'tab-1', maps: {} });
    $s.set('tab.current', 'tab-1');

    $s.validators('map', [v => v instanceof Object, v => v != null]);
    $s.validators('tab.current', [v => ['tab-1', 'tab-2', 'tab-3'].includes(v)]);

    $s.watch('map', function (map) {
        const instance = map.maps[map.inspect];
        var mapSettings = instance.ui.getControl('mapsettings');
        var scalebar = instance.ui.getControl('scalebar');
        var zoom = instance.ui.getControl('zoom');
        mapSettings.setVisibility(false);
        scalebar.setVisibility(false);
        zoom.setVisibility(false);
    });

    $s.watch('tab.current', function (tab) {
        const map = $s.get('map');
        if (tab === 'tab-1') {
            getPlaceId(function (obj) {
                map.inspect = tab;
                map.maps[map.inspect] = initialMaps({ zoom: 17, center: obj.position, });
                addMarkerToMap(obj.position, map.maps[map.inspect].map);
                $s.set('map', map);
            });
        }
    })

    $('#main-tabs-control .nav-link').on('click', function (evt) {
        showTabTogether(evt.target);
    });

    initital(params);
})