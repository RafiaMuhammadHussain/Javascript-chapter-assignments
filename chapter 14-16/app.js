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
</ol>`);

//Problem 8
let studentNames = ["Michael","John","Tony"];
let scores = [320,230,480];
let percentage = [320/500 *100, 230/500*100, 480/500 *100];

document.writeln(`Score of ${studentNames[0]} is ${scores[0]}. Percentage:${percentage[0]}% <br>`);
document.writeln(`Score of ${studentNames[1]} is ${scores[1]}. Percentage:${percentage[1]}% <br>`);
document.writeln(`Score of ${studentNames[2]} is ${scores[2]}. Percentage:${percentage[2]}%`);

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