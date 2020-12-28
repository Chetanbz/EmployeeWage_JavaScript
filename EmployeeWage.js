const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;

if (empCheck == IS_ABSENT ){
    console.log("Employee is Absent, Exit from program");
    return;
}else{
    console.log("Employee is Present");
}


//UC2
const IS_PART_TIME = 0;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
let totalEmployeeWage = 0;
let partTimeCheck = Math.floor(Math.random()*10)%2;

if(partTimeCheck == IS_PART_TIME){
    empHrs +=4;
}
else{
    empHrs +=8;
}

totalEmployeeWage = empHrs*WAGE_PER_HOURS;
console.log("Employee Wage is " + totalEmployeeWage );
