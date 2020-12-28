
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOURS = 20;
const maxWorkDay = 20;
const maxWorkHrsMonth = 160;

let empHrs = 0;
var monthWorkHrs =0 ;
let employeeType;

for (var i = 1; i <= maxWorkDay; i++){
    employeeType = Math.floor(Math.random()*10)%3;
    monthWorkHrs += calculateEmpHrs(employeeType);
    if(monthWorkHrs >=maxWorkHrsMonth){
        monthWorkHrs = maxWorkHrsMonth;
        break;
    }
}

let totalMonthWage = monthWorkHrs*WAGE_PER_HOURS;
console.log("Total Employee Hrs " + monthWorkHrs+ " Employee Month Wgae is " + totalMonthWage);

function calculateEmpHrs(employeeType){
    if(employeeType == IS_PART_TIME){
        empHrs = 4;
    }
    else if (employeeType == IS_FULL_TIME){
        empHrs = 8 ;
    }
    return empHrs;
}