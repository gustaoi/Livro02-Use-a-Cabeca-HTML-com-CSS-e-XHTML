// Realizando o projeto do obj movie com construtor

function Movie(title, gener, rating, showtimes) {
    this._title = title;
    this._gener = gener;
    this._rating = rating;
    this._showtimes = showtimes;
    var now = new Date().getTime();
    this._getNextShowing = function () {
        for (let i = 0; i < this._showtimes.length; i++) {
            var showtimes = getTimeFromString(this._showtimes[i])
            if ((showtimes - now) > 0) {
                return "Next showing of " + this._title + " is " + this._showtimes[i];
            } else {
                return null
            }
            
        }
    };

}

// A função a seguir usa expressões regulares(A famosa REGEX) ela converte as string "14:00pm" em horarios milessegundos

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}


var movie1 = new Movie(
    "titanic", 
    "romance", 
    9, 
    ["13:00pm", "15:30pm", "18:40pm"]);
var movie2 = new Movie("avatar", 
"fiction", 
10, 
["15:00pm", "18:00pm", "20:00pm"]);

console.log(movie1._getNextShowing())
console.log(movie2._getNextShowing())