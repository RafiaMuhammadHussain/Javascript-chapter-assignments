//Problem 1
let currentDateTime = new Date();
document.write(currentDateTime + `<hr`);

//Problem 2
let month = new Date().toLocaleString('default',{month:"long"});
document.write(`Current Month: ${month} <hr>`);

//Problem 3
let day = new Date().toLocaleString('default',{weekday:"short"});
document.write(`Today is ${day} <hr>`);

//Problem 4
let today = new Date();
let day1 = today.getDay();

if (day1 === 0 || day1 === 6) {
    document.write(`It's Fun day <hr>`);
} else{
    document.write(`It's Week Day <hr>`)
}

//Problem 5
let date = new Date();
let currentDate = date.getDate();

if (currentDate < 16) {
    document.write(`First fifteen days of the month <hr>`);
} else {
    document.write(`Last days of the month <hr>`);
}

//Problem 6
let d = new Date();

document.write(`Current date: ${d} <br>`)
milliseconds = d.getTime();
document.write(`Elapsed milliseconds since January 1, 1970: ${milliseconds} <br>`);
minutes = d.getTime() / (1000 * 60);
document.write(`Elapsed minutes since January 1, 1970: ${minutes} <hr>`);

//Problem 7
let currentDate1 = new Date();
let hours = currentDate1.getHours();

if (hours < 12) {
    document.write(`Its AM <hr>`);
} else {
    document.write(`Its PM <hr>`);
}

//Problem 8
let laterDate = new Date("December 31, 2026");
document.write(`Later date: ${laterDate} <hr>`);

//Problem 9
let ramadanDate = new Date("February 19, 2026");
let today1 = new Date();
let diff = today - ramadanDate;
let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days have passed since 1st Ramadan, 2026 <hr>");

//Problem 10
let referenceDate = new Date();
let beginning = new Date("January 1, 2026");
let sum = referenceDate - beginning;
let seconds = Math.floor(sum / 1000);
document.write(`On reference date ${referenceDate}, ${seconds} seconds had passed since beginning of 2026 <hr>`);

//Problem 11
let currentDate2 = new Date();
document.write("current date: " + currentDate2 + "<br>");
currentDate2.setHours(currentDate2.getHours() - 1);
document.write("1 hour ago, it was " + currentDate2 + "<hr>");

//Problem 12
let currentDate3 = new Date();
document.write("current date:" + currentDate3 + "<br>");
currentDate3.setFullYear(currentDate3.getFullYear() - 100);
document.write("100 years back, it was" + currentDate3 + "<hr>");

//Problem 13
let age = prompt("Enter your age");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write("Your age is: " + age + "<br>");
document.write("Your birth year is: " + birthYear + "<hr>");

//Problem 14
let customerName = "ABC Customer";
let months = "May";
let units = 410;
let chargesPerUnit = 16;
let netAmount = units * chargesPerUnit;
let lateSurcharge = 350;
let grossAmount = netAmount + lateSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + month + "</b><br>");
document.write("Number of units: <b>" + units + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit.toFixed(2) + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmount.toFixed(2) + "</b><br>");
document.write("Late Payment Surcharge: <b>" + lateSurcharge.toFixed(2) + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount.toFixed(2) + "</b>");