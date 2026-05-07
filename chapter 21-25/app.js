//Problem 1
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = firstName + " " + lastName;
alert(`Welcome ${fullName}`);

//Problem 2
let mobileModel = prompt("Enter your favourite mobile phone model");
let length = mobileModel.length;
document.write(`My favourite phone is: ${mobileModel} <br> Length of string: ${length} <br><br>`);

// Problem 3
let word = "Pakistani";
let index = word.indexOf("n");
document.write(`String: ${word} <br> Index of 'n': ${index} <br><br>`);

//Problem 4
let word2 = "Hello World";
let lastIndex = word2.lastIndexOf("l");
document.write(`String: ${word2} <br> Last index of 'l': ${lastIndex} <br><br>`);

//Problem 5
let word3 = "Pakistani";
let charAtIndex3 = word3.charAt(3);
document.write(`String: ${word3} <br> Character at index 3: ${charAtIndex3} <br><br>`);

//Problem 6
let firstName2 = prompt("Enter your first name");
let lastName2 = prompt("Enter your last name");
let fullName2 = firstName2.concat(" " , lastName2);
alert(`Welcome ${fullName2}`);

//Problem 7
let city = "Hyderabad";
let newCity = city.replace("Hyder" , "Islam");
document.write(`City: ${city} <br> After replacement: ${newCity} <br><br>`);

//Problem 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replaceAll("and" , "&");
document.write(`Message: ${message} <br> After replacement: ${newMessage} <br><br>`);

//Problem 9
let stringNum = "472";
let number = Number(stringNum);
document.write(`Value: ${stringNum} <br> Type: ${typeof stringNum} <br> Value: ${number} <br> Type: ${typeof number} <br><br>`);

//Problem 10
let userInput = prompt("Enter a word");
let upperCaseInput = userInput.toUpperCase();
document.write(`User input: ${userInput} <br> Upper case: ${upperCaseInput} <br><br>`);

//Problem 11
let userInput2 = prompt("Give me input to convert into title case");
let words = userInput.toLowerCase().split(" ");
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (words.length > 0) {
        words[i] = word[0].toUpperCase() + word.slice(1);
    }
}
let titleCase = words.join(' ');
document.writeln(`User Input: ${userInput2} <br>`);
document.writeln(`Title Case: ${titleCase} <br><br>`);

//Problem 12
let num = 35.36;
let numStr = num.toString().replace("." , "");
document.write(`Number: ${num} <br> Result: ${numStr} <br><br>`);         

//Problem 13     

let userName = prompt("Enter a username");
if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
    alert("Please enter a valid username");
} else {
    alert("Username is valid");
}

//Problem 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput4 = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
if (A.includes(userInput4)) {
    alert(`${userInput4} is available at index ${A.indexOf(userInput4)} in our bakery`);
} else {
    alert(`We are sorry. ${userInput4} is not available in our bakery`);
}

//Problem 16
let university = "University of Karachi";
let chars = university.split("");
for (let i = 0; i < chars.length; i++) {
    document.write(chars[i] + "<br>");
}

//Problem 17
let userInput5 = prompt("Enter a word");
let lastChar = userInput5.charAt(userInput5.length - 1);
document.write(`User input: ${userInput5} <br> Last character: ${lastChar} <br>`);
