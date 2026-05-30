// Problem 1
let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    document.write("It is a Number<hr>");
}
else if (ascii >= 65 && ascii <= 90) {
    document.write("It is an Uppercase Letter<hr>");
}
else if (ascii >= 97 && ascii <= 122) {
    document.write("It is a Lowercase Letter<hr>");
}
else {
    document.write("Invalid input<hr>");
}

// Problem 2
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    document.write(`The larger integer is: ${num1}<hr>`);
}
else if (num2 > num1) {
    document.write(`The larger integer is: ${num2}<hr>`);
}
else {
    document.write(`Both integers are equal.<hr>`);
}

// Problem 3
let num = Number(prompt("Enter a number:"));
if (num > 0) {
    document.write("The number is Positive<br>");
} 
else if (num < 0) {
    document.write("The number is Negative<br>");
} 
else {
    document.write("The number is Zero<hr>");
}

// Problem 4
let char = prompt("Enter a single character:").toLowerCase();
if (char.length === 1) {
    let isVowel = (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");
    document.write(`Is it a vowel? ${isVowel}<hr>`);
} 
else {
    document.write("Please enter only one character<hr>");
}

// Problem 5
// a
let correctPassword = "12345";

// b
let userPassword = prompt("Enter your password");

// c
// i
if (userPassword === "" || userPassword === null) {
    document.write("Please enter your password<hr>");
} 
// ii
else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password<hr>");
} 
else {
    document.write("Incorrect password<hr>");
}

// Problem 6
let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}
document.write(`${greeting}<hr>`);

// Problem 7
let time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));
let hour24 = parseInt(time / 100);

if (hour24 >= 0 && hour24 < 12) {
    document.write("Good Morning<br>");
}
else if (hour24 >= 12 && hour24 < 17) {
    document.write("Good Afternoon<br>");
}
else if (hour24 >= 17 && hour24 < 21) {
    document.write("Good Evening<br>");
}
else if (hour24 >= 21 && hour24 <= 23) {
    document.write("Good Night<br>");
}
else {
    document.write("Invalid time<br>");
}