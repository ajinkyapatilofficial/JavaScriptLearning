const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given array is :`) 
console.log(fruits_seasonal);
console.log(` First and Last element of array is`);
let totalLength = fruits_seasonal.length;
let firstElement = fruits_seasonal[0];
let lastElement = fruits_seasonal[totalLength-1]
console.log(`First element in given array is : ${firstElement} \n Last element in given array is: ${lastElement} `);
console.log(``);


console.log(`2.Adding 'Papaya' before element 'Banana'`);
fruits_seasonal.unshift('Papaya');
console.log(fruits_seasonal);
console.log(``);

console.log(`3. Remove 'Mango' from array`);
const index = fruits_seasonal.indexOf("Mango");
fruits_seasonal.splice(index,1)
console.log(fruits_seasonal);
console.log(``);

console.log(`4.Add element or Insert element 'Pineapple' at last position`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log(``);

console.log(`5.Inserting 'Dragon Fruit' before 'Water Melon'`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);
console.log(``);

console.log(`6.Replacing an element 'Orange' with 'Kiwi'`);
let indexOrange = fruits_seasonal.indexOf("Orange");
fruits_seasonal.splice(indexOrange,1,"Kiwi");
console.log(fruits_seasonal);
console.log(``);


console.log(`7. Elements starting from index 1 to 4 index`);
console.log(fruits_seasonal.slice(1,5));
console.log(``);


console.log(`8.Selecting last three elements using length property`);
let res = fruits_seasonal.slice(-3);
console.log(res);
console.log(``);