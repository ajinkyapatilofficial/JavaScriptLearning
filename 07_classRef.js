class Employee{
    constructor(Name, Id, Age, City){
        this.name = Name;
        this.id = Id;
        this.age = Age;
        this.city = City;
    } 
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);