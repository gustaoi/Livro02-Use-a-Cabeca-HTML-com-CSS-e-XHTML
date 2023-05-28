window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
    } else {
        alert("Oops, no geolocation support")
    };
};

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let div = document.getElementById("location");
    div.innerHTML = "You are at latitude: " +   latitude + ", longitude: " + longitude;
};

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
        errorMessage =  errorMessage + " " + error.message;
    }

    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}