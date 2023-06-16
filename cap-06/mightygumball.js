// Trabalhando a requisição HTTP

// usar local host no sales.json
let url = "http://localhost:5500/cap-06/sales.json"; // Onde os dados estão armazenados e serão solicitados (https://jsonplaceholder.typicode.com/todos/1) http://gumball.wickedlysmart.com/

let request = new XMLHttpRequest(); // Cria o cronstrutor de solicitação

// Como irá solicitar pela "url" passada e o método "GET"(HTTP)
request.open("GET", url);

// Ao receber os dados este código irá verificar se os dados etão OK(200)
request.onload = function () {
    if (request.status == 200) {
        updateSales(request.responseText);

        function updateSales(responseText) {
            var salesDiv = document.getElementById("sales");
            salesDiv.innerHTML = responseText;
        }
    }
};

// Enfim envia a solicitação ao servidor. Passando "null" pois não estamos enviando nenhum dado ao serviço remoto(server)
request.send(null); 