var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Brampton,on&appid=14db702f88e90f31bf198ff9780b6178", true);
xhr.onreadystatechange = function() {
  alert(xhr.readyState);
  if (xhr.readyState == 4) {
    alert(xhr.responseText);
    var resp = JSON.parse(xhr.responseText);
    alert(resp.weather[0].main);
  }
}
xhr.send();
