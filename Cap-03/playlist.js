/* Script Add Songs */

/* Add Songs */

window.onload = init;

function init() {
    let button = document.getElementById("iaddButton");

    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let textInput = document.getElementById("isongText");
    let songName = textInput.value;

    if (songName === "") {
        alert("Insert a Song")
    } else {
        alert("Adding " + songName)    
    }
}