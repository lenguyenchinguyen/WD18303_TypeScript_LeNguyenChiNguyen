"use strict";
//Arrow funciton
console.log("Arrow funciton");
const double = (number) => number * 2;
// function double(number:number){
//   return  number * 2
// }
console.log(double(3));
//Function return
console.log("Function return");
const sum = (a, b) => {
    return a + b;
};
console.log("Tổng hai số là:", sum(1, 2));
const stringrev = (str) => {
    return str.split('').reverse().join('');
};
console.log(stringrev('Nguyen'));
//Function as types
console.log("Function as types");
const sumF = (a, b) => {
    return a + b;
};
const result = sum(5, 10);
console.log(result);
//Function with parameters
console.log("Function with parameters");
const sumArray = (numbers) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};
const numbers = [1, 2, 3, 4, 5];
const sum2 = sumArray(numbers);
console.log(sum2);
//Default parameter
console.log("Default parameter");
const square = (number = 2) => {
    return number * number;
};
const result1 = square();
const result2 = square(5);
console.log(result1, result2);
//Optional parameter
console.log("Optional parameter");
const greet = (name) => {
    if (name) {
        return `Xin chào ${name}!`;
    }
    else {
        return "Xin chào!";
    }
};
console.log(greet("nguyen"));
console.log(greet());
//Spread operators
console.log("Spread operators");
const sumNumbers = (...numbers) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};
const arrnumber = [1, 2, 3, 4, 5];
const sum3 = sumNumbers(...arrnumber); // sum: 15
console.log(sum3);
//Rest parameter
console.log("Rest parameter");
function sumNum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
const sum4 = sumNum(1, 2, 3); // sum1: 6
const sum5 = sumNum(1, 2, 3, 4, 5); // sum2: 15
console.log(sum4, sum5);
