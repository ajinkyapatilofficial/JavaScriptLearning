console.log(`A. Created class "Bank" with data memebers & initialized using counstructor.`);
console.log(`-------------------------------------------------------------------------------------------------------`);
class Bank{

    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName,
        this.location = location,
        this.accountNo = accountNo,
        this.ifsc = ifsc,
        this.interestRate = interestRate
    }
}
console.log(`B. Created objects of Bank.`);
const axisBank = new Bank("Axis Bank", "Pune", 10000455678, "AXIS0056", "6%");
const sbiBank = new Bank("SBI Bank", "Mumbai", 25000345895, "SBI0089", "8%");
const iciciBank = new Bank("ICICI Bank", "Surat", 360009734586, "ICICI0036", "7.5%");
const kotakBank = new Bank("Kotak Bank", "Dilhi", 369700098646, "KOTAK0097", "6.6%");
const hdfcBank = new Bank("HDFC Bank", "Satara", 589636785369, "HDFC1256", "6.8%");
const panjabBank = new Bank("Panjab Bank", "Panjab", 970012567848, "PANJAB0056", "7.4%");

console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`C. Created a map in such way that key should be "accountNo" & value is object.`);
const mapOFBank = new Map();
mapOFBank.set(10000455678, axisBank);
mapOFBank.set(25000345895, sbiBank);
mapOFBank.set(360009734586, iciciBank);
mapOFBank.set(369700098646, kotakBank);
mapOFBank.set(589636785369, hdfcBank);
mapOFBank.set(970012567848, panjabBank);

const keyMapOfBank=  mapOFBank.keys();
console.log(keyMapOfBank);
console.log(``);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`D. Traverse the map, Log bankName, accountNo, interestRate.`);
for (const key of keyMapOfBank) {
    const bankDetails = mapOFBank.get(key);
    console.log(`Bank Name : ${bankDetails.bankName}, Bank AccountNo : ${bankDetails.accountNo} & Bank InterestRate : ${bankDetails.interestRate}`);
}






