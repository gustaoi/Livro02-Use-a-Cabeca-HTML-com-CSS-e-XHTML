// Trabalhando com local storage. quando setamaos o localstorage ele funciona como um par chave/valor.

//                      Key               Value
//                   --Chave--          --Valor--
localStorage.setItem("sticky_0", "Pick up  dry Cleaning");

localStorage.setItem("sticky_1", "Cancel cable TV, who needs it now?");

// Ao utilizar o termo .getItem(chave) irá obter o valor da chave passada

localStorage["sticky_0"] = "Pick up  dry Cleaning (modified)";

let sticky = localStorage["sticky_0"]; // or localStorage.getItem("sticky_0")

console.log(sticky) // o valor de "sticky_0" -> "Pick up  dry Cleaning"

// Convertendo em number with parseInt or parseFloat

localStorage.setItem("number", 1);

var num = parseInt(localStorage.getItem("number"));

console.log(num);

localStorage.setItem("number", num)

let n = localStorage.getItem("number")


window.onload = function shellGame() {
    localStorage.setItem("shell1", "pea");
    localStorage.setItem("shell2", "empty");
    localStorage.setItem("shell3", "empty");
    localStorage["shell1"] = "empty";
    localStorage["shell2"] = "pea";
    localStorage["shell3"] = "empty";
    var value = localStorage.getItem("shell2");
    localStorage.setItem("shell1", value);
    value = localStorage.getItem("shell3");
    localStorage["shell2"] = value;
    var key = "shell2";
    localStorage[key] = "pea";
    key = "shell1";
    localStorage[key] = "empty";
    key = "shell3";
    localStorage[key] = "empty";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log(key + ": " + value);
    }
}

// Usando on as propiedade length and key

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage[key]
    console.log(value);
}