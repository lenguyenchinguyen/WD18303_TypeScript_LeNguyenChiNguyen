var number1 = 5;
var number2 = 2.8;
var phrase = 'Result is';
var permmit = true;
var result = number1 + number2;
if (permmit) {
    console.log(phrase + result);
}
else {
    console.log('Not show result');
}
// function add(x: number = 5) {
//     let phrase: string = 'Result is';
//     phrase = 10;
//     x = '2.8';
//     return phrase + x;
// }
// let result: number = add(9);
var person = {
    name: 'Nguyen',
    age: 18
};
console.log(person);
// toa them mang chuoi, tao them mang object
var hobbies = ['Sport', 'Cooking'];
hobbies.forEach(element, function (string) {
    console.log(element.length);
});
