/* Guardando as músicas */

function init() {
    var button = document.getElementById('iaddbutton');

    button.onclick = handleButtonClick;
    loadiPlaylist();
}

function handleButtonClick() {
    var textInput = document.getElementById("isongText");
    var songName = textInput.value;

    var li = document.createElement("li");
    li.innerHTML = songName;

    var ul = document.getElementById("iplaylist")
    ul.appendChild(li);
    save(songName)
}