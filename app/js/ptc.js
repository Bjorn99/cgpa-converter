"use strict";

const convert = document.getElementById("convert");
const submit = document.getElementById("cgpa");
const dispElm1 = document.getElementById("display-result-1");

/***** CGPA To Percentage *****/
function convertToC(percentage) {
  let CGPA = percentage / 9.5;

  return CGPA;
}

convert.addEventListener("click", function () {
  console.log("click++");
  this.style.background = "#490055";
  let number = submit.value;
  dispElm1.textContent = `${convertToC(number)}`;

  convertToC(number);
});

/* Button disabled if input field empty */

function success() {
  if (submit.value === "") {
    convert.disabled = true;
  } else {
    convert.disabled = false;
  }
}

/***** INPUT FILTER *****/

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.selectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// setInputFilter(submit, function (value) {
//   return /^-?\d*$/.test(value);
// });

/***** PRESS "ENTER" KEY TO TRIGGER BUTTON *****/

let press = submit;

press.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    convert.click();
  }
});
