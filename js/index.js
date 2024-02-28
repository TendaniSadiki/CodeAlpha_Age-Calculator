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