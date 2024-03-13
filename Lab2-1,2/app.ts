let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is';
let permmit: boolean = true;

const result = number1 + number2;
if (permmit) {
    console.log(phrase + result);

} else {
    console.log('Not show result');
}

// function add(x: number = 5) {
//     let phrase: string = 'Result is';

//     phrase = 10;
//     x = '2.8';

//     return phrase + x;
// }
// let result: number = add(9);

// var person: object = {
//     name: 'Nguyen',
//     age: 18
// } as const;


// console.log(person);

// toa them mang chuoi, tao them mang object
let hobbies: string[] = ['Sport', 'Cooking'];

hobbies.forEach(Element=> {
    console.log(Element.length);

})


//Bai 2

enum Role {ADMIN, SUPERADMIN, DEVELOPMENT}

// console.log(Role.ADMIN);

const person : {
    name: string,
    age: number,
    hobbies: string[],
    role: number,//string
    roleuple: [number, string]
} = {
    name: 'Chí Nguyên',
    age : 19,
    hobbies: ['Game', 'Music'],
    role: 1,//Role.ADMIN
    roleuple: [2, 'author']
}

let favoriteActivities : any[];
favoriteActivities = [5, 'Music', true];

if(person.role === Role.DEVELOPMENT){
    console.log('is development');
    
}

person.roleuple.push('admin');
person.roleuple[1] = 10;
person.roleuple = [0, 'admin', 'user'];



type Combinale = number | string;
function combine ( input1: Combinale, input2: number|string, resultConversion:'as-number' | 'as-text'){
    let result;
    if(typeof input1==='number'&& typeof input2==='number' ||resultConversion==='as-number'){
        result = parseFloat(input1) + parseFloat(input2);
    }else {
        result = input1.toString() + input2.toString();
    }
}

const CombineNumber = combine(30,26, 'as-number');
console.log(CombineNumber);

const CombineStringNumber = combine('30', '26', 'as-number');
console.log(CombineStringNumber);

const CombineText = combine('Typescript Vs', 'Javascript', 'as-text');
console.log(CombineText);


var a = null;
console.log('a');
console.log(typeof(a));

var b = null;
console.log('b');
console.log(typeof(b));
console.log(undeclaredVar);

let userInput: unknown;
let userName: string;

userInput= 5;
userInput= 'Typescipt';
userName = "userInput";
userName = <string> userInput;
if(typeof userInput === 'string'){
    userName = userInput;
}






