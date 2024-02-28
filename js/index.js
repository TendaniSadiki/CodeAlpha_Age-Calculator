function InputSubmit() {
    let dob = document.getElementById("dateInput").value;
    let dobDate = new Date(dob);
    let now = new Date();
    let age = now.getFullYear() - dobDate.getFullYear();
    let monthDiff = now.getMonth() - dobDate.getMonth();
    if (dob === '') {
        alert("Please enter your date of birth");
    } else {
        localStorage.setItem("dob", dob);

        // Calculate age
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
            age--;
        }

        // Display result on the right side
        document.getElementById("result").innerHTML = "Your age is: " + age;
    }
}
function toggleMenu() {
  var menu = document.querySelector('.Navbar ul');
  var menuIcon = document.querySelector('.Navbar #menuIcon');
  var closeIcon = document.querySelector('.Navbar #closeIcon');
  
  menu.classList.toggle('active');
  menuIcon.style.display = menu.classList.contains('active') ? 'none' : 'block';
  closeIcon.style.display = menu.classList.contains('active') ? 'block' : 'none';
}


function getProfileInfo() {
    const profileImg = document.getElementById("userImgprofile");
    profileImg.src = localStorage.getItem("img");
    document.getElementById("usernameprofile").innerText =
      localStorage.getItem("name");
    document.getElementById("usermailprofile").innerText =
      localStorage.getItem("mail");
    document.getElementById("usersurnameprofile").innerText =
      localStorage.getItem("surname");
  }
  getProfileInfo();
  function changeTheImage() {
    const img = document.getElementById("userImg");
    img.src = localStorage.getItem("img");
  }
  
   function deleteAccount(){
      localStorage.removeItem("img");
      localStorage.removeItem("name");
      localStorage.removeItem("surname");
      localStorage.removeItem("mail");
      localStorage.removeItem("Password");
      localStorage.removeItem("loginState");
      window.location.href = "signin.html";
   }