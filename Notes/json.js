
    // Testando métodos JSON

// Transformando o objeto em uma string JSON
var plan9movie = new Movie("Plan 9 from Outer Space", 
"Cult Classic", 
2, 
["3:00pm", "7:00pm", "11:00pm"]
);

var jsonstringfy = JSON.stringify(plan9movie);
console.log(jsonstringfy)

// Transformando a string JSON em objeto para utilizar

let jsonMovieObject = JSON.parse(jsonstringfy);
console.log(`JSON movie is ${jsonMovieObject.title}`)







function Movie(title, gener, rating, showtimes) {
    this.title = title;
    this.gener = gener;
    this.rating = rating;
    this.showtimes = showtimes;
    var now = new Date().getTime();
    this._getNextShowing = function () {
        for (let i = 0; i < this.showtimes.length; i++) {
            var showtimes = getTimeFromString(this.showtimes[i])
            if ((showtimes - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            } else {
                return null
            }
            
        }
    };

}