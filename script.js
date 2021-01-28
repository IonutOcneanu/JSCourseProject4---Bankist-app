const connectBtn = document.querySelector(".connect_btn");
const loginForm = document.querySelector(".login");

const displayLoginForm = function () {
  const bgColor = connectBtn.style.backgroundColor;
  console.log(bgColor);
  loginForm.classList.toggle("hidden");
  bgColor === "#ffff"
    ? (connectBtn.style.backgroundColor = "#dddcdc")
    : (connectBtn.style.backgroundColor = "#ffff");
};

connectBtn.addEventListener("click", displayLoginForm);
