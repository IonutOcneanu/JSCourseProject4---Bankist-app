// Data
const account1 = {
  owner: "John Slow",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pass: 1111,
};

const account2 = {
  owner: "Camelia Clark",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pass: 2222,
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
//Displayed texts
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelTimer = document.querySelector(".timer");

//Containers
const containerApp = document.querySelector(".main__win");
const containerMovements = document.querySelector(".movements");
const loginForm = document.querySelector(".login");

//Buttons
const connectBtn = document.querySelector(".connect__btn");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

//Input fields
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pass");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pass");

const displayLoginForm = function () {
  const bgColor = connectBtn.style.backgroundColor;
  console.log(bgColor);
  loginForm.classList.toggle("hidden");
  bgColor === "#ffff"
    ? (connectBtn.style.backgroundColor = "#dddcdc")
    : (connectBtn.style.backgroundColor = "#ffff");
};

connectBtn.addEventListener("click", displayLoginForm);
