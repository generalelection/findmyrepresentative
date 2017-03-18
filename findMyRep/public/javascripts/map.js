



var myMap= L.map('mapid').setView([37.0902,-95.7129],4);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'nathaniharris.0hge5l9n',
    accessToken: 'pk.eyJ1IjoibmF0aGFuaWhhcnJpcyIsImEiOiJjaXExZjJ2cmQwMHk3Zmlubmw3dmN5ZDUyIn0.suHGEfPnuo1BDAz8Si08fQ'
}).addTo(myMap);

