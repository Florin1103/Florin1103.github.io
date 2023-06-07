// Login toggle
const loginForm = document.querySelector(".login-form");
const navbar = document.querySelector('.header .navbar');
const sgnupForm = document.querySelector(".signup-form");
const loginButton = document.getElementById("login-button");
const signupForm = document.getElementById("signup-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#menu-btn').onclick = () => {
  loginForm.classList.remove('active');
  navbar.classList.toggle('active');
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".login-form") && !event.target.closest("#login-btn")) {
    loginForm.classList.remove('active');
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header .navbar") && !event.target.closest("#menu-btn")) {
    navbar.classList.remove('active');
  }
});

document.querySelector("#signup-btn").onclick = () => {
  sgnupForm.classList.toggle('active');
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".signup-form") && !event.target.closest("#signup-btn")) {
    sgnupForm.classList.remove('active');
  }
});

// Local storage responsive buttons
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

if (accounts.length > 0) {
  document.getElementById("username").value = accounts[0].username;
  document.getElementById("password").value = accounts[0].password;
}

loginButton.addEventListener("click", function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let matchedAccount = accounts.find(function(account) {
    return account.username === username && account.password === password;
  });

  if (matchedAccount) {
    alert("Login successful!");

    // Update the username display in the navbar
    document.getElementById("username-display").textContent = username;

    // Store the logged-in status in localStorage
    localStorage.setItem("isLoggedIn", true);
  } else {
    alert("Invalid username or password!");
  }

  loginForm.style.display = "none";
});

signupForm.addEventListener("submit", function(event) {
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
  signupForm.reset();

  sgnupForm.style.display = "none";
});

// Check if the user is logged in on page load
window.addEventListener("load", function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    const username = accounts[0].username;
    document.getElementById("username-display").textContent = username;
    loginForm.style.display = "none";
  }
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


// Review form
document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const reviewInput = document.getElementById("review");
  const submitButton = document.getElementById("submit-review");
  const reviewList = document.querySelector(".review-list");


  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  function createReviewItem(name, review) {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    const reviewText = document.createElement("p");
    reviewText.textContent = review;

    reviewItem.appendChild(nameHeading);
    reviewItem.appendChild(reviewText);

    return reviewItem;
  }

  function displayReviews() {
    reviews.forEach(function(review) {
      const { name, review: text } = review;
      const reviewItem = createReviewItem(name, text);
      reviewList.appendChild(reviewItem);
    });
  }

  function saveReview(name, review) {
    const newReview = {
      name: name,
      review: review
    };
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

  submitButton.addEventListener("click", function() {
    const name = nameInput.value;
    const review = reviewInput.value;
    if (name && review) {
      const reviewItem = createReviewItem(name, review);
      reviewList.appendChild(reviewItem);
      saveReview(name, review);
      nameInput.value = "";
      reviewInput.value = "";
    } else {
      alert("Please enter your name and review.");
    }
  });
  displayReviews();
});




