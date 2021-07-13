// Function 1
function math(numOne, numTwo) {
    var sum = numOne + numTwo;
    return sum*5;
}   
console.log(math(2,3));

// Function 2
var string = "hakuna matata";

function chars (letters) {
    var numCharacters = 12;
    if (numCharacters >=10) {
        return true;
    } else {
        return false;
    }
}
console.log(chars(string));

// Function 3
var elements = ["Hi", "Bye", "Phone", "Eat"];

function wordWithPh (words) {
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes("Ph")) {
            console.log(`The word is ${words[i]}`);
        } else {
            console.log(`This is not the word`);
        }
    }
}

wordWithPh(elements);

