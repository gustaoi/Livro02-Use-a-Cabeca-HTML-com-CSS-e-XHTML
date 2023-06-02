// window.onload = getMyLocation; (Não preciso pois o src do script da API do google já esta chamando(callback) a função getMyLocation)

//Variaveis Global

var ourCoords = { // Coodernada do QG dos Criadores do Livro
    latitude: 47.624851,
    longitude: -122.52099
}

var map; // Usado para mostrar o map na página

// Pegar Localização do usuário

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
    } else {
        alert("Oops, no geolocation support")
    };
};

/*
function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let div = document.getElementById("location");
    div.innerHTML = "You are at latitude: " + latitude + ", longitude: " + longitude;
};
*/

// O objeto "error" especifica qual código do error de 0 a 3
function displayError(error) {
    let errorTypes = {
        0: "Unknow error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };

    // O "error.code"
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }

    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}


// Calcular a distância de um ponto pro outro

// Calculando com -- Equação de Haversine --

function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371; // radius of the Earth in km

    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}

// Mostar as coodernadas do usuário e distância do HQ do criador

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let div = document.getElementById("location");

    div.innerHTML = `You are at Latitude: <strong>${latitude}</strong>, Longitude: <strong>${longitude}</strong>`;
    div.innerHTML += ` (with <strong>${position.coords.accuracy}</strong> meter accuracy)`

    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById("distance");

    distance.innerHTML = `You are <strong>${km}</strong> km from the WickedlySmart HQ`;

    showMap(position.coords);
}

// Utilizando a API do google map

// let googleLatAndLong = new google.maps.LatLng(latitude, longitude);

// Ajustes do Mapa

/*
let mapOptions = {
    zoom: 10, // 0 a 21
    center: googleLatAndLong, // irá centralizar o mapa nessa coodernada
    mapTypeId: google.maps.MapTypeId.ROADMAP // Visão do mapa estrada=ROADMAP / Satélite=SATELLITE / Híbrido=HYBRID
}
*/

function showMap(coords) {
    let googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    let mapOptions = {
        zoom: 15,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions)


    var title = "Your Location";

    var content = `you are here: <strong>${coords.latitude}</strong>, <strong>${coords.longitude}</strong>`

    addMarker(map, googleLatAndLong, title, content)
}

// Criando um marcador

function addMarker(map, latlong, title, content) {
    let markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    let marker = new google.maps.Marker(markerOptions)

    let infoWindowOptions = {
        content: content,
        position: latlong,
    };

    let infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
};
