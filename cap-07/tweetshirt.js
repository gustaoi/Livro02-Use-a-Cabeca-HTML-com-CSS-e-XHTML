    // Ativando o button preview
    let button = document.getElementById('previewButton');
    button.onclick = previewHandler;


function previewHandler() {
    let canvas = document.getElementById("tshirtCanvas");
    let context = canvas.getContext("2d");

    // Reseta o background do canvas
    fillBackgroundColor(canvas, context);

    // Border feita em js
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
    }
}

function fillBackgroundColor(canvas, context) {
    let selectObj = document.getElementById("backgroundColor");
    let index = selectObj.selectedIndex;
    let bgColor = selectObj.options[index].value;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height)

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

function drawSquare(canvas, context) {


    const w = Math.floor(Math.random() * 50);

    const x = Math.floor(Math.random() * canvas.width);

    const y = Math.floor(Math.random() * canvas.height);

    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w)
}
