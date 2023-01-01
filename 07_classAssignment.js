console.log(`1. Define Vehicle Class Which Has Contain Properties, Constructor & Create 5 Object From Vehicle Class..`);
class Vehicle {
     name
     type
     model
     price
     color
     constructor(name, type, model, price, color){
        this.name = name;
        this.type = type;
        this.model = model;
        this.price = price;
        this.color = color;
     }

}
let vehicleNo1 = new Vehicle("Suzuki Ciaz", "4 wheeler", "ZXI Plus AMT","15.85Lakh", "White");
let vehicleNo2 = new Vehicle("Jawa", "2 wheeler", "Jawa 42", "2.12Lakh","Mate Black");
let vehicleNo3 = new Vehicle("BMW", "4 wheeler", "3 Series GT 520D 2022","2.50Crore", "Black");
let vehicleNo4 = new Vehicle("Auto", "3 wheeler", "Bajaj RE Compact CNG","2.20Lakh", "Yellow - Black");
let vehicleNo5 = new Vehicle("Honda", "4 wheeler", "CIVIC","20.92Lakh", "Red");
console.log(vehicleNo1);
console.log(vehicleNo2);
console.log(vehicleNo3);
console.log(vehicleNo4);
console.log(vehicleNo5);
console.log(`*============================================================================================================================*`);

console.log(`2. Define Class College Which Contains Properties,Constructor & Member Function, Create 4 Objects From College Class..`);

class College {
    name;
    location;
    departments;
    university;
    constructor(name, location, departments, university){
        this.name = name;
        this.location = location;
        this.departments = departments;
        this.university = university;
    }
    collegeDetails() {
        console.log(`Details of College are:-->`,this.name,this.location,this.departments,this.university);
    }
}
let collegeNo1 = new College("K.I.T. College", "Kolhapur", "6", "Shivaji University");
let collegeNo2 = new College("Rajaram College", "Kolhapur", "8", "Shivaji University");
let collegeNo3 = new College("F.C. College", "Pune", "10", "Pune University");
let collegeNo4 = new College("D.Y.Patil College", "Mumbai", "12", "Mumbai Univercsity");
collegeNo1.collegeDetails();
collegeNo2.collegeDetails();
collegeNo3.collegeDetails();
collegeNo4.collegeDetails();


console.log(`*=============================================================================================================================*`);

console.log(`3. Traverse Object By Using for in loop...`);
function traverseObject(collegeNo1){
    for (const key in collegeNo1) {
        if (Object.hasOwnProperty.call(collegeNo1, key)) {
            const element = collegeNo1[key];
            console.log(`--> ${key}: ${element}`);
        }
    }
}
traverseObject(collegeNo1);
console.log(`-------------------------------------`);
traverseObject(collegeNo2);
console.log(`-------------------------------------`);
traverseObject(collegeNo3);
console.log(`-------------------------------------`);
traverseObject(collegeNo4);