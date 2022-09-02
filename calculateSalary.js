const gralServicesSalary = 1317712;
const nannySalary = 1850000;

const calculateHour = (salary) => {
    return (parseInt(salary)/240).toFixed(2)
}

const calculateExtraHour = (salary, isHoliday) => {
    const hour = calculateHour(salary)

    if (isHoliday) {
        return ((hour * 175) / 100).toFixed(2)
    } else {
        return ((hour * 125) / 100).toFixed(2)
    }
    
}

const calculateDay = (salary) => {
    return (calculateHour(salary) * 8).toFixed(2)
}

const calculateHoliday = (salary) => {
    return (calculateExtraHour(salary, true) * 8).toFixed(2)
}

const calculateMonth = (salary, HolidaysWorked, extraHours) => {
    const totalHolidays = calculateHoliday(salary) * HolidaysWorked
    const totalExtraHours = calculateExtraHour(salary, false) * extraHours
    return salary + totalHolidays + totalExtraHours
}

const calculataTwoWeeks = (salary, HolidaysWorked, extraHours) => {
    return calculateMonth(salary, HolidaysWorked, extraHours) / 2
}

// Ordinary hour calculation
console.log(calculateHour(gralServicesSalary))
console.log(calculateHour(nannySalary))
//Extra hour calculation 
console.log(calculateExtraHour(gralServicesSalary, false))
console.log(calculateExtraHour(nannySalary, false))
// Extra hour calculation for holiday
console.log(calculateExtraHour(gralServicesSalary, true))
console.log(calculateExtraHour(nannySalary, true))
// Day calculation
// console.log(calculateDay(gralServicesSalary))
// console.log(calculateDay(nannySalary))
// // Day calculation for holiday
// console.log(calculateHoliday(gralServicesSalary))
// console.log(calculateHoliday(nannySalary))
// Month calculation
console.log(calculateMonth(gralServicesSalary, 0, 0))
console.log(calculataTwoWeeks(gralServicesSalary, 0,0))

