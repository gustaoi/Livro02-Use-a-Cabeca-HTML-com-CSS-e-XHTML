//Testando while with if
var scoops = 15;
while (scoops >= 0) {
    if (scoops == 3) {
        console.log("Ice cream is running low!");
        } else if (scoops > 9) {
        console.log("Eat faster, the ice cream is going to melt!");
        } else if (scoops == 2) {
        console.log("Going once!");
        } else if (scoops == 1) {
        console.log("Going twice!");
        } else if (scoops == 0) {
        console.log("Gone!");
        } else {
        console.log("Still lots of ice cream left, come and get it.")
        }
scoops = scoops - 1;
}
console.log("life without ice cream isn't the same");