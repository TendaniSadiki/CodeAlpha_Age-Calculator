function loginState() {
  if (localStorage.getItem("loginState", true)) {
    window.location.href = "index.html";
  } else {
    window.location.href = "signin.html";
  }
}

function signup(event) {
  event.preventDefault();
  var names = document.getElementById("name");
  let surname = document.getElementById("surname");
  let mail = document.getElementById("email");
  let Password = document.getElementById("pwd");
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (
    names.value.length == 0 &&
    surname.value.length == 0 &&
    mail.value.length == 0 &&
    Password.value.length == 0
  ) {
    alert("Please fill in all inputs");
  }
  // else if (names.value === localStorage.getItem("name")) {
  //     alert("Username already exists. Please choose a different username.");
  //   }
  else if (mail.value === localStorage.getItem("mail")) {
    alert("Email is already taken");
  }
  // else if(Password.value.length > 6){
  //     alert('Max of 6');

  // }
  else if (names.value.length == 0) {
    alert("Please fill in Username");
  } else if (surname.value.length == 0) {
    alert("Please fill in Surname");
  } else if (mail.value.length == 0) {
    alert("Please fill in Email");
  } else if (Password.value.length == 0) {
    alert("Please fill in password");
  } else if (!Password.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!Password.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!Password.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    localStorage.setItem("name", names.value);
    localStorage.setItem("surname", surname.value);
    localStorage.setItem("mail", mail.value);
    localStorage.setItem("Password", Password.value);
    localStorage.setItem("loginState", true);
    window.location.href = "index.html";
  }
}

function signin(event) {
  event.preventDefault();
  var logmail = localStorage.getItem("mail");
  var lopw = localStorage.getItem("Password");
  var maibox = document.getElementById("email").value;
  var passbox = document.getElementById("pwd").value;

  if (maibox == logmail && passbox == lopw) {
    alert("Your Email & Password correct");
    window.open("index.html");
  } else if (maibox != passbox && passbox != lopw) {
    document.getElementById("signin_msg").innerText = "Wrong Email or Password";
  } else if (maibox == "" && passbox == "") {
    document.getElementById("signin_msg").innerText =
      "Your Email & Password empty";
  } else {
    localStorage.setItem("loginState", true);
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.setItem("loginState", false);
  console.log("clicked");
  window.location.href = "signin.html";
}
