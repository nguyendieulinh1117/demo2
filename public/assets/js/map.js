var mapDesktop;
var map;

var myLatLng = { lat: 10.84365925128092, lng: 106.66461398345085 };
function initMapDesktop() {
    mapDesktop = new google.maps.Map(document.getElementById("map_canvas_desktop"), {
        center: myLatLng,
        zoom: 18,
    });

    let marker = new google.maps.Marker({
        position: myLatLng,
        map: mapDesktop,
        animation: google.maps.Animation.BOUNCE,
        icon: "assets/img/icon-marker-pin.png",
    });
}
function initMap() {
    map = new google.maps.Map(document.getElementById("map_canvas_mobile"), {
        center: myLatLng,
        zoom: 18,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_LEFT,
        },
    });
    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: "assets/img/icon-marker-pin.png",
    });
}

window.onload = function () {
    initMap();
    initMapDesktop();
};
// google.maps.event.addDomListener(window, 'load', initialize);
