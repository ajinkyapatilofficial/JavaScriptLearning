const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array --> [${array_roll_numbers}]`);
console.log(`-----------------------------------------------------------------------\n`);
console.log(`1. Reverse the array`);
console.log(array_roll_numbers.reverse());
console.log(`-----------------------------------------------------------------------\n`);

console.log(`2. use the sort() method as it is without any custom sorting logic.`);
console.log(array_roll_numbers.sort());
console.log(`-----------------------------------------------------------------------\n`);

console.log(`3. Sort the array in ascending order by writting custom logic.`);
array_roll_numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(`-----------------------------------------------------------------------\n`);

console.log(`4. Find the greatest number from the array.`);
array_roll_numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(array_roll_numbers);
// let greatestNum =array_roll_numbers[length-1];
console.log(`Greatest number from the array is --> ${array_roll_numbers[array_roll_numbers.length-1]}`);
console.log(`-----------------------------------------------------------------------\n`);

console.log(`5. Find the smallest number from the array is.`);
console.log(array_roll_numbers);
console.log(`Smallest number from the array is --> ${array_roll_numbers[0]}`);
console.log(`-----------------------------------------------------------------------\n`);

console.log(`6. Remove duplicates from the array.`);
console.log(array_roll_numbers);
const removeDuplicates = new Set(array_roll_numbers);
console.log(removeDuplicates);


