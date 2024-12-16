const listData = [];

document.getElementById("add").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
});

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

function displayArray() {
    const tbody = document.getElementById("data-body");
    tbody.innerHTML = '';
    listData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.age}</td>
            <td>${item.location}</td>
            <td>${item.number}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", editItem);
    });
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deleteItem);
    });
}

document.getElementById("submit").addEventListener("click", function () {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var number = document.getElementById("number").value;

    let count = 0;

    if (!username) {
        document.getElementById("name-error").innerHTML = "name field is empty";
    } else {
        document.getElementById("name-error").innerHTML = "";
        count++;
    }
    if (!email) {
        document.getElementById("email-error").innerHTML = "email field is empty";
    } else {
        document.getElementById("email-error").innerHTML = "";
        count++;
    }
    if (!age) {
        document.getElementById("age-error").innerHTML = "age field is empty";
    } else {
        document.getElementById("age-error").innerHTML = "";
        count++;
    }
    if (!location) {
        document.getElementById("location-error").innerHTML = "location field is empty";
    } else {
        document.getElementById("location-error").innerHTML = "";
        count++;
    }
    if (!number) {
        document.getElementById("number-error").innerHTML = "number field is empty";
    } else {
        document.getElementById("number-error").innerHTML = "";
        count++;
    }

    if (count === 5) {
        listData.push({ username, email, age, number, location });
        displayArray();
    }

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("age").value = '';
    document.getElementById("location").value = '';
    document.getElementById("number").value = '';
    document.querySelector(".popup").style.display = "none";
});

// Function to delete an item
function deleteItem(event) {
    const index = event.target.getAttribute("data-index");
    listData.splice(index, 1);
    displayArray();
}

// Function to edit an item
function editItem(event) {
    const index = event.target.getAttribute("data-index");
    const item = listData[index];

    document.getElementById("name").value = item.username;
    document.getElementById("email").value = item.email;
    document.getElementById("age").value = item.age;
    document.getElementById("location").value = item.location;
    document.getElementById("number").value = item.number;

    document.querySelector(".popup").style.display = "flex";

    // Remove the existing item
    listData.splice(index, 1);
}

