// Login toggle
let login = document.querySelector(".login-form"); 

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
}
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active')
}  
document.addEventListener("click", (event) => {
        if (!event.target.closest(".login-form") && !event.target.closest("#login-btn")) {
        login.classList.remove('active');
    }
});
document.addEventListener("click", (event) => {
    if (!event.target.closest(".header .navbar") && !event.target.closest("#menu-btn")) {
        navbar.classList.remove('active')
}
});
let sgnupForm = document.querySelector(".signup-form"); 

document.querySelector("#signup-btn").onclick = () =>{
    sgnupForm.classList.toggle('active');
}
document.addEventListener("click", (event) => {
  if (!event.target.closest(".signup-form") && !event.target.closest("#signup-btn")) {
  sgnupForm.classList.remove('active');
};
});
// Local storage responsive buttons
function validateForm() {
  let username = document.getElementById("username-signup").value;
  let email = document.getElementById("email-signup").value;
  let password = document.getElementById("password-signup"); 

  if(username == ""){
    alert("Username is required");
    return false;
  }
  if(email == ""){
    alert("Email is required");
    return false;
  }
  else if (!email.includes("@")){
    alert("Invalid email address");
    return false;
  }
  if(password = ""){
    alert("Password is required");
    return false;
  }
  return true;
}
// function showData() {
//     let peopleList;
//     if(localStorage.getItem("peopleList") == null) {
//         peopleList = [];
//     }
//     else {
//         peopleList = JSON.parse(localStorage.getItem("peopleList"))
//     }
//     let html = "";
//     peopleList.forEach(function(element, index){
//         html += "<tr>";
//         html += "<td>" + element.username + "</td>";
//         html += "<td>" + element.email + "</td>";
//         html += "<td>" + element.password + "</td>";
//         html += '<td><button onclick="deleteData('+index+')" class="btn">Delete</button><button onclick="updateData('+index+')" class="btn">Delete</button>';
//         html += "</tr>"
//     })
// }
// Retrieve account data from local storage
let myAccount = JSON.parse(localStorage.getItem("myAccount"));

// Check if the account data exists in local storage
if (myAccount) {
  // Account data exists, populate the login form with stored username and password
  document.getElementById("username").value = myAccount.username;
  document.getElementById("password").value = myAccount.password;
}

// Login button click event
document.getElementById("login-button").addEventListener("click", function() {
  // Get the entered username and password
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the entered username and password match the stored account data
  if (myAccount && username === myAccount.username && password === myAccount.password) {
    alert("Login successful!");
    // Perform any login-related tasks here
  } else {
    alert("Invalid username or password!");
    // Perform any actions for an invalid login attempt
  }
});

// Sign up form submission event
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the entered username, email, and password
  let username = document.getElementById("username-signup").value;
  let email = document.getElementById("email-signup").value;
  let password = document.getElementById("password-signup").value;

  // Create a new account object
  let newAccount = {
    username: username,
    email: email,
    password: password
  };

  // Store the new account data in local storage
  localStorage.setItem("myAccount", JSON.stringify(newAccount));

  alert("Account created successfully!");

  // Perform any actions for a successful sign-up

  // Reset the sign-up form
  document.getElementById("signup-form").reset();
});
