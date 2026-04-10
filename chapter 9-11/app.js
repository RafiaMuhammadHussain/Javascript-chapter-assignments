//Problem 1
let cityName = prompt(`What's your city name?`);
if (cityName === "Karachi") {
    document.writeln(`Welcome to city of lights <br>`);
} else {
    document.writeln(`Other City <br>`);
}

//Problem 2
let gender = prompt(`Enter your gender`);
if (gender === "male") {
    document.writeln(`Good Morning Sir <br>`);
} else {
    document.writeln(`Good Morning Ma'am <br>`);
}

//Problem 3
let trafficLight = prompt(`Enter color of traffic signals`);
if (trafficLight === "Red") {
    document.writeln(`Must Stop <br>`);
} else if (trafficLight === "Yellow") {
    document.writeln(`Ready to move <br>`);
} else if (trafficLight === "Green") {
    document.writeln(`Move now <br>`);
} else {
    document.writeln(`Please enter right color <br>`);
}

//Problem 4
let fuel = prompt(`Enter you car fuel in litres`);
if (fuel <= "0.25litres"){
    document.writeln(`Please refill the furl in your car <br>`);
} else{
    document.writeln(`Fuel is enough <br>`);
}

//Problem 5
// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// c
var c = 12;

if (c++ === 13){
    alert("condition 1 is true");
}

if (c === 13){
    alert("condition 2 is true");
}

if (++c < 14){
    alert("condition 3 is true");
}

if (c === 14){
    alert("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// e
if (true){
    alert("True");
}

if (false){
    alert("False");
}
// f
if ("car" < "cat"){
    alert("car is smaller than cat");
}

//Problem 6
// Input marks
let subject1 = prompt("Enter marks of subject 1:");
let subject2 = prompt("Enter marks of subject 2:");
let subject3 = prompt("Enter marks of subject 3:");

let totalMarks = 300;

// Calculate obtained marks
let obtainedMarks = subject1 + subject2 + subject3;

// Calculate percentage
let percentage = (obtainedMarks / totalMarks) * 100;

// Grade & Remarks
let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

// Output
document.writeln(`<h1>Marks Sheet</h1>`);

document.writeln(`Total marks: ${totalMarks} <br>`);
document.writeln(`Marks obtained: ${obtainedMarks} <br>`);
document.writeln(`Percentage: ${percentage.toFixed(0)}% <br>`);
document.writeln(`Grade: ${grade} <br>`);
document.writeln(`Remarks: ${remarks}`);

//Problem 7
let secretNumber = 7;

let userGuess = prompt("Guess the secret number (1 to 10):");
if (userGuess === secretNumber) {
    document.writeln("Bingo! Correct answer <br>");
}
else if (userGuess +5  === secretNumber) {
    document.writeln("Close enough to the correct answer <br>");
}
else {
    document.writeln("Try again! <br>");
}

//Problem 8
let number = prompt("Enter a number of your own choice:");

if (number % 3 === 0) {
    document.writeln(`${number} is divisible by 3 <br>`);
} else {
    document.writeln(`${number} is NOT divisible by 3 <br>`);
}

//Problem 9
let num = prompt("Enter a number:");

if (num % 2 === 0) {
    document.writeln(`${num} is an EVEN number <br>`);
} else {
    document.writeln(`${num} is an ODD number <br>`);
}

//Problem 10
let temp = prompt("Enter temperature:");

if (temp > 40) {
    document.writeln(`It is too hot outside. <br>`);
}
else if (temp > 30) {
    document.writeln(`The Weather today is Normal. <br>`);
}
else if (temp > 20) {
    document.writeln(`Today’s Weather is cool.`);
}
else if (temp > 10) {
    document.writeln(`OMG! Today’s weather is so Cool.`);
}
else {
    document.writeln(`Weather is cold. <br>`);
}

//Problem 11
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operator = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operator === "+") {
    result = num1 + num2;
}
else if (operator === "-") {
    result = num1 - num2;
}
else if (operator === "*") {
    result = num1 * num2;
}
else if (operator === "/") {
    result = num1 / num2;
}
else if (operator === "%") {
    result = num1 % num2;
}
else {
    document.writeln(`Invalid operator <br>`);
}

if (result !== undefined) {
    document.writeln(`Result is: ${result} <br>`);
}