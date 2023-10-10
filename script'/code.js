let hoursWorked = +prompt ("enter your hours worked:")
let workRate = +prompt ("Work rate:")
let salary = hoursWorked * workRate
let curFormat = Intl.NumberFormat()

console.log(`your salary is R${curFormat.format(salary)}`);
