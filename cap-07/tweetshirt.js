// Ativando o button preview
let button = document.getElementById('previewButton');
button.onclick = previewHandler;


function previewHandler() {
    let canvas = document.getElementById("tshirtCanvas");
    let context = canvas.getContext("2d");

    // teste para testar se seu browser suporta canvas
    if (canvas.getContext) {

        // Reseta o background do canvas
        fillBackgroundColor(canvas, context);

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
        };

        drawText(canvas, context);
        drawBird(canvas, context);
    } else {
        alert("your browser don't support canvas")
    };


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

// Make Circles in Canva
function drawCircles(canvas, context) {
    const x = Math.floor(Math.random() * canvas.width);

    const y = Math.floor(Math.random() * canvas.height);

    const radius = Math.floor(Math.random() * 40);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);

    context.fillStyle = "lightblue"
    context.fill();
}

// Make Fonts

function drawText(canvas, context) {
    let selectObj = document.getElementById("foregroundColor");

    let index = selectObj.selectedIndex;

    const bgColor = selectObj[index].value;

    context.fillStyle = bgColor;

    context.font = "bold 1em sans-serif"

    context.textAlign = "left";

    context.fillText("I saw this tweet", 20, 40);

    // Get the selected tweet from the tweets menu. Draw the tweet

    selectObj = document.getElementById("tweets");

    index = selectObj.selectedIndex;

    const tweet = selectObj[index].value;

    context.font = "italic 1.2em sans-serif";

    context.fillText(tweet, 30, 100);

    context.font = "bold 1em sans-serif";

    context.textAlign = "right";

    context.fillText("and all I got was this lousy-tshirt", canvas.width - 20, canvas.height - 40);
};

// API twitter

let url = "http://localhost:5500/cap-07/tweetshirt.json";

let request = new XMLHttpRequest();

request.open("GET", url);

request.onload = function () {
    if (request.status == 200) {
        updatesTweets(request.responseText);
    };
    function updatesTweets(responseText) {

        var tweetsSelections = document.getElementById("tweets");

        var tweets = JSON.parse(responseText)

        for (let i = 0; i < tweets.length; i++) {
            var tweet = tweets[i];

            var option = document.createElement("option");

            option.text = tweet.text;

            option.value = tweet.text.replace("\"", "'");

            tweetsSelections.options.add(option)
        }

        tweetsSelections.selectedIndex = 0;
    };
};
request.send(null);

// Desenhando a imagem do twitter

function drawBird(canvas, context) {
    let twitterBird = new Image();

    twitterBird.src = "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png";

    twitterBird.onload = function () {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}
