var x = document.getElementById("demo");
function getPosition (){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude.toFixed(2);
      var longitude = position.coords.longitude.toFixed(2);

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=061f24cf3cde2f60644a8240302983f2&units=metric"
      }).then(function(data) {
      x.innerHTML = latitude;
      var wetherData = data;
      // x.innerHTML = wetherData;
      $("#demo").html('<h2>Location: ' + wetherData.name + '</h2>' +
      '<br>' +
      '<h2>Temperature: ' + Math.round(wetherData.main.temp) + " &deg;" + "C" + '</h2>');
      });
    });
  } else {
      alert("Geolocation API не поддерживается в вашем браузере");
  }
}

$(document).ready(function() {
  getPosition();
});
