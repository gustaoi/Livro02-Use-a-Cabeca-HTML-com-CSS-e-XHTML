let videos = { video1: "video/demovideo1", video2: "video/demovideo2" };

let effectFunction = null;

// escolher qual o formato do video
function getFormatExtension() {
    let video = document.getElementById('video');

    if (video.canPlayType("video/webm") != "") {
        return ".webm"
    }
    return alert("your browser doesnt have support webm")
};

window.onload = function () {

    var video = document.getElementById("video");
    video.src = videos.video1 + getFormatExtension();
    video.load();

    var controlLinks = document.querySelectorAll("a.control");

    for (var i = 0; i < controlLinks.length; i++) {
        controlLinks[i].onclick = handleControl;
    };

    var effectLinks = document.querySelectorAll("a.effect");
    for (var i = 0; i < effectLinks.length; i++) {
        effectLinks[i].onclick = setEffect;
    };

    var videoLinks = document.querySelectorAll("a.videoSelection");
    for (var i = 0; i < videoLinks.length; i++) {
        videoLinks[i].onclick = setVideo;
    };

    video.addEventListener("play", processFrame, false);

    pushUnpushButtons("video1", []);
    pushUnpushButtons("normal", []);
}

// Botões de Controle

function handleControl(e) {
    var id = e.target.getAttribute("id");
    var video = document.getElementById("video");

    if (id == "play") {
        pushUnpushButtons("play", ["pause"]);

        if (video.ended) {
            video.load();
        }
        video.play();

        // fim do video

        video.addEventListener("ended", endedHandler, false);

        function endedHandler() {
            pushUnpushButtons("", ["play"])
        }

    } else if (id == "pause") {
        pushUnpushButtons("pause", ["play"]);
        video.pause();

    } else if (id == "loop") {
        if (isButtonPushed("loop")) {
            pushUnpushButtons("", ["loop"]);

        } else {
            pushUnpushButtons("loop", []);

        }
        video.loop = !video.loop;

    } else if (id == "mute") {
        if (isButtonPushed("mute")) {
            pushUnpushButtons("", ["mute"]);

        } else {
            pushUnpushButtons("mute", []);

        }
        video.muted = !video.muted;
    }
}

// effects buttons

function setEffect(e) {
    var id = e.target.getAttribute("id");

    if (id == "normal") {
        pushUnpushButtons("normal", ["western", "noir", "scifi"]);
        effectFunction = null;

    } else if (id == "western") {
        pushUnpushButtons("western", ["normal", "noir", "scifi"]);
        effectFunction = western;

    } else if (id == "noir") {
        pushUnpushButtons("noir", ["normal", "western", "scifi"]);

        effectFunction = noir;

    } else if (id == "scifi") {
        pushUnpushButtons("scifi", ["normal", "western", "noir"]);
        effectFunction = scifi;
    }
};

// videos buttons

function setVideo(e) {
    var id = e.target.getAttribute("id");
    var video = document.getElementById("video");

    if (id == "video1") {
        pushUnpushButtons("video1", ["video2"]);

    } else if (id == "video2") {
        pushUnpushButtons("video2", ["video1"]);
    }

    video.src = videos[id] + getFormatExtension();
    video.load();
    video.play();

    pushUnpushButtons("play", ["pause"]);
}

// função de auxilio 

function pushUnpushButtons(idToPush, idArrayToUnpush) {
    if (idToPush != "") {
        var anchor = document.getElementById(idToPush);

        var theClass = anchor.getAttribute("class");

        if (!theClass.indexOf("selected") >= 0) {
            theClass = theClass + " selected";

            anchor.setAttribute("class", theClass);

            var newImage = "url(images/" + idToPush + "pressed.png)";

            anchor.style.backgroundImage = newImage;
        }
    }
    for (var i = 0; i < idArrayToUnpush.length; i++) {
        anchor = document.getElementById(idArrayToUnpush[i]);

        theClass = anchor.getAttribute("class");

        if (theClass.indexOf("selected") >= 0) {
            theClass = theClass.replace("selected", "");

            anchor.setAttribute("class", theClass);

            anchor.style.backgroundImage = "";
        }
    }
}

// Botâo pressionado

function isButtonPushed(id) {
    var anchor = document.getElementById(id);

    var theClass = anchor.getAttribute("class");

    return (theClass.indexOf("selected") >= 0);
};

// Processar os frame dos videos

function processFrame(e) {
    let video = document.getElementById("video");
    
    if (video.paused || video.ended) {
        return;
    }

    let bufferCanvas = document.getElementById("buffer");

    let displayCanvas = document.getElementById("display");

    let buffer = bufferCanvas.getContext("2d");

    let display = displayCanvas.getContext("2d");

    buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);

    // Obtém os dados da imagem do canvas "buffer". O método getImageData() retorna um objeto que contém uma matriz de bytes representando os valores RGBA (vermelho, verde, azul e alfa) de cada pixel do canvas.

    let frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);

    //  Calcula o comprimento do array de dados da imagem dividindo o comprimento total por 4. Isso é feito porque cada pixel é representado por 4 valores (RGBA), portanto, o comprimento total da matriz é quatro vezes o número de pixels.

    let length = frame.data.length / 4;

    //  Percorre todos os pixels da imagem usando um loop for. Dentro do loop for, a função obtém os valores R, G e B de cada pixel da imagem:

    for (let i = 0; i < length; i++) {
        let r = frame.data[i * 4 + 0];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (effectFunction) {
            effectFunction(i, r, g, b, frame.data);
        }
    }

    display.putImageData(frame, 0, 0);

    //Atualizar em tempo real
    setTimeout(processFrame, 0);
}

function noir(pos, r, g, b, data) {
    var brightness = (3 * r + 4 * g + b) >>> 3;

    if (brightness < 0) brightness = 0;
    data[pos * 4 + 0] = brightness;
    data[pos * 4 + 1] = brightness;
    data[pos * 4 + 2] = brightness;
}