let position = 0;
let playlist;
let video;


window.onload = function () {
    video = document.getElementById("video");

    playlist = ["video/preroll", 
    "video/areyoupopular", 
    "video/destinationearth"];
    
    video.addEventListener("ended", nextVideo, false);
    
    video.src = playlist[position] + getFormatExtension();
    video.load();
    video.play();
};

function nextVideo() {
    position++

    // Make a loop resetting the loop
    if (position >= playlist.length) {
        position = 0;
    }

    video.src = playlist[position] + getFormatExtension();
    video.load()
    video.play();
}

// Agora iremos nos certificar que o browser suporta o tipo de arquivo do video

function getFormatExtension () {
    if (video.canPlayType("video/webm") != "") {
        return ".webm"
    }
    return alert("your browser doesnt have support webm")
}