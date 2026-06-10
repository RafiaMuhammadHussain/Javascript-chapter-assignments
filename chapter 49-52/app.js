//Problem 1
function showData() {

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    document.querySelector("#result").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email;
}

//Problem 2
function readMore() {
    document.querySelector("#text").innerHTML =
        "JavaScript is a programming language used to create interactive websites. It allows developers to add dynamic behavior, animations, form validation and much more.";
}

//Problem 3
let selectedRow;
function addStudent() {
    let name = document.querySelector("#name").value;
    let studentClass = document.querySelector("#studentClass").value;
    let table = document.querySelector("#tableBody");
    table.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${studentClass}</td>
            <td>
                <button onclick="deleteRow(this)">
                    Delete
                </button>
            </td>
            <td>
                <button onclick="editRow(this)">
                    Edit
                </button>
            </td>
        </tr>
    `;
}
function deleteRow(btn) {
    btn.parentNode.parentNode.remove();
}
function editRow(btn) {
    document.querySelector("#editForm").style.display = "block";
    selectedRow = btn.parentNode.parentNode;
    document.querySelector("#editName").value = selectedRow.children[0].innerHTML;
    document.querySelector("#editClass").value = selectedRow.children[1].innerHTML;
}
function updateRow() {
    let newName = document.querySelector("#editName").value;
    let newClass = document.querySelector("#editClass").value;
    selectedRow.children[0].innerHTML = newName;
    selectedRow.children[1].innerHTML = newClass;
    document.querySelector("#editForm").style.display = "none";
}