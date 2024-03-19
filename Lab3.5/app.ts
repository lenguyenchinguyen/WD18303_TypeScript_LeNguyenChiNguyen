//Arrow funciton
console.log("Arrow funciton");
const double = (number: number) => number * 2;
// function double(number:number){
//   return  number * 2
// }
console.log(double(3));

//Function return
console.log("Function return");

const sum = (a: number, b: number): number => {
    return a + b;
}
console.log("Tổng hai số là:", sum(1, 2));

const stringrev = (str: string): string => {
    return str.split('').reverse().join('');
}
console.log(stringrev('Nguyen'));

//Function as types
console.log("Function as types");
type SumFunction = (a: number, b: number) => number;

const sumF: SumFunction = (a: number, b: number): number => {
    return a + b;
};
const result = sum(5, 10);
console.log(result);

//Function with parameters
console.log("Function with parameters");

const sumArray = (numbers: number[]): number => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5];
const sum2 = sumArray(numbers);

console.log(sum2);

//Default parameter
console.log("Default parameter");

const square = (number = 2): number => {
    return number * number;
}

const result1 = square();
const result2 = square(5);

console.log(result1, result2);

//Optional parameter
console.log("Optional parameter");

const greet = (name?: string): string => {
    if (name) {
        return `Xin chào ${name}!`;
    } else {
        return "Xin chào!";
    }
}
console.log(greet("nguyen"));
console.log(greet());

//Spread operators
console.log("Spread operators");

const sumNumbers = (...numbers: number[]): number => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

const arrnumber = [1, 2, 3, 4, 5];
const sum3 = sumNumbers(...arrnumber); // sum: 15

console.log(sum3);

//Rest parameter
console.log("Rest parameter");

function sumNum(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

const sum4 = sumNum(1, 2, 3); // sum1: 6
const sum5 = sumNum(1, 2, 3, 4, 5); // sum2: 15

console.log(sum4, sum5);