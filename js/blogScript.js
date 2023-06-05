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
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

if (accounts.length > 0) {
  document.getElementById("username").value = accounts[0].username;
  document.getElementById("password").value = accounts[0].password;
}

document.getElementById("login-button").addEventListener("click", function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let matchedAccount = accounts.find(function(account) {
    return account.username === username && account.password === password;
  });

  if (matchedAccount) {
    alert("Login successful!");

    // Update the username display in the navbar
    document.getElementById("username-display").textContent = username;
  } else {
    alert("Invalid username or password!");
  }

  document.getElementById("login-form").style.display = "none";
});


document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username-signup").value;
  let email = document.getElementById("email-signup").value;
  let password = document.getElementById("password-signup").value;

  let newAccount = {
    username: username,
    email: email,
    password: password
  };

  accounts.push(newAccount);

  localStorage.setItem("accounts", JSON.stringify(accounts));

  alert("Account created successfully!");
  document.getElementById("signup-form").reset();

  document.getElementById("signup-form").style.display = "none";
});



// Year automatically update
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Chat popup text box 

let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let popup = this.nextElementSibling;
    popup.classList.add("show-popup");
    popup.addEventListener("click", function() {
      this.classList.remove("show-popup");
    });
  });
}
document.addEventListener("click", function(e) {
  if (!e.target.matches(".popup") && !e.target.matches(".btn")) {
    let popups = document.getElementsByClassName("popup");
        for (let i = 0; i < popups.length; i++) {
      popups[i].classList.remove("show-popup");
    }
  }
});
// Log out form
document.getElementById("username-display").addEventListener("click", function() {
  let form = document.querySelector(".username-display");
  form.classList.toggle("visible");
});