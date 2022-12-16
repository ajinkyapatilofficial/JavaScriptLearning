console.log(`===============# String Value as Argument #=============== \n`);
var squareOfWordLength = function (value){
    console.log(`The length of word ${value} is = ${value.length}. & its square is = ${value.length*value.length}. \n`);

}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`=========# Function Expression With No Argument & No Return #========= \n`);

var newFunction = function(){
    var myString = "I am Angular Developer";
    var myWord = myString.split(" ");
    console.log(`2.1 Length of string is = ${myString.length}. Total no of words in string are = ${myWord.length}.\n
    After dividing string length by total no of words is = ${myString.length/myWord.length}.\n`);
    console.log(`#=====================================================# \n`);
    console.log(`2.2 Multiplying string length with total words = ${myString.length*myWord.length}`);

}
newFunction();

