class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
      this.bank_name = bank_name;
      this.location = location;
      this.account_no = account_no;
      this.ifsc = ifsc;
      this.interest_rate = interest_rate;
    }
  }
  console.log(`1. Created the class and initilize data member using constructor`);
  console.log(`=========================================================================================================================`);
  console.log(`2. Created The Objects`);
  const axis_bank = new Bank("AXIS Bank", "Pune", 25638698, "AXB4532", "7.5%");
  const sbi_bank = new Bank("SBI Bank", "Mumbai", 64689545, "SBI5258", "8%");
  const icici_bank = new Bank("ICICI Bank","Nashik",29851525, "ICICI4125","8.5%");
  const kotak_bank = new Bank("Kotak Bank", "Nagpur", 67498468, "KOT4738", "7.2%");
  const hdfc_bank = new Bank("HDFC Bank", "Kolhapur", 26459867, "HDF8975", "8.2%");
  const panjab_bank = new Bank("Punjab Bank", "Belgav", 27564567, "PUN9238", "6.8%");
  console.log(axis_bank);
  console.log(sbi_bank);
  console.log(icici_bank);
  console.log(kotak_bank);
  console.log(hdfc_bank);
  console.log(panjab_bank);
  console.log(`=========================================================================================================================`);
  console.log(`3. Created an array and traverse using for of loop and log bank name and location`);
  const newArray = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank,];
  for (const elements of newArray) {
    // console.log(`${bank_name}, ${location}`);
    console.log(`${elements.bank_name},${elements.location}`);
}
  console.log(`=========================================================================================================================`);
  console.log(`4. Find the object which has name "Kotak Bank" using for of loop`);
  for (const elements of newArray) {
    if ((bank_name = "Kotak Bank")) {
      console.log(kotak_bank);
      break;
    }
  }
  console.log(`=========================================================================================================================`);
  console.log(`5. Log the details on console using for loop`);
  for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
  }