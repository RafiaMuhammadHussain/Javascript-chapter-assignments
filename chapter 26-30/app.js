//Problem 1
let num = Number(prompt('Enter a positive integer'));
document.writeln(`number: ${num} <br>`);
document.writeln(`round off value: ${Math.round(num)} <br>`);
document.writeln(`floor value: ${Math.floor(num)} <br> `);
document.writeln(`ceil value: ${Math.ceil(num)} <hr> `);

//Problem 2
let num2 = Number(prompt('Enter a negative floating point number'));
document.writeln(`number: ${num2} <br>`);
document.writeln(`round off value: ${Math.round(num2)} <br>`);
document.writeln(`floor value: ${Math.floor(num2)} <br> `);
document.writeln(`ceil value: ${Math.ceil(num2)} <hr> `);

//Problem 3
let num3 = Number(prompt('Enter a number:'));
document.write(`The absolute value of ${num3} is ${Math.abs(num3)} <hr>`);

//problem 4
let diceRoll = Math.floor(Math.random() * 6) + 1;
document.writeln(`random dice value: ${diceRoll} <hr>`);

//Problem 5
let coinFlip = Math.floor(Math.random() * 2) + 1;
if(coinFlip === 2){
    document.writeln(`${coinFlip} <br>`);
    document.writeln(`Random coin Value: Heads <br><br>`);
} else{
    document.writeln(`${coinFlip} <br>`);
    document.writeln(`Random coin Value: Tails <hr>`);
}

//Problem 6
let randomVal = Math.floor(Math.random() * 100) + 1;
document.writeln(`random number between 1 and 100: ${randomVal} <hr>`);

//Problem 8
let randomSecretNum = Math.floor(Math.random() * 10) + 1;
let userInput2 = Number(prompt('Enter a number between 1 and 10'));
if(userInput2 === randomSecretNum){
    alert('Congratulation! you found right');
} else {
    alert('Try again! better luck next time');
}