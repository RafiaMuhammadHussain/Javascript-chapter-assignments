//Problem 1
let itemsArray = [
    {name:"juice", price:50, quantity:3},
    {name:"cookie", price:30, quantity:9},
    {name:"shirt", price:880, quantity:1},
    {name:"pen", price:100, quantity:2}
];
let total = 0;
for(let i = 0; i < itemsArray.length; i++){
    let itemTotal = itemsArray[i].price * itemsArray[i].quantity;
    document.write(itemsArray[i].name + " Total Price = " + itemTotal + "<br>");
    total += itemTotal;
}
document.write("<br>");
document.write("Total Price of All Items = " + total);
document.write("<hr>");

//Problem 2
let student = {
    name: "Alex",
    email: "alex@gmail.com",
    password: "12345",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};
document.write("age" in student);
document.write("<br>");

document.write("country" in student);
document.write("<br>");

document.write("firstName" in student);
document.write("<br>");

document.write("lastName" in student);
document.write("<hr>");

//Problem 3
function Student(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
let student1 = new Student("Ali", 20, "Karachi");
let student2 = new Student("Ahmed", 22, "Lahore");
let student3 = new Student("Sara", 21, "Islamabad");
console.log(student1);
console.log(student2);
console.log(student3);

//Problem 4
function Person(
    name,
    gender,
    address,
    education,
    profession
){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;

}

let person1 =
new Person(
    "Ali",
    "Male",
    "Karachi",
    "Graduate",
    "Teacher"
);

let person2 =
new Person(
    "Sara",
    "Female",
    "Lahore",
    "Master",
    "Doctor"
);

console.log(person1);
console.log(person2);