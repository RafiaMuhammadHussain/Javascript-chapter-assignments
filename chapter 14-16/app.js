//Problem 1
let empty1 = [];

//Problem 2
let empty2 = new Array();

//Problem 3
let string = ["apple","mango","banana","orange"];

//Problem 4
let numbers = [1,2,3,4];

//Problem 5
let booleans = [true,false];

//Problem 6
let mixedArrays = ["Apple", 1, true];

// Problem 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.writeln(`<h4>Qualifications:</h4>`);

document.writeln(`<ol>
<li>${qualifications[0]}</li>
<li>${qualifications[1]}</li>
<li>${qualifications[2]}</li>
<li>${qualifications[3]}</li>
<li>${qualifications[4]}</li>
<li>${qualifications[5]}</li>
<li>${qualifications[6]}</li>
<li>${qualifications[7]}</li>
</ol> <hr>`);

//Problem 8
let studentNames = ["Michael","John","Tony"];
let scores = [320,230,480];
let percentage = [320/500 *100, 230/500*100, 480/500 *100];

document.writeln(`Score of ${studentNames[0]} is ${scores[0]}. Percentage:${percentage[0]}% <br>`);
document.writeln(`Score of ${studentNames[1]} is ${scores[1]}. Percentage:${percentage[1]}% <br>`);
document.writeln(`Score of ${studentNames[2]} is ${scores[2]}. Percentage:${percentage[2]}% <hr>`);

//Problem 9
let colors = ["Red","Green","Blue","Yellow"];
alert(colors);
//a
let color1 = prompt("What color you want to add in the beginning");
colors.unshift(color1);
alert(colors);
//b
let color2 = prompt("What color you want to add to the end");
colors.push(color2);
alert(colors);
//c
colors.unshift("gray","brown");
alert(colors);
//d
colors.shift();
alert(colors);
//e
colors.pop();
alert(colors);
// f
let indexAdd = prompt("At which index you want to add color?");
let colorName = prompt("Enter color name to add");
colors.splice(indexAdd, 0 ,colorName);
alert(colors);

// g
let indexDelete = prompt("At which index you want to delete color?");
let deleteCount = prompt("How many colors you want to delete?");
colors.splice(indexDelete, deleteCount);
alert(colors);

//Problem 10
let studentsScores = [320,230,480,120];
document.writeln(`Scores of Students : ${studentsScores} <br>`);
let sortScores = studentsScores.sort();
document.writeln(`Ordered Scores of Students : ${sortScores} <hr>`);

//Problem 11
let citiesNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = citiesNames.slice(2, 4);
document.writeln(`Cities list:</h3> ${citiesNames} <br>`);
document.writeln(`Selected cities list:</h3> ${selectedCities} <hr>`);

//Problem 12
let arr = ["This ","is ","my ","cat "];
document.writeln(`${arr} <br>`);
let newArr = arr.join("");
document.writeln(`${newArr} <hr>`);

//Problem 13
let devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.writeln(`<h3>Devices:</h3> ${devices} <br>`);

document.writeln(`<b>Out:</b> <br> ${devices.shift()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices.shift()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices.shift()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices.shift()} <hr>`);

//Problem 14
let devices2 = [];

devices2.push("keyboard");
devices2.push("mouse");
devices2.push("printer");
devices2.push("monitor");

document.writeln(`<h3>Devices:</h3> ${devices2} <br>`);

document.writeln(`<b>Out:</b> <br> ${devices2.pop()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices2.pop()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices2.pop()} <br>`);
document.writeln(`<b>Out:</b> <br> ${devices2.pop()} <hr>`);

//Problem 15
let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln(`<h3>Select Phone Manufacturer:</h3>`);
document.writeln(`<select>`);

document.writeln(`<option>${phones[0]}</option>`);
document.writeln(`<option>${phones[1]}</option>`);
document.writeln(`<option>${phones[2]}</option>`);
document.writeln(`<option>${phones[3]}</option>`);
document.writeln(`<option>${phones[4]}</option>`);
document.writeln(`<option>${phones[5]}</option>`);

document.writeln(`</select>`);