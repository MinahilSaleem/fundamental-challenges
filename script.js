// Task1---Write a program that outputs the phrase "Hello, world!" to the console.
console.log("TASK 1");
console.log("hello world!");

// Task2---Write a Program to print this:

// My Name is “Your Name”
// I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
// I will become the best developer by hard work.
// I am making commitment to do code with consistency.

console.log("TASK 2");
console.log("My Name is Minahil Saleem");
console.log("I am Learning JavaScript via Full Stack Bootcamp of CodeSekho");
console.log("I will become the best developer by hard work.");
console.log("I am making commitment to do code with consistency.");

// Task3---Write a program that declares two variables, one with your name and
// one with a number value of your age. Concatenate the two variables and
// output the result to the console.

console.log("TASK 3");
let myName = "minahil saleem";
let age = 21;

console.log(`I am ${myName}. And I'm ${age} year old`);

//Task4---Repeat the coding task 2 of output by putting these strings in variables
// and then outputting variables.
console.log("TASK 4");
let name = "Minahil Saleem";
let JS = "JavaScript";
let bootchamp = "Full Stack Bootcamp of CodeSekho";
let bestDev = "best Developer";

console.log(`My Name is ${name} `);
console.log(`I am Learning ${JS} via ${bootchamp} .`);
console.log(`I will become the ${bestDev} by hard work.`);
console.log(`I am making commitment to do code with consistency.`);

//Task5---
//Initialize two variables and output their sum, minus, multiply and
// division.

console.log("TASK 5");
let a = 3;
let b = 7;

let sum = a+b;
let minus = a-b;
let multiply = a*b;
let divide = a/b;

console.log("a = 3, b = 7");
console.log(`Sum = ${sum}`);
console.log(`Minus = ${minus}`);
console.log(`Multiply = ${multiply}`);
console.log(`Divide = ${divide}`);

//Task6---Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using
// the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your Tasks
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark
// has a higher BMI than John.

console.log("TASK 6");

let johnMass = 60;
let johnHeight = 5.9;
let markMass = 69;
let markHeight = 6.1;
let markHigherBMI = true;

const johnBMI = johnMass/(johnHeight * johnHeight);
const markBMI = markMass/(markHeight * markHeight);

console.log(`John's Mass = ${johnMass}`);
console.log(`John's Height = ${johnHeight}`);
console.log(`Mark's Mass = ${markMass}`);
console.log(`Mark's Height = ${markHeight}`);

console.log(`John's BMI = ${johnBMI}`);
console.log(`Mark's BMI = ${markBMI}`);

console.log(`Mark BMI is Higher than John (${markHigherBMI})`);

