console.log(`1. Create Constructor function with Bank name & adding data member...`);
console.log(`2. Create object and logging bank details...`);
function Bank(bankName, location, ifscCode, branchCode){
      this.bankName = bankName;
      this.location = location;
      this.ifscCode = ifscCode;
      this.branchCode = branchCode;
}
let yesBank = new Bank("YES Bank", "Pune","YES0000432","100032");
console.log(`Bank Details are ==> Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, BranchCode: ${yesBank.branchCode}`);
let sbiBank = new Bank("SBI Bank", "Kolhapur","SBI00001525","100025");
console.log(`Bank Details are ==> Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, BranchCode: ${sbiBank.branchCode}`);
let mahBank = new Bank("MAH Bank", "Nagpur","MAH00008646","100046");
console.log(`Bank Details are ==> Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC Code: ${mahBank.ifscCode}, BranchCode: ${mahBank.branchCode}`);
let axisBank = new Bank("AXIS Bank", "Mumbai","AXIS00004618","100018");
console.log(`Bank Details are ==> Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, BranchCode: ${axisBank.branchCode}`);

console.log(`=============================================================================================================\n`);

// console.log(`3. Adding data member openTime`);
Bank.prototype.openTime = "9 AM IST";
// console.log(`4. Adding data member closeTime`);
Bank.prototype.closeTime = "6 PM IST";

console.log(`5. Open time of SBI bank is ==> "${sbiBank.openTime}" & Close Time is ==> "${sbiBank.closeTime}"`);

console.log(`=================================================================================================\n`);
console.log(`6. Bank Name is ==> "${axisBank.bankName}" & Close Time is ==> "${sbiBank.closeTime}"`);

console.log(`=================================================================================================\n`);
console.log(`7. Bank Name is ==> "${yesBank.bankName}" ,Baranch Code ==> "${yesBank.branchCode}" & Open Time is ==> "${sbiBank.openTime}"`);


