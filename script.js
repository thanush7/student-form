const listData=[];


document.getElementById("add").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})




// const tbody = document.getElementById('data-body');

        function displayArray() {
            const tbody = document.getElementById("data-body");
            tbody.innerHTML = '';
            listData.forEach((item,index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index}</td>
                    <td>${item.username}</td>
                     <td>${item.email}</td>
                    <td>${item.age}</td>
                    <td>${item.location}</td>
                    <td>${item.number}</td>
                `;
                tbody.appendChild(row);
            });
        }

document.getElementById("submit").addEventListener("click", function () {
    var username = document.getElementById("name").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    var location = document.getElementById("location").value
    var number = document.getElementById("number").value



    let count=0;
    // console.log(username, email, age, location, number)
    if (username == null || username == '' || username == undefined) {
        const error = document.getElementById("name-error")
        error.innerHTML = "name field is empty"
    }
    else {
        const error = document.getElementById("name-error")
        error.innerHTML = "";
        count++;
    }
    if (email == null || email == '' || email == undefined) {
        const error = document.getElementById("email-error")
        error.innerHTML = "email field is empty"
    }
    else {
        const error = document.getElementById("email-error")
        error.innerHTML = ""
        count++
    }
    if (age == null || age == '' || age == undefined) {
        const error = document.getElementById("age-error")
        error.innerHTML = "age field is empty"
    }
    else {
        const error = document.getElementById("age-error")
        error.innerHTML = ""
        count++
    }
    if (location == null || location == '' || location == undefined) {
        const error = document.getElementById("location-error")
        error.innerHTML = "location field is empty"
    }
    else {
        const error = document.getElementById("location-error")
        error.innerHTML = ""
        count++
    }
    if (number == null || number == '' || number == undefined) {
        const error = document.getElementById("number-error")
        error.innerHTML = "number field is empty"
    }
    else {
        const error = document.getElementById("number-error")
        error.innerHTML = ""
        count++
    }

    if(count == 5 )
    {
        listData.push({username,email,age,number,location});
    }
        

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("age").value = '';
    document.getElementById("location").value = '';
    document.getElementById("number").value = '';
     document.querySelector(".popup").style.display = "none";
     displayArray();
      listData.innerHTML=""
})


