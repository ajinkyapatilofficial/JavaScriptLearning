class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id,
        this.emp_name = emp_name,
        this.emp_dept = emp_dept,
        this.emp_salary = emp_salary,
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000,"TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000,"Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000,"TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000,"Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000,"Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000,"TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000,"Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1. Sort the "Array_employess" in ascending order of employees ID's & log employees details- Id, Name, Department`);
array_employees.sort((empID1,empID2) => {
   return empID1.emp_id > empID2.emp_id ? 1 : -1;
});
array_employees.forEach((currentValue)=> {
    console.log(`Employee Id --> ${currentValue.emp_id}, Name --> ${currentValue.emp_name}, Department --> ${currentValue.emp_dept}`);
});

console.log(`-------------------------------------------------------------------------------------\n`);

console.log(`2. Sort the "array_employees" in ascending order of employees department & log id, dept & company`);
array_employees.sort((empDept1,empDept2) => {
    return empDept1.emp_dept > empDept2.emp_dept ? 1 : -1;
 });
 array_employees.forEach((currentValue)=> {
     console.log(`Employee Id --> ${currentValue.emp_id}, Department --> ${currentValue.emp_dept} & Company --> ${currentValue.emp_company}`);
 });

console.log(`-------------------------------------------------------------------------------------\n`);
console.log(`3. Sort the array in Descending order of employees salary & log Name, Salary & Company`);
array_employees.sort((empSal1,empSal2) => {
    return empSal1.emp_salary > empSal2.emp_salary ? -1 : 1;
 });
 array_employees.forEach((currentValue)=> {
     console.log(`Employee Name --> ${currentValue.emp_name}, Salary --> ${currentValue.emp_salary} & Company --> ${currentValue.emp_company}`);
 });
