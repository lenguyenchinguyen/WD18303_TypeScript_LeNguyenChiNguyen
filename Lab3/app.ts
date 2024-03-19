let f_name = (number: number) :boolean => {
    return (number % 2) === 0 ? "true":"false8";
}
console.log(f_name(4));
console.log(f_name(11));

const sum = (x: number, y:number)=> {
    return x + y ;
}
console.log(sum(1,2));

const printOutput = (output: string|number) => {
    console.log(output);  
}
printOutput("tổng là");
printOutput(sum(1,3))


const hello = (msg: string = "world!"):string => {
    return `hello ${msg}`;

}
console.log(hello());
console.log(hello("NGuyên"));

let sum1 = (x:number=5 , y?:number) => {
    return x+ <number>y; 
}
const tong = ( output: string|number)=> console.log("Result:" + output);

tong(sum1(3));
tong(sum1(undefined,5));
tong(sum1(3,5))

let person : {
    name: string,
    age: number
} = {
    name: 'Typescript',
    age: 11
}
const salary : {
    grade: string,
    basic: string
} = {
    grade: 'A',
    basic: '&2900'
}

const summary = {...person, ...salary};
console.log(summary);


