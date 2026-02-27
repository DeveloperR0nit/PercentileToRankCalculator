// Loader

window.addEventListener("load", function () {
  const loader = document.getElementById("spinner-wrapper");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1100);
});

function indianNumbers(num) {
  let numArr = String(num).split("");
  let len = numArr.length;
  if (len > 3) {
    numArr.splice(len - 3, 0, ",");
    if (len > 5) {
      numArr.splice(len - 5, 0, ",");
      if (len > 7) {
        numArr.splice(len - 7, 0, ",");
      }
    }
  }
  let indianNum = numArr.join("");
  return indianNum;
}

const results = document.querySelector(".results");
const sound = document.getElementById("submitSound");
const errorSound = document.getElementById("errorSound");
const rangeError = document.querySelector(".range-error");
const nullError1 = document.querySelector(".null-error-1");
const nullError2 = document.querySelector(".null-error-2");
const nullError3 = document.querySelector(".null-error-3");
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let percentile = document.getElementById("percentile").value;
  let students = document.getElementById("students").value;
  results.innerHTML = "";
  results.classList.remove("show");
  void results.offsetWidth;
  results.removeAttribute("style");
  rangeError.classList.remove("show");
  void rangeError.offsetWidth;
  nullError1.classList.remove("show");
  void nullError1.offsetWidth;
  nullError2.classList.remove("show");
  void nullError2.offsetWidth;
  nullError3.classList.remove("show");
  void nullError3.offsetWidth;
  if (percentile.trim() === "" && students.trim() === "") {
    nullError3.classList.add("show");
    errorSound.currentTime = 0;
    errorSound.play();
    return;
  } else if (percentile.trim() === "") {
    nullError1.classList.add("show");
    errorSound.currentTime = 0;
    errorSound.play();
    return;
  } else if (students.trim() === "") {
    nullError2.classList.add("show");
    errorSound.currentTime = 0;
    errorSound.play();
    return;
  } else if (percentile <= 0 || percentile >= 100) {
    rangeError.classList.add("show");
    errorSound.currentTime = 0;
    errorSound.play();
    return;
  }
  students = students * 100000;
  var rank = indianNumbers(Math.ceil(((100 - percentile) / 100) * students));
  results.innerHTML = `<div class = 'text'> Your Approximate Rank is </div> <div class = 'rank'> ${rank} </div>`;
  if (percentile >= 90) {
    results.setAttribute("style", "color: green");
  } else if (percentile >= 70 && percentile < 90) {
    results.setAttribute("style", "color: yellow");
  } else {
    results.setAttribute("style", "color: red");
  }
  results.classList.add("show");
  sound.currentTime = 0;
  sound.play();
});

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
