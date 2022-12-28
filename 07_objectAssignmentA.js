console.log(`*---------- SBI Bank ----------*`);
const sbiBank ={
    BankName : "State Bank Of India",
    location : "Kolhapur",
    accountNo : 093110110004420,
    ifsc : "SBIK0000514",
    interestRate : "8%",

    showDetails : function (){
        console.log(sbiBank);
    }
}
sbiBank.showDetails();

console.log(` \n `);

console.log(`*---------- Axis Bank ---------*`);
const axisBank ={
    BankName : "Axis Bank",
    location : "Pune",
    accountNo : 093220220001555,
    ifsc : "AXIP0000515",
    interestRate : "6.5%",
    showDetails : function (){
        console.log(axisBank);
    }
}
axisBank.showDetails();

console.log(` \n `);

console.log(`*---------- HDFC Bank ---------*`);
const hdfcBank ={
    BankName : "HDFC Bank",
    location : "Mumbai",
    accountNo : 093330330001555,
    ifsc : "HDFCM000525",
    interestRate : "7.2%",
    showDetails : function (){
        console.log(hdfcBank);
    }
}
hdfcBank.showDetails();

console.log(` \n `);

console.log(`*---------- YES Bank ----------*`);
const yesBank ={
    BankName : "Yes Bank",
    location : "Nashik",
    accountNo : 09344044000555,
    ifsc : "YESN00009595",
    interestRate : "7%",
    showDetails : function (){
        console.log(yesBank);
    }
}
yesBank.showDetails();