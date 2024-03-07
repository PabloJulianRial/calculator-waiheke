import "./style.scss";

// window.onload = function () {
//   document.getElementById("input")?.focus();
// };
const numbers = document.querySelectorAll<HTMLButtonElement>(".button__number-button");
const display = document.querySelector<HTMLInputElement>(".display__text")
const clear = document.querySelector<HTMLButtonElement>(".button__clear")
const clearEntry = document.querySelector<HTMLButtonElement>(".button__clearEntry")
const plus = document.querySelector<HTMLButtonElement>(".button__plus")
const minus = document.querySelector<HTMLButtonElement>(".button__minus")
const divide = document.querySelector<HTMLButtonElement>(".button__divide")
const times = document.querySelector<HTMLButtonElement>(".button__times")
const equals = document.querySelector<HTMLButtonElement>(".button__equals")



