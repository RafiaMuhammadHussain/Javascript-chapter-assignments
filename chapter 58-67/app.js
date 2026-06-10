let output = document.getElementById("output");

// Problem 1

// i
let mainContent = document.getElementById("main-content");

// ii
output.innerHTML += "<h3>Child Elements of main-content</h3>";
for (let i = 0; i < mainContent.children.length; i++) {
    output.innerHTML += mainContent.children[i].innerHTML + "<br>";
}

// iii
let renderElements = document.getElementsByClassName("render");
output.innerHTML += "<h3>Elements of class render</h3>";
for (let i = 0; i < renderElements.length; i++) {
    output.innerHTML += renderElements[i].innerHTML + "<br>";
}

// iv
document.getElementById("first-name").value = "Alex";

// v
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

// Problem 2

// i
let formContent = document.getElementById("form-content");
output.innerHTML += "<h3>Node Type of form-content</h3>";
output.innerHTML += formContent.nodeType + "<br>";

// ii
let lastName = document.getElementById("lastName");
output.innerHTML += "<h3>Node Type of lastName</h3>";
output.innerHTML += lastName.nodeType + "<br>";
output.innerHTML += "<h3>Node Type of Child Node of lastName</h3>";
output.innerHTML += lastName.firstChild.nodeType + "<br>";

// iii
lastName.firstChild.nodeValue = "Last Name: Bank";

// iv
output.innerHTML += "<h3>First Child of main-content</h3>";
output.innerHTML += mainContent.firstElementChild.innerHTML + "<br>";
output.innerHTML += "<h3>Last Child of main-content</h3>";
output.innerHTML += mainContent.lastElementChild.innerHTML + "<br>";

// v
output.innerHTML += "<h3>Previous Sibling of lastName</h3>";
output.innerHTML += lastName.previousElementSibling.innerHTML + "<br>";
output.innerHTML += "<h3>Next Sibling of lastName</h3>";
output.innerHTML += lastName.nextElementSibling.innerHTML + "<br>";

// vi
let email = document.getElementById("email");
output.innerHTML += "<h3>Parent Node of Email</h3>";
output.innerHTML += email.parentNode.id + "<br>";
output.innerHTML += "<h3>Parent Node Type of Email</h3>";
output.innerHTML += email.parentNode.nodeType + "<br>";