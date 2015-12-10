var myLatlng = new google.maps.LatLng(-34.397, 150.644);

var mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);