//Problem 1
function alertLink() {
    alert('This is a google link');
}

//Problem 2
function messageImage() {
    alert('Thanks for purchasing a phone from us');
}

//Problem 3
function deleteRow(btn) {
    btn.parentNode.parentNode.remove();
}

//Problem 4
//directly done in HTML.

//Problem 5
let count = 0;
function increase() {
    count++;
    document.querySelector("#counter").innerHTML = count;
}
function decrease() {
    count--;
    document.querySelector("#counter").innerHTML = count;
}