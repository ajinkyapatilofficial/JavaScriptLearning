const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Given array is --> [${arrayNums}]`);

console.log(`1. Perform shallow clone on arrayNum & Update cloned array with values -->  55,56.`);
let clonedArray = arrayNums;
clonedArray.push(55,56);
console.log(`After shallow clone Original array is :`,arrayNums);
console.log(`After Shallow clone Cloned Array is :`,clonedArray);

console.log(`=====================================================================================================================\n`);

console.log(`2. Perform deep clone using spread operator & update original array "arrayNums" with values :- 10,25 at last position.`);
let deepCloneOriginalArray = [...arrayNums];
let updatedeepCloneOriginalArray = deepCloneOriginalArray.push(10,25);
console.log(`Original array is :`,arrayNums);
console.log(`deep Cloned Array is :`,deepCloneOriginalArray);

console.log(`=====================================================================================================================\n`);
console.log(`3. Merging given array with "arrayNums" using spread operator.`);
const arrayEven = [2,30,14,8];
console.log(`Given array is :`,arrayEven);
let mergeArray = [...arrayNums,...arrayEven];
console.log(`After merging array is :`,mergeArray);

console.log(`=====================================================================================================================\n`);
console.log(`4. Creating employee_info object.`);
const employee_info ={
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality : {
            colony: "OM Vrindavan society",
            street: "Konach pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);

console.log(`=====================================================================================================================\n`);
console.log(`5. Employee Details of "${employee_info.emp_name}" are -`);
let empAddress = employee_info.address.locality;
console.log(`a. address locality is : "${empAddress.colony}","${empAddress.street}", city : "${employee_info.address.city}", State : "${employee_info.address.state}" & Country is : "${employee_info.address.country}"`);
console.log(`b. Employee info numbers are:-->${employee_info.mobiles[0]}, ${employee_info.mobiles[1]}, ${employee_info.mobiles[1]}`);

console.log(`=====================================================================================================================\n`);
console.log(`6. Performing deep copy using JSON.stringfy().`);
console.log(`a. Before updating july month salary is :`,employee_info.salary);
let newemployee_info = JSON.parse(JSON.stringify(employee_info));
newemployee_info.salary.july_month = "80,0000INR";
console.log(`a. After updating july month salary is :`,newemployee_info.salary);

console.log(`=====================================================================================================================\n`);
newemployee_info.address.country = "United Kingdom";
console.log(`b. After updating property country is :`,newemployee_info.address);

console.log(`=====================================================================================================================\n`);
console.log(`c. Updated values for original is :"${employee_info.emp_name}"`);
console.log(newemployee_info.salary);
console.log(newemployee_info.address);








