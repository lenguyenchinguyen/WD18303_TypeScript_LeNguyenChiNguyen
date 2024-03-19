"use strict";
let f_name = (number) => {
    return (number % 2) === 0 ? "true" : "false8";
};
console.log(f_name(4));
console.log(f_name(11));
const sum = (x, y) => {
    return x + y;
};
console.log(sum(1, 2));
const printOutput = (output) => {
    console.log(output);
};
printOutput("tổng là");
printOutput(sum(1, 3));
const hello = (msg = "world!") => {
    return `hello ${msg}`;
};
console.log(hello());
console.log(hello("NGuyên"));
let sum1 = (x = 5, y) => {
    return x + y;
};
const tong = (output) => console.log("Result:" + output);
tong(sum1(3));
tong(sum1(undefined, 5));
tong(sum1(3, 5));
let person = {
    name: 'Typescript',
    age: 11
};
const salary = {
    grade: 'A',
    basic: '&2900'
};
const summary = Object.assign(Object.assign({}, person), salary);
console.log(summary);
