function Hire() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let University = prompt("What is your university?");

  alert(
    "Thank you, " +
      name +
      "! I'll be in touch by email, meanwhile look at my social media profiles!"
  );
}

let HireanewProfessorbutton = document.querySelector(".HireanewProfessor");
HireanewProfessorbutton.addEventListener("click", Hire);

// JavaScript to change button color on hover
const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#0056b3";
});
btn.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#007bff";
});
