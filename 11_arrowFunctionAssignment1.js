console.log(`1. Arrow Function with no arguments & no return value.`);
let arrowFun = () => {
     console.log(`a.--> "Good Morning", Today is Monday.`);
}
arrowFun();

console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`2. Arrow Function with 3 arguments & no return value,for received 3 parameters perform the multiplication.`);
var multiplication
let arrowFun1 = (n1,n2,n3=1) => {
     multiplication = n1* n2 * n3;
}
arrowFun1(5,5,2);
console.log(`a.--> Multiplication of values to be passed (5,5,2) is:-->`,multiplication);
arrowFun1(10,4);
console.log(`b.--> Invoke the same function for values : => (10,4) & 3rd arg as "1" :-->`,multiplication);

console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`3. Arrow Function with 5 arguments & return value such as, for received parametrs it should do the addition`);

let add = (n1, n2, n3, n4, n5) => {
    let addition = n1 + n2+ n3+ n4+ n5;
    console.log(`---> Addition of values to be passed ${n1},${n2},${n3},${n4},${n5} is :-->`,addition);
    return addition;
}
let addResult = add(100,100,200,349,756);
// console.log(addResult);
let addResult1 = add("I am"," learning"," ES6"," features"," in depth");
// console.log(addResult1);


