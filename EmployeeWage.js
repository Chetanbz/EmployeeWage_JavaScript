
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

let dailyWageArray = new Array();
let mapDailyHrs    = new Map();
let mapDailyWage   = new Map();
let count = 0;

let empDailyHrsAndWageArr = new Array();

for (var i = 1; i <= maxWorkDay; i++){
    employeeType = Math.floor(Math.random()*10)%3;
    let empHrs  = calculateEmpHrs(employeeType);
    monthWorkHrs += empHrs;
    if(monthWorkHrs >=maxWorkHrsMonth){
        monthWorkHrs = maxWorkHrsMonth;
        break;
    }
    empDailyHrsAndWageArr.push({
        dayNum : count,
        dayHrs : empHrs,
        dayWage : empHrs*WAGE_PER_HOURS,

        toString (){
            return "\nDay " + this.dayNum + " Working Hours is " + this.dayHrs  +" Work Daily Wage " + this.dayWage;
        }
    });
}
console.log("Daily Wage is "+ dailyWageArray);

let totalMonthWage = monthWorkHrs*WAGE_PER_HOURS;
console.log("Total Employee Hrs " + monthWorkHrs+ " Employee Month Wgae is " + totalMonthWage);

console.log("Object is : " + empDailyHrsAndWageArr);


// UC9 
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let totalHours = Array.from(mapDailyHrs.values()).
                 filter(dailyHours => dailyHours >0).reduce(findTotal,0);

let totalWage = Array.from(mapDailyWage.values()).
                 filter(dailyHours => dailyHours >0).reduce(findTotal,0);                


console.log("UC 9A -- " + "total Hours :" + totalHours + " total Wage " + totalWage);




function calculateEmpHrs(employeeType){
    if(employeeType == IS_PART_TIME){
        empHrs = 4;
    }
    else if (employeeType == IS_FULL_TIME){
        empHrs = 8 ;
    }
    else {
        empHrs = 0;
    }
    count++;
    dailyWageArray.push(empHrs*WAGE_PER_HOURS);
    mapDailyHrs.set(count,empHrs);
    mapDailyWage.set(count,empHrs*WAGE_PER_HOURS);

    return empHrs;
}




let noWorkDays = new Array();
let partWorkDay = new Array();
let fullWorkDay = new Array();

mapDailyHrs.forEach((value,key,map) => {
    if(value == 8) fullWorkDay.push(key);
    else if (value == 4) partWorkDay.push(key);
    else noWorkDays.push(key);
});

console.log("UC9B --" + "Full Work Days Are " + fullWorkDay);
console.log("UC9B --" +"Part Work days are " + partWorkDay);
console.log("No work days " + noWorkDays);










let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
dailyWageArray.forEach(sum);

function totalWages (totalWage,dailyWage){
    return totalWage +dailyWage;
}

let dailycntrl = 0;
function mapDayWithWage(dailyWage){
    dailycntr++
}

