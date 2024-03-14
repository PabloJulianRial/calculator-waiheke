import "./style.scss";
//----------------after page loads the focus goes to display input-----------------
window.onload = () => {
  document.getElementById("input1")?.focus();
};
//------------------NodeLists------------------------------------------------------
const orangeButtons =
  document.querySelectorAll<HTMLButtonElement>(".button__orange");
const extraButtons =
  document.querySelectorAll<HTMLButtonElement>(".extra__button");
const greyButtons =
  document.querySelectorAll<HTMLButtonElement>(".button__grey");
const allButtons = document.querySelectorAll<HTMLButtonElement>(".button");
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
const backspace = document.querySelector<HTMLButtonElement>(
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
const round = document.querySelector<HTMLButtonElement>(".button__round");
const square = document.querySelector<HTMLButtonElement>(".button__square");
const cube = document.querySelector<HTMLButtonElement>(".button__cube");
const root = document.querySelector<HTMLButtonElement>(".button__root");
const wand = document.querySelector<HTMLButtonElement>(".button__fraction");
const rightBracket = document.querySelector<HTMLButtonElement>(
  ".button__rightBracket"
);
const leftBracket = document.querySelector<HTMLButtonElement>(
  ".button__leftBracket"
);
const memoryOne =
  document.querySelector<HTMLButtonElement>(".button__memoryOne");
const memoryTwo =
  document.querySelector<HTMLButtonElement>(".button__memoryTwo");
//-------------------------handles null values for selected elements-------------

if (
  numbers.length === 0 ||
  operators.length === 0 ||
  !numbers ||
  !display ||
  !clear ||
  !backspace ||
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
  !round ||
  !square ||
  !root ||
  !cube ||
  !wand ||
  !extraButtons ||
  !greyButtons ||
  !orangeButtons ||
  !rightBracket ||
  !leftBracket ||
  !memoryOne ||
  !memoryTwo
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
let memory: number = 0;
let memoryPressed: boolean = false;

let numberClicked: boolean = false;
//----------------first input-------------------------------------------------
const handleClickNumbers = (event: Event) => {
  numberClicked = true;
  if (input.value.length < input.maxLength) {
    const target = event.currentTarget as HTMLElement;
    display.value += target.innerText;
    displaySmall.value += target.innerText;
  }
};
//-------------------clear display-------------------------------------------
const handleClickClear = () => {
  display.value = "";
  displaySmall.value = "";
  buttonsToDisable.forEach((el) => {
    el.classList.remove("disable");
  });
  numberOne = 0;
  numbers.forEach((b) => {
    b.style.backgroundColor = "rgb(57, 52, 52)";
  });
  orangeButtons.forEach((b) => {
    b.style.backgroundColor = " rgb(250, 141, 39)";
  });
  extraButtons.forEach((b) => {
    b.style.backgroundColor = " rgb(82, 113, 82)";
  });
  greyButtons.forEach((b) => {
    b.style.backgroundColor = " rgb(149, 146, 146)";
  });
  wand.style.backgroundColor = "rgb(82, 207, 82)";
  location.reload();
};
const handleBackspace = () => {
  display.value = display.value.slice(0, -1);
  displaySmall.value = displaySmall.value.slice(0, -1);
};
const handleClickOperator = () => {
  if (numberClicked) {
    numberOne += Number(display.value);
    display.value = "";
  }
};
//---------------------------HANDLERS----------------------------------------
const handleButtonsToDisable = () => {
  buttonsToDisable.forEach((el) => {
    el.classList.add("disable");
  });
};
const handleDecimal = () => {
  decimal.classList.add("disable");
};

const handleMinus = () => {
  if (numberClicked) {
    minusPressed = true;
    displaySmall.value += "-";
  }
};
const handlePlus = () => {
  if (numberClicked) {
    plusPressed = true;
    displaySmall.value += "+";
  }
};
const handleDivide = () => {
  if (numberClicked) {
    dividePressed = true;
    displaySmall.value += "/";
  }
};
const handleTimes = () => {
  if (numberClicked) {
    timesPressed = true;
    displaySmall.value += "×";
  }
};
const handlePercent = () => {
  if (timesPressed) {
    result = (numberOne / 100) * Number(display.value);
    display.value = `${result.toString()}%`;
    displaySmall.value = `${displaySmall.value}%`;
  }
};

const handleSquare = () => {
  const squareResult = Number(display.value) ** 2;
  display.value = squareResult.toString();
  displaySmall.value = `${displaySmall.value}²`;
};
const handleCube = () => {
  const cubeResult = Number(display.value) ** 3;
  display.value = cubeResult.toString();
  displaySmall.value = `${displaySmall.value}³`;
};
const handleRoot = () => {
  const rootResult = Math.sqrt(Number(display.value));
  display.value = rootResult.toString();
  displaySmall.value = `${displaySmall.value}√`;
};

const handleLeftBracket = () => {
  buttonsToDisable.forEach((el) => {
    el.classList.remove("disable");
  });
  display.value += "(";
  displaySmall.value += "(";
};
const handleRightBracket = () => {
  buttonsToDisable.forEach((el) => {
    el.classList.remove("disable");
  });
  display.value += ")";
  displaySmall.value += ")";
};

const handleEquals = () => {
  if (minusPressed) {
    result = numberOne - Number(display.value);
    display.value = result.toString();
    numberOne = 0;
  }
  if (plusPressed) {
    result = numberOne + Number(display.value);
    display.value = result.toString();
    numberOne = 0;
  }
  if (dividePressed) {
    result = numberOne / Number(display.value);
    display.value = result.toString();
    numberOne = 0;
  }
  if (timesPressed) {
    result = numberOne * Number(display.value);
    display.value = result.toString();
    numberOne = 0;
  }
  buttonsToDisable.forEach((el) => {
    el.classList.remove("disable");
  });
};
const handleRound = () => {
  display.value = result.toFixed(3);
};

const handleSignChange = () => {
  display.value = `${(Number(display.value) * -1).toString()}`;
};

const handleMemory = () => {
  if (!memoryPressed) {
    memoryPressed = true;
    memory = Number(display.value);
    display.value = "";
    displaySmall.value = "";
  } else {
    display.value = memory.toString();
    displaySmall.value = memory.toString();
  }
};

const handleClearMemory = () => {
  memoryPressed = false;
  memory = 0;
  display.value = "";
  displaySmall.value = "";
};
const handleWand = () => {
  allButtons.forEach((el) => {
    el.style.backgroundColor = `rgb(${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  });
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
backspace.addEventListener("click", handleBackspace);
signChange.addEventListener("click", handleSignChange);
round.addEventListener("click", handleRound);
square.addEventListener("click", handleSquare);
cube.addEventListener("click", handleCube);
root.addEventListener("click", handleRoot);
rightBracket.addEventListener("click", handleRightBracket);
leftBracket.addEventListener("click", handleLeftBracket);
wand.addEventListener("click", handleWand);
memoryOne.addEventListener("click", handleMemory);
memoryTwo.addEventListener("click", handleClearMemory);
numbers.forEach((button) => {
  button.addEventListener("click", handleClickNumbers);
});
operators.forEach((button) => {
  button.addEventListener("click", handleClickOperator);
});
buttonsToDisable.forEach((button) => {
  button.addEventListener("click", handleButtonsToDisable);
});
