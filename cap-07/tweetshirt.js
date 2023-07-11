// Ativando o button preview
let button = document.getElementById('previewButton');
button.onclick = previewHandler;


function previewHandler() {
    let canvas = document.getElementById("tshirtCanvas");
    let context = canvas.getContext("2d");

    // Reseta o background do canvas
    fillBackgroundColor(canvas, context);

    // teste para testar se seu browser suporta canvas
    if (canvas.getContext) {

    } else {
        alert("your browser don't support canvas")
    };


    // Cria os Quadrados no canvas
    let selectObj = document.getElementById('shape');
    let index = selectObj.selectedIndex;
    let shape = selectObj[index].value;

    if (shape == "squares") {
        for (let squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape === "circles") {
        for (let circles = 0; circles < 20; circles++) {
            drawCircles(canvas, context);
        }
    }
}

function fillBackgroundColor(canvas, context) {
    let selectObj = document.getElementById("backgroundColor");
    let index = selectObj.selectedIndex;
    let bgColor = selectObj.options[index].value;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Borda em constraste com a cor de fundo
    if (bgColor === "black") {
        context.lineWidth = 2;
        context.strokeStyle = "white";
        context.strokeRect(0, 0, canvas.width, canvas.height);
    } else {
        context.lineWidth = 2;
        context.strokeStyle = "black"
        context.strokeRect(0, 0, canvas.width, canvas.height);
    }
}

// Make Squares in canva
function drawSquare(canvas, context) {
    const w = Math.floor(Math.random() * 50);

    const x = Math.floor(Math.random() * canvas.width);

    const y = Math.floor(Math.random() * canvas.height);

    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w)
}

function degreesToRadians(params) {
    return (params * Math.PI) / 180
}

// Make Circles in canv
function drawCircles(canvas, context) {
    const x = Math.floor(Math.random() * canvas.width);

    const y = Math.floor(Math.random() * canvas.height);

    const radius = Math.floor(Math.random() * 40);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);

    context.fillStyle = "lightblue"
    context.fill();
}

// API twitter

let url = "http://localhost:5500/cap-07/tweetshirt.json";

let request = new XMLHttpRequest();

request.open("GET", url);

request.onload = function () {
    if (request.status == 200) {
        updatesTweets(request.responseText);
    }
};

function updatesTweets(responseText) {

    var tweetsSelections = document.getElementById("tweets");

    var tweets = JSON.parse(responseText)

    for (let i = 0; i < tweets.length; i++) {
        var tweet = tweets[i];

        var option = document.createElement("option");

        option.text = tweet.text;

        option.value = tweet.text.replace("\"", "'");

        tweetsSelections.option.options.add(option)
    }

    tweetsSelections.selectedIndex = 0;
}
