function Dog(name, breed, weight) {
    this._name = name;
    this._breed = breed;
    this._weight = weight;
    this.bark = function() {
        if (this._weight > 25) {
            console.log(this._name + " says Woof!")
        } else {
            console.log(this._name + " says Yip!")
        }
    };
}

// o valor com "_" é uma formalidade para indicar que o valor está dentro de um constructor 

// Vamos chama-lás agora, para podemos chama-la usaremos uma nova palavra-chave "new" vamos ver:

var fido = new Dog("Fido", "Mixed", 38);

var tiny = new Dog("Tiny", "chawalla", 8);

var clifford = new Dog("Clifford", "Bloodhound", 65);

fido.bark();
tiny.bark();
clifford.bark();

// Este jeito de cima está ULTRAPASSADO Hoje em dia realizamos com uso de class. EX:

/*
class Dog {
    constructor(name, breed, weight) {
        this._name = name;
        this._breed = breed;
        this._weight = weight;
        this.bark = function () {
            if (this._weight > 25) {
                console.log(this._name + " says Woof!");
            } else {
                console.log(this._name + " says Yip!");
            }
        };
    }
}
*/