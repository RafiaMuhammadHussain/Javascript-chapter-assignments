//Problem 3
for(let count = 1; count <= 10;count++){
    document.writeln(`${count} <br>`);
}
document.writeln('<hr>')

// //Problem 4
let number = Number(prompt("Enter a number to show its multiplication table"));
let length = Number(prompt("Enter length multiplication table"));

document.writeln(`Multiplication table of ${number} <br>`);
document.writeln(`Length ${length} <br><br>`);

for(let i = 1; i <= length; i++){    
    document.writeln(`${number} x ${i} = ${number*i} <br>`);
}
document.writeln('<hr>')

//Problem 5
let fruits = ["apple","banana","mango","orange","strawberry"];
document.writeln(`${fruits[0]} <br> ${fruits[1]} <br> ${fruits[2]} <br> ${fruits[3]} <br> ${fruits[4]} <br><br>`);
for(i = 0; i <= 4; i++){
    document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);
}
document.writeln('<hr>')

//Problem 6
//Counting
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Reverse Counting
document.write("<b>Reverse counting:</b><br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Even Numbers
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Odd Numbers
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br><br>");

// Series
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.writeln('<hr>')

//Problem 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        document.write(userInput + " is <b>available</b> at index " + i + " in our bakery");
        break;
    }
}
if (found === false) {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery");
}
document.writeln('<hr>')

//Problem 8
let B = [24, 53, 78, 91, 12];

let largest = B[0]; 

for (let i = 1; i < B.length; i++) {
    if (B[i] > largest) {
        largest = B[i];
    }
}

document.write("Array items: " + B + "<br>");
document.write("The largest number is " + largest);
document.writeln('<hr>')

//Problem 9
let C = [24, 53, 78, 91, 12];

let smallest = C[0]; 

for (let i = 1; i < C.length; i++) {
    if (C[i] < smallest) {
        smallest = C[i];
    }
}

document.write("Array items: " + C + "<br>");
document.write("The smallest number is " + smallest);
document.writeln('<hr>');

//Problem 10
for(let i = 1; i <= 20; i++){
    document.writeln(`${5*i}, `);
}
