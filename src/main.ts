import "./style.scss";
//----------------after page loads the focus goes to display input-----------------
window.onload = () => {
  document.getElementById("input1")?.focus();
};
//------------------NodeLists------------------------------------------------------

const numbers = document.querySelectorAll<HTMLButtonElement>(".button__number");
const operators =
  document.querySelectorAll<HTMLButtonElement>(".button__operator");

//----------------------elements selected-----------------------------------------
const buttonsToDisable =
  document.querySelectorAll<HTMLButtonElement>(".button__toDisable");
const display = document.querySelector<HTMLInputElement>(".display__text");
const displaySmall = document.querySelector<HTMLInputElement>(
  ".display__text__second"
);
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
const percent = document.querySelector<HTMLButtonElement>(".button__percent");
const signChange = document.querySelector<HTMLButtonElement>(".signChange");
const input = document.querySelector<HTMLInputElement>("#input1");
const round = document.querySelector<HTMLButtonElement>(".button__round")
//-------------------------handles null values for selected elements-------------

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
  !decimal ||
  !percent ||
  !displaySmall ||
  !signChange ||
  !input ||
  !round
) {
  throw new Error("Issues with Selector");
}
//---------------------operators variables-------------------------------------
let result: number = 0;
let numberOne: number = 0;
let minusPressed: boolean = false;
let timesPressed: boolean = false;
let dividePressed: boolean = false;
let plusPressed: boolean = false;
//----------------first input-------------------------------------------------
const handleClickNumbers = (event: Event) => {
  if (input.value.length < input.maxLength) {
    const target = event.currentTarget as HTMLElement;
    display.value += target.innerText;
    displaySmall.value += target.innerText;
  }
};
//-------------------clear display-------------------------------------------
const handleClickClear = () => {
  display.value = "";
  location.reload();
};
const handleClickClearEntry = () => {
  display.value = display.value.slice(0, -1);
  displaySmall.value = displaySmall.value.slice(0, -1);
};
const handleClickOperator = () => {
  numberOne += Number(display.value);
  display.value = "";
  decimal.className = "button button__number button__decimal";
};
//---------------------------HANDLERS----------------------------------------
const handleButtonsToDisable = () => {
  buttonsToDisable.forEach((el) => {
    el.classList.add("disable");
  });
};
const handleDecimal = (event: Event) => {
  const target = event.currentTarget as HTMLElement;

  target.className = "button button__number button__decimal disable";
};

const handleMinus = () => {
  minusPressed = true;
  displaySmall.value += "-";
};
const handlePlus = () => {
  plusPressed = true;
  displaySmall.value += "+";
};
const handleDivide = () => {
  dividePressed = true;
  displaySmall.value += "/";
};
const handleTimes = () => {
  timesPressed = true;
  displaySmall.value += "×";
};
const handlePercent = () => {
  if (timesPressed) {
    result = (numberOne / 100) * Number(display.value);
    display.value = `${result.toString()}%`;
    displaySmall.value = `${displaySmall.value}%`;
  }
};

const handleEquals = () => {
  if (minusPressed) {
    result = numberOne - Number(display.value);
    display.value = result.toString();
   
  }
  if (plusPressed) {
    result = numberOne + Number(display.value);
    display.value = result.toString();
   
  }
  if (dividePressed) {
    result = numberOne / Number(display.value);
    display.value = result.toString();
   
  }
  if (timesPressed) {
    result = numberOne * Number(display.value);
    display.value = result.toString();
   
  }
  
};
const handleRound = () =>{
  display.value = Math.round(result).toString()
} 

const handleSignChange = () => {
  display.value = `${(Number(display.value) * -1).toString()}`;
};
//-------------------event listeners----------------------------------------
minus.addEventListener("click", handleMinus);
plus.addEventListener("click", handlePlus);
divide.addEventListener("click", handleDivide);
times.addEventListener("click", handleTimes);
equals.addEventListener("click", handleEquals);
decimal.addEventListener("click", handleDecimal);
percent.addEventListener("click", handlePercent);
clear.addEventListener("click", handleClickClear);
clearEntry.addEventListener("click", handleClickClearEntry);
signChange.addEventListener("click", handleSignChange);
round.addEventListener("click", handleRound)
numbers.forEach((button) => {
  button.addEventListener("click", handleClickNumbers);
});
operators.forEach((button) => {
  button.addEventListener("click", handleClickOperator);
});
buttonsToDisable.forEach((button) => {
  button.addEventListener("click", handleButtonsToDisable);
});
