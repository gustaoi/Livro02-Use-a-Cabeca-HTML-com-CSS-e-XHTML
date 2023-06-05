// Trabalhando a requisição HTTP

let url = "http://someserver.com/data.json"; // Onde os dados estão armazenados e serão solicitados

let request = new XMLHttpRequest(); // Cria o cronstrutor de solicitação

// Como irá solicitar pela "url" passada e o método "GET"(HTTP)
request.open("GET", url);

// Enfim envia a solicitação ao servidor. Passando "null" pois não estamos enviando nenhum dado ao serviço remoto(web)
request.send(null); 

// Ao receber os dados este código irá verificar se os dados etão OK(200)
request.onload = function () {
    if (request.status == 200) {
        alert(request.responseText)
    }
};