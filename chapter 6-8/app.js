//Problem 1
let a = 10;
document.writeln(`Result: <br>`);
document.writeln(`The value of a is: ${a} <br>` );
document.writeln(`.....................<br><br>`);
document.writeln(`The value of ++a is: ${++a} <br>`);
document.writeln(`Now thw value of a is: 11 <br><br>`);
document.writeln(`The value of a++ is: ${a++} <br>`);
document.writeln(`Now the value of a is: 12 <br><br>`);
document.writeln(`The value of --a is: ${--a} <br>`);
document.writeln(`Now the value of a is: 11 <br><br>`);
document.writeln(`The value of a-- is: ${a--} <br>`);
document.writeln(`Now the value of a is: 10 <br>`);


//Problem 2
let a2 = 2;
let b = 1;
let result = --a2 - --b + ++b + b--;

document.writeln(`a is ${a2} <br>`);
document.writeln(`b is ${b} <br>`);
document.writeln(`result is ${result} <br>`);

//Problem 3
let userName = prompt("Enter your name");
document.writeln("Hello " + userName + "! Welcome to our website. <br>");

//Problem 4
let number = prompt("Enter a number for multiplication table", 5);

document.writeln("<h3>Multiplication Table of " + number + "</h3>");

for (let i = 1; i <= 10; i++) {
    document.writeln(number + " x " + i + " = " + (number * i) + "<br>" );
}
//Problem 6
let sub1 = prompt("Enter first subject name");
let sub2 = prompt("Enter second subject name");
let sub3 = prompt("Enter third subject name");

let totalMarks = 100;

let marks1 = prompt("Enter obtained marks for " + sub1);
let marks2 = prompt("Enter obtained marks for " + sub2);
let marks3 = prompt("Enter obtained marks for " + sub3);

let totalObtained = Number(marks1) + Number(marks2) + Number(marks3);
let overallTotal = totalMarks * 3;
let percentage = (totalObtained / overallTotal) * 100;

document.writeln("<table border='1'>");

document.writeln("<tr>");
document.writeln("<th>Subject</th>");
document.writeln("<th>Total Marks</th>");
document.writeln("<th>Obtained Marks</th>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + sub1 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + marks1 + "</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + sub2 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + marks2 + "</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>" + sub3 + "</td>");
document.writeln("<td>" + totalMarks + "</td>");
document.writeln("<td>" + marks3 + "</td>");
document.writeln("</tr>");

document.writeln("</table>");

document.writeln("Percentage: " + percentage + "%")