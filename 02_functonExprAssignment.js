console.log("========== 1. ==========");
var square = function (num) {
  console.log("Square of", num, "=", num * num);
};
console.log(typeof square);
square(5);
square(6);
square(25);
square(100);

console.log("========== 2. ==========");
console.log("Type of square:");
console.log(typeof square);

console.log("============== 3. ============");

console.log("Calculating The Area of Rectangle :");
var areaOfRectangle = function (num1, num2) {
  console.log("area of rectangle is 499 * 917=", num1 * num2);
};
areaOfRectangle(499, 917);

console.log("============ 4. ============");
var swapValues = function (val1, val2) {
  console.log("Before swap :", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("After swap :", val1, val2);
};
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("===================== 5. =====================");
console.log("Calculating Character of string is");

var givenString = function (javaScript) {
  console.log("Given String is:", javaScript);

  console.log(
    "Total characters Available in the string is =",
    javaScript.length);

  console.log("Character at index 6 is =", javaScript.charAt(6));

  console.log("Character at index 11 is =", javaScript.charAt(11));

  console.log(
    "The last Character is =",
    javaScript.charAt(javaScript.length - 1));

  console.log("The first character is =", javaScript.charAt(0));
  
  var totallength = javaScript.length;
  console.log("Length of the String is=", totallength);
  console.log("          &            ");
  console.log("Square of the Length is =", totallength * totallength);
};
givenString("JS the most popular language");
