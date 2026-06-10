//Problem 1
let currentDate = new Date();
document.write(currentDate + "<hr>");

//Problem 2
function greet(){
    let firstName = prompt('Enter your first name');
    let secondName = prompt('Enter your last name');
    alert(`Hello ${firstName} ${secondName}`);
}
greet();

//Problem 3
function sum(){
    let num1 = Number(prompt('Enter num 1'));
    let num2 = Number(prompt('Enter num 2'));
    let sums = num1 + num2;
    alert(sums);
}
sum();

//Problem 4
function calculator(){
    let number1 = Number(prompt('Enter first number'));
    let number2 = Number(prompt('Enter second number'));
    let operator = prompt('Give me one operator: + - x / %');

    if(operator === '+'){
        document.write(`${number1} ${operator} ${number2} = ${number1 + number2} <hr>`);
    } else if(operator === '-'){
        document.write(`${number1} ${operator} ${number2} = ${number1 - number2} <hr>`);
    } else if(operator === 'x'){
        document.write(`${number1} ${operator} ${number2} = ${number1 * number2} <hr>`);
    } else if(operator === '/'){
        document.write(`${number1} ${operator} ${number2} = ${number1 / number2} <hr>`);
    } else if(operator === '%'){
        document.write(`${number1} ${operator} ${number2} = ${number1 % number2} <hr>`);
    } else {
        document.write(`Something went wrong <hr>`);
    }
}
calculator();

//Problem 5
function square(num){
    document.write(`${num} square is : ${Math.pow(num,2)} <br>`);
}
square(5);
square(9);

//Problem 6
function factorial(nums){

    let result = 1;
    for(let i = 1; i <= nums; i++){
        result = result * i;
    }
    return result;
}
document.write(factorial(6) + "<hr>");

//Problem 7
function counting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
counting(1, 10);

//Problem 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num4) {
        return num4 * num4;
    }
    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}
document.write(calculateHypotenuse(3, 4) + "<hr>");

//Problem 9
//i)
function area(width, height) {
    return width * height;
}

document.write(area(5, 4) + "<hr>");
//ii)
let w = 10;
let h = 6;

function area(width, height) {
    return width * height;
}
document.write(area(w, h) + "<hr>");

//Problem 10
function checkPalindrome(str) {
    let reverse = str.split("").reverse().join("");

    if (str === reverse) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}
document.write(checkPalindrome("madam") +"<hr>");

//Problem 11
function capitalizeWords(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] =
            words[i][0].toUpperCase() +
            words[i].slice(1);

    }
    return words.join(" ");
}
document.write(
    capitalizeWords("the quick brown fox") + "<hr>"
);

//Problem 12
function findLongestWord(str) {
    let words1 = str.split(" ");
    let longest = "";
    for (let i = 0; i < words1.length; i++) {
        if (words1[i].length > longest.length) {
            longest = words1[i];
        }
    }
    return longest;
}
document.write(
    findLongestWord("Web Development Tutorial") + "<hr>"
);

//Problem 13
function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
document.write(
    countLetter("JSResourceS.com", "o") + "<hr>"
);