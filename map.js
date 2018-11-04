




function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(28.501470,77.099060); 
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: HOST_URL+"ecom-assets/uploads/2015/08/map-marker.png"
  });
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"<span style='font-size:15px;'>Ecom Express Pvt. Ltd.<br/>10th Floor, Ambience Tower II,<br/>Ambience Island, Gurugram,<br/>Haryana – 122002 (India)</span>"
    });
  infowindow.open(map,marker);
  });
}
