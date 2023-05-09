var word1 = "a";
var word2 = "nam";
var word3 = "nal p";
var word4 = "lan a c";
var word5 = "a man a p";

for (var i = 0; i < 4; i++) {
    if (i == 0) {
    phrase = word1 + word2;
    }
    else if (i == 1) {
    phrase = word3 + word4;
    }
    else if (i == 2) {
    phrase = phrase + word1 + word3;
    }
    else (i == 3); {
    phrase = phrase + word5 + word2 + word1;
    }
    }
    console.log(phrase);