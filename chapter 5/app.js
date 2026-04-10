//Problem 1
let num1 = 3;
let num2 = 5;
document.writeln(`Sum of ${num1} and ${num2} is ${num1 + num2} <hr>`);

//Problem 2
document.writeln(`Sum of ${num1} and ${num2} is ${num1 - num2} <br>`);
document.writeln(`Sum of ${num1} and ${num2} is ${num1 * num2} <br>`);
document.writeln(`Sum of ${num1} and ${num2} is ${num1 / num2} <hr>`);

//Problem 3
//a
let num;

//b
document.writeln(`Value after variable declaration is ${num} <br>`);

//c
num = 5;

//d
document.writeln(`Initialize value: ${num} <br>`);

//e
num++;

//f
document.writeln(`Value after increement is: ${num} <br>`)

//g
num = num + 7;

//h
document.writeln(`Value after addition is: ${num} <br>`);

//i
num--;

//j
document.writeln(`Value after decreement is: ${num} <br>`);

//k
num % 3;
document.writeln(`The remainder is: ${num % 3} <hr>`);

//Problem 4
let ticket = 600;
document.writeln(`Total cost to buy 5 tickets to a movie is ${ticket*5}PKR <hr>`)

//Problem 5
let table = 7;
document.writeln(`<b>Table of ${table}</b> <br>`);
document.writeln(`${table} × 1 = ${table*1} <br>`);
document.writeln(`${table} × 2 = ${table*2} <br>`);
document.writeln(`${table} × 3 = ${table*3} <br>`);
document.writeln(`${table} × 3 = ${table*4} <br>`);
document.writeln(`${table} × 3 = ${table*5} <br>`);
document.writeln(`${table} × 3 = ${table*6} <br>`);
document.writeln(`${table} × 3 = ${table*7} <br>`);
document.writeln(`${table} × 3 = ${table*8} <br>`);
document.writeln(`${table} × 3 = ${table*9} <br>`);
document.writeln(`${table} × 3 = ${table*10} <hr>`);

//Problem 6
// Celsius to Fahrenheit

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

document.writeln(`${celsius}°C is ${fahrenheit}°F <br>`);


// Fahrenheit to Celsius

let fahrenheitTemp = 70;
let celsiusTemp = (fahrenheitTemp - 32) * 5/9;

document.writeln(`${fahrenheitTemp}°F is ${celsiusTemp}°C <hr>`);

//Problem 7
let priceitem1 = 650;
let quantityitem1 = 3;
let priceitem2 = 100;
let quantityitem2 = 7;
let shippingCharges = 100;
//totals
let totalItem1 = priceitem1 * quantityitem1;
let totalItem2 = priceitem2 * quantityitem2;
let totalCost = totalItem1 + totalItem2 + shippingCharges;

document.writeln(`<h2>Shopping Cart</h2>`)
document.writeln(`Price of 1 item is ${priceitem1} <br>`);
document.writeln(`Quantity of item 1 is ${quantityitem1} <br>`);
document.writeln(`Price of item 2 is ${priceitem2} <br>`);
document.writeln(`Quantity of item 2 is ${quantityitem2} <br>`);
document.writeln(`Shipping Charges ${shippingCharges} <br><br>`)
document.writeln(`Total cost of your order ${totalCost} <hr>`);

//Problem 8
let totalMarks = 980;
let marksObtained = 804;
let percentage = marksObtained / totalMarks * 100;

document.writeln(`<h2>Marks Sheet</h2>`)
document.writeln(`Total Marks: ${totalMarks} <br>`);
document.writeln(`Marks Obtained: ${marksObtained} <br>`);
document.writeln(`Percentage: ${percentage}% <hr>`);

//Problem 9
let totalInPKR = (10 * 104.80) + (25 * 28);
document.writeln(`Total currency in PKR is ${totalInPKR} <hr>`);

//Problem 10
let number = 4;
let result = ((number + 5) * 10) / 2;
document.writeln(`Final result is ${result} <hr>`);

//Problem 11
let currentYear = 2026;
let birthYear = 1996;

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.writeln("<h2>Age Calculator</h2>");

document.writeln("Current Year: " + currentYear + "<br>");
document.writeln("Birth Year: " + birthYear + "<br>");

document.writeln("They are either " + age2 + " or " + age1 + " years old." + "<hr>");

//Problem 12
let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.writeln("<h2>The Geometrizer</h2>");
document.writeln("Radius of a circle: " + radius + "<br>");
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area + "<hr>");

//Problem 13
document.writeln(`<h2>The Lifetime Supply Calculator</h2>`);
let favSnack = "biscuits";
let currentAge = 18;
let maxAge = 50;
let estimatedAmount = 2;
let total = (maxAge - currentAge) *365 * estimatedAmount;

document.writeln(`Favourite Snack: ${favSnack} <br>`);
document.writeln(`Current age: ${currentAge} <br>`);
document.writeln(`Estimated Maximum Age: ${maxAge} <br>`);
document.writeln(`Amount of snacks per day: ${estimatedAmount} <br>`);
document.writeln(`You will need ${total} biscuits to last you until the ripe old age of ${maxAge}`);