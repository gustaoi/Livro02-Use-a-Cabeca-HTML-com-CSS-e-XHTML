// Criar um Objeto para cartazes de filmes de modo que fale o nome, horario, gênero e rating do filme

let movie1 = {
    title: "titanic",
    gener: "romance",
    rating: 9,
    showtimes: ["14:30pm", "16:00pm", "19:20pm"],
    
    // Usando método nos objeto
    getNextShowing: function () {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " +
                    this.showtimes[i];
            }
        }
        return null;
    }
}

let movie2 = {
    title: "shark",
    gener: "terror",
    rating: 8,
    showtimes: ["15:00pm", "18:20pm", "20:00pm"],

    // Usando método nos objeto
    getNextShowing: function () {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " +
                    this.showtimes[i];
            }
        }
        return null;
    }
}

// Saber qual o proximo horario do filme

/*
function getNextShowing(movie) {
    var now = new Date().getTime(); // pegando o horario atual

    for (let i = 0; i < movie.showTimes.length; i++) {
        var showtime = getTimeFromString(movie.showTimes[i]);

        if ((showtime - now) > 0) {
            return "Next showing of " + movie.name + " is " + movie.showTimes[i];
        }
    }
    return null
}
*/

// A função a seguir usa expressões regulares(A famosa REGEX) ela converte as string "14:00pm" em horarios milessegundos

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

/*
var nextShowing = getNextShowing(movie1);
console.log(nextShowing);
nextShowing = getNextShowing(movie2);
console.log(nextShowing);
*/

console.log(movie1.getNextShowing())
console.log(movie2.getNextShowing())