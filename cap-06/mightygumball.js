// Trabalhando a requisição HTTP

//          JSONP EM TEMPO REAL

setInterval(handleRefresh, 3000);

function handleRefresh() {
    var url = "http://gumball.wickedlysmart.com?callback=updateSales";

    let newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");

    let oldScriptElement = document.getElementById("jsonp");
    let body = document.getElementsByTagName("body") [0];

// Vamos ficar criando um novo elemento script para o browser indentificar e lé-lo, pois não adianta mudar apenas o src. está têcnica é chamada de "script injection"

    if (oldScriptElement == null) {
        body.appendChild(newScriptElement);
    } else {
        body.replaceChild(newScriptElement, oldScriptElement);
    }
}

function updateSales(sales) {
    var salesDiv = document.getElementById("sales");
    
    // Passando de string para um objeto JS
    console.log(sales)
    for (let i = 0; i < sales.length; i++) {
        const sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = `<b>${sale.name}</b> sold <b>${sale.sales}</b> gumball`;
        salesDiv.appendChild(div)
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
                    ---Iremos Utilizar o JSONP---


    // usar local host no sales.json
    let url = "http://gumball.wickedlysmart.com"; // Onde os dados estão armazenados e serão solicitados servidor tempo real (http://gumball.wickedlysmart.com/), servidor local (http://localhost:5500/cap-06/sales.json)


    let request = new XMLHttpRequest(); // Cria o cronstrutor de solicitação
    
    // Como irá solicitar pela "url" passada e o método "GET"(HTTP)
    request.open("GET", url);
    
    // Ao receber os dados este código irá verificar se os dados etão OK(200)
request.onload = function () {
    if (request.status == 200) {
        updateSales(request.responseText);
        
        function updateSales(responseText) {
            var salesDiv = document.getElementById("sales");

            // Passando de string para um objeto JS
            var sales = JSON.parse(responseText);
            console.log(sales)
            for (let i = 0; i < sales.length; i++) {
                const sale = sales[i];
                var div = document.createElement("div");
                div.setAttribute("class", "saleItem");
                div.innerHTML = `<b>${sale.name}</b> sold <b>${sale.sales}</b> gumball`;
                salesDiv.appendChild(div)
            }
        }
    }
};

// Enfim envia a solicitação ao servidor. Passando "null" pois não estamos enviando nenhum dado ao serviço remoto(server)
request.send(null);


Suporte para navegadores antigos que ainda usam XMLHttpRequest (level 1)

function init() {
    var url = "http://localhost/gumball/sales.json";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            updateSales(request.responseText);
        }
    };
    request.open("GET", url);
    request.send(null);
}
*/