console.log(`1. Creating object of personal Details...`);
const personalDetails = {
    name : "Ajinkya",
    education: "BSC-Chemistry",
    location: "Kolhapur",
    age: 26,
    gender: "Male",
}
console.log(`Personal Details are ==>`,personalDetails);

console.log(`=====================================================================================================================\n`);

console.log(`2. Creating object of College Details...`);
const collegeDetails = {
    clgName : "Rajaram College Kolhapur",
    location : "Kolhapur",
    university : "Shivaji University Kolhapur",
    departments : function(){
           console.log(`There are total 6 Departments: 1. Bachelor of Computer Science, 2. Bsc IT, 3. Bachelor of Computer Application, 4. Bsc Mathametics, 5. Bsc Statistics, 6. Bsc Chemistry`);
    }
}
console.log(`College Details are ==>`,collegeDetails);

console.log(`=====================================================================================================================\n`);

console.log(`3. After Merging above 2 Objects and logging details...`);
let mergeObjects = Object.assign(personalDetails,collegeDetails);
console.log(mergeObjects);

console.log(`=====================================================================================================================\n`);
console.log(`4. Creating an array of friends & freezing it`);
const arrayOfFriendsName = ["Sumit","Smit", "Nana", "Goldi", "Jenny"]
let freezeArray = Object.freeze(arrayOfFriendsName);
console.log(freezeArray);

console.log(`=====================================================================================================================\n`);
console.log(`5. Iterating step 4 using for of loop & log friend names...`);
for (const friendNames of freezeArray) {
    console.log(friendNames);
}

console.log(`=====================================================================================================================\n`);
console.log(`6. Given String is ==> "Codemind Technology" from which Reversing only "Technology" word...`);
var myString = "Codemind Technology";
var EmptyString = "";
for (let index = myString.length-1; index >= 9; index--) {
    var myString1 = myString.charAt(index);
    EmptyString= EmptyString + myString1;
    // console.log(myString[index]);      
}
var newString = "Codemind";
var concatString = newString+ " "+EmptyString;
console.log(concatString);

