
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
let totalEmployeeWage = 0;
let employeeType = Math.floor(Math.random()*10)%3;


totalEmployeeWage = calculateEmpHrs(employeeType)*WAGE_PER_HOURS;
console.log("Employee Wage is " + totalEmployeeWage );


function calculateEmpHrs(employeeType){
    if(employeeType == IS_PART_TIME){
        empHrs +=4;
    }
    else if (employeeType == IS_FULL_TIME){
        empHrs +=8 ;
    }
    return empHrs;
}