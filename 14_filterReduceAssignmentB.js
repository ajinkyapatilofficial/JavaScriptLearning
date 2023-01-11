console.log(`Assignment using filter() and reduce().`);
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

const array_emps= [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all employees from "Wipro" company.`);
const empWipro = array_emps.filter( (currentEmp)=> {
    return currentEmp.emp_company == "Wipro" 
});
empWipro.forEach( (emp) => {
    console.log(emp);
});

console.log(`----------------------------------------------------------------------------------------------------\n`);
console.log(`2. Find all the employees from "IT" or "HR" dept.`);
const empDept = array_emps.filter( (currentEmp)=> {
    return currentEmp.emp_dept == "IT" || currentEmp.emp_dept == "HR"
})
empDept.forEach(depts => {
    console.log(depts);
});

console.log(`----------------------------------------------------------------------------------------------------\n`);
console.log(`3. Find all the employees whose emp id's are greater than 50.`);
const empID = array_emps.filter( (currentEmp)=> {
    return currentEmp.emp_id > 50
})
empID.forEach( empid =>{
    console.log(empid);
})

console.log(`----------------------------------------------------------------------------------------------------\n`);
console.log(`4. Find all the employees whose name start with "A" or "V" or "M"`);
const startNameAVM = array_emps.filter(currentEmp => {
    if(currentEmp.emp_name.startsWith("A") || currentEmp.emp_name.startsWith("V") || currentEmp.emp_name.startsWith("M")){
        console.log(currentEmp);
    }
})

console.log(`----------------------------------------------------------------------------------------------------\n`);
console.log(`5. Find the average salary of the employee for all departments.`);
sum = 0;
const avgSalary = array_emps.filter(currentEmp => sum = sum + currentEmp.emp_salary)
const finalAvgSalary = avgSalary.reduce( (_runningTotal, _currentEmp)=> {
    return sum / array_emps.length
},0 );
console.log(`Average salary of all the employees is -->`,finalAvgSalary);

console.log(`----------------------------------------------------------------------------------------------------\n`);
console.log(`6. Find the average salary for "IT" department`);
const avgSal = array_emps.filter(currentEmp =>{
    return currentEmp.emp_dept == "IT"
});
 
const avgSalIT = avgSal.reduce((runningTotal, empSal)=>{
    return runningTotal + empSal.emp_salary;
},0 );
console.log(`Average salary of IT department is --> ${avgSalIT/avgSal.length}`);
// sum = 0;
// const avgSalIT = array_emps.filter(currentEmp => currentEmp.emp_dept == "IT")
// const finalResult=   avgSalIT .reduce((_runningTotal, currentEmp) => (50000+ 40000+ 75000) / avgSalIT.length);
// console.log(`Average salary of IT department is:--> `,finalResult);