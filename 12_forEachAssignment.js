const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given Array is :--> [${arrayNumbers}]`);
console.log(`1. Log the array element with it's index using foreach() with arrow function.`);
arrayNumbers.forEach((element ,index) => {
    console.log(`Array Element is :--> ${element}, & it's Index is :--> ${index} `);
});

console.log(`------------------------------------------------------------------------------------------\n`);
console.log(`2. Find the positive numbers using forEach() with arrow function.`);
const positiveNum =[];
arrayNumbers.forEach( (element) => {
if (element >= 0) {
    positiveNum.push(element);
   }
});
console.log(`Positive numbers from an array is :--> [${positiveNum}]`);

console.log(`------------------------------------------------------------------------------------------\n`);
console.log(`3. Find the negative numbers & add into new array using arrow function.`);
const negativeNum = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        negativeNum.push(element);
    }
});
console.log(`Negative numbers from an array is :-->[${negativeNum}]`);
console.log(`------------------------------------------------------------------------------------------\n`);
console.log(`4. Find the even numbers and log on console using forEach() with arrow function.`);
const evenNum =[];
arrayNumbers.forEach(element => {
    if (element %2 == 0) {
        evenNum.push(element);
    }
});
console.log(`Even numbers from an array is :--> [${evenNum}]`);

console.log(`------------------------------------------------------------------------------------------\n`);
console.log(`5. Find the sum of all elements from an arrayNumbers.`);
sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(`Sum of all elements from an array is :--> ${sum}`);

console.log(`------------------------------------------------------------------------------------------\n`);
console.log(`6. Log the only even positioned array value on console.forEach() with arrow function.`);
const evenPositionNum = [];
arrayNumbers.forEach( (element, index) => {
    if (index %2 == 0) {
        evenPositionNum.push(element)
    }
});
console.log(`Even positioned array values are :--> [${evenPositionNum}]`);