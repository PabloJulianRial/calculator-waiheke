import "./style.scss";

// window.onload = function () {
//   document.getElementById("input")?.focus();
// };
const numbers = document.querySelectorAll<HTMLButtonElement>(".button__number");
const operators =
  document.querySelectorAll<HTMLButtonElement>(".button__operator");

const display = document.querySelector<HTMLInputElement>(".display__text");
const clear = document.querySelector<HTMLButtonElement>(".button__clear");
const clearEntry = document.querySelector<HTMLButtonElement>(
  ".button__clearEntry"
);
const plus = document.querySelector<HTMLButtonElement>(".button__plus");
const minus = document.querySelector<HTMLButtonElement>(".button__minus");
const divide = document.querySelector<HTMLButtonElement>(".button__divide");
const times = document.querySelector<HTMLButtonElement>(".button__times");
const equals = document.querySelector<HTMLButtonElement>(".button__equals");
const decimal = document.querySelector<HTMLButtonElement>(".button__decimal");

if (
  numbers.length === 0 ||
  operators.length === 0 ||
  !numbers ||
  !display ||
  !clear ||
  !clearEntry ||
  !plus ||
  !minus ||
  !divide ||
  !times ||
  !equals ||
  !decimal
) {
  throw new Error("Issues with Selector");
}

let numberOne = 0;
let numberTwo = 0;
let decimalUsed = false;

const handleClickNumbers = (event: Event) => {
  const target = event.currentTarget as HTMLElement;

  display.value += target.innerText;
};

const handleClickClear = () => {
  display.value = "";
};
const handleClickClearEntry = () => {
  display.value = display.value.slice(0, -1);
};

const handleClickOperator = () => {
  numberOne += Number(display.value);
  display.value = "";
  decimalUsed = false;
  decimal.className = "button button__number button__decimal";
};

const handleDecimal = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  decimalUsed = true;
  target.className = "button button__number button__decimal disable";
};
decimal.addEventListener("click", handleDecimal);

numbers.forEach((button) => {
  button.addEventListener("click", handleClickNumbers);
});

operators.forEach((button) => {
  button.addEventListener("click", handleClickOperator);
});

clear.addEventListener("click", handleClickClear);
clearEntry.addEventListener("click", handleClickClearEntry);
