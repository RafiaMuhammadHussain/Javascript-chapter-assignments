//Problem 1
function power(a, b) {
   let result = 1;
   for(let i = 1; i <= b; i++) {
      result = result * a;
   }
   return result;
}
document.write(power(2, 4) + "<hr>");

//Problem 2
function leapYear() {
    let year = Number(prompt(`Enter any year to find it's a leap or not`));
    if (year % 4 === 0) {
        alert('This is a leap year');
    } else {
        alert('This is not a leap year');
    }
}
leapYear();

//Problem 3
function input(){
    let a = Number(prompt('Enter a length of a triangle'));
    let b = Number(prompt('Enter b length of a triangle'));
    let c = Number(prompt('Enter c length of a triangle'));

    let calculation2 = calculateArea(a,b,c);
    document.write("The area of triangle is " + calculation2 + "<hr>");
}
function calculateS(a,b,c){
    return (a+b+c) / 2;
}
function calculateArea(a,b,c){
    let S = calculateS(a,b,c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
input();

//Problem 4
function mainFunction(){
    let marks1 = Number(prompt('Enter marks of first subject'));
    let marks2 = Number(prompt('Enter marks of second subject'));
    let marks3 = Number(prompt('Enter marks of third subject'));
    let totalMarks = Number(prompt('Enter total marks'));

    let result = average(marks1, marks2, marks3);
    let result2 = percentage(marks1, marks2, marks3, totalMarks);
    document.write(`Average: ${result} <br>`);
    document.write(`Percentage: ${result2} % <hr>`);
}
function average(marks1, marks2, marks3){
    return (marks1 + marks2 + marks3) / 3;
}
function percentage(marks1, marks2, marks3, totalMarks){
    return ((marks1 + marks2 + marks3) / totalMarks) * 100;
}
mainFunction();

//Problem 5
function customIndexOf(word, char){
    for(let i = 0; i < word.length; i++){
        if(word[i] === char){
            return i;
        }
    }
    return -1;
}
document.write(customIndexOf("hello", "e") + "<hr>");

//Problem 6
function removeVowels() {
    let sentence = "Hello World";
    let result3 = "";

    for(let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        if(
            char !== "a" &&
            char !== "e" &&
            char !== "i" &&
            char !== "o" &&
            char !== "u"
        ) {
            result3 += sentence[i];
        }
    }
    document.write(result3 + "<hr>");
}
removeVowels();

//Problem 7
function isVowel(char){
    switch(char){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}

function countVowels(){
    let sentence = "Pleases read this application and give me gratuity";
    let count = 0;
    sentence = sentence.toLowerCase();

    for(let i = 0; i < sentence.length; i++){
        let currentChar = sentence[i];
        let nextChar = sentence[i + 1];
        if(isVowel(currentChar) && isVowel(nextChar)){
            count++;
        }
    }
    document.write("Total consecutive vowels are: " + count + "<hr>");
}
countVowels();

//Problem 8
function distance() {
    let km = Number(prompt('Enter distance'));

    let met = meters(km);
    let feets = feet(km);
    let inch = inches(km);
    let cm = centimeters(km);

    document.write("The distance is: <br><br>" + met + "meters <br>" + feets + "feet <br>" + inch + "inches <br>" + cm + "centimeters <hr>");
}
function meters(km) {
    return km * 1000;
}
function feet(km) {
    return km * 3280.84;
}
function inches(km) {
    return km * 39370.1;
}
function centimeters(km) {
    return km * 100000;
}
distance();

//Problem 9
function overtimePay(){
    let userInput2 = Number(prompt("Enter working hours"));
    if(userInput2 > 40){
        return (userInput2 - 40) * 12;
    }
    return 0;
}
document.write("Overtime Pay: Rs." + overtimePay() + "<hr>");

//Problem 10
function currencyNotes(){
    let userInput3 = Number(prompt('Enter amount to withdraw!'));

    let hundreds = Math.floor(userInput3 / 100);
    let remaining = userInput3 % 100;
    let fifties = Math.floor(remaining / 50);
    remaining = remaining % 50;
    let tens = Math.floor(remaining / 10);

    document.writeln(`you will have ${hundreds} hundred notes ${fifties} fifty notes ${tens} ten notes.`)
}
currencyNotes();