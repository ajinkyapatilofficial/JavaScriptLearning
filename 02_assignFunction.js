function htmlCssInfo() {
    console.log("1) First Function : With no arguments no return type");
    console.log("======================================================");
    console.log(
    "HTML is the standard markup language for creating the webpages And Css is the language used to style and layout the web pages."
  );
}
htmlCssInfo();

console.log("------------------------------------------------------------------------------------------------------------------------");

console.log("2) Second Function : With no arguments no return type");
console.log("======================================================");
function javascriptInfo(){
    console.log("JavaScript is the world's most popular programming language. JavaScript is the programming language of the web.");
}
javascriptInfo();

console.log("------------------------------------------------------------------------------------------------------------------------");

console.log("3) Third Function : With arguments no return type");
console.log("======================================================");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name :",firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :",collegeName);

}
personalDetails("Ajinkya","Patil","MRCLG");

console.log("------------------------------------------------------------------------------------------------------------------------");
console.log("4) Fourth Function : Swap The values");
console.log("======================================================");

function swapValuesDude(value1,value2){
    console.log("Before Swap :",value1,value2);
    var temp=value1;
    var value1=value2;
    var value2=temp;
    console.log("After Swap :",value1,value2);
}
swapValuesDude("VIRAT","ANUSHKA");
swapValuesDude(1000,2000);

console.log("------------------------------------------------------------------------------------------------------------------------");
console.log("5) Fifth Function : Addition of Numbers");
console.log("======================================================");

function addThreeValues(num1,num2,num3){
    var sum=num1+num2+num3;
    console.log("Addition :",sum);
    return sum;
}
    addThreeValues(10.23,600,40);
    addThreeValues("Hello","Good","Morning");