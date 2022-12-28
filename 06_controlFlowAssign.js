var string = "I am very good IT Developer.";
console.log(`1. Given String Is : ${string}`);
var count = 0;
for (let index = 0; index < string .length; index++) {
    var charString = string.charAt(index);
    var charString = charString.toLowerCase();
    if (charString == "a" || charString == "e" || charString == "i" || charString == "o"|| charString == 
    "u"){
        count = count +1;
    }
    
}
console.log(`Total number of the vowels in the string is : ${count}`);

console.log(`=================================================================== \n`);
console.log(`2. Sum of cube of num;bers from 1 to 5.`);
function sumOfCube() {
    var sum = 0;
    for (let index = 1; index <=5; index++){
        var cube = (index*index*index);
        sum = sum  + cube;
    }
    console.log(`(1*1*1) + (2*2*2) + (3*3*3) + (4*4*4) + (5*5*5) : ${sum}`);
}
sumOfCube();

console.log(`==================================================================== \n`);
function oddPositionedChars(string) {
    console.log(`The Given String Is : ${string}.`);
    var emptyString = "";
    var myString = string.split (" ").join (" ");
    console.log(myString);
    for (let index = 0; index < myString.length; index++) {
        if (index % 2 != 0) {
            emptyString = emptyString + myString[index];
        }
        
    }
    console.log(`Odd positioned chars in the string is : ${emptyString}.`);
}
oddPositionedChars("Hard work always pays back");
console.log(`==================================================================== \n`);
oddPositionedChars ("Soon I will be Angular IT champ");

console.log(`==================================================================== \n`);

function factorial(num){
    var fact = 1;
    for (let index = 1; index <= num; index++){
        fact = fact* index;
    }
    console.log(`Factorial of "${num}" is : ${fact}`);
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);