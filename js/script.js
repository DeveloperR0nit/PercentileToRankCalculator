// Loader

window.addEventListener("load", function () {
  const loader = document.getElementById("spinner-wrapper");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1100);
});

// Indian Number Function

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

// Form-1 Submit

const results = document.querySelector(".results");
const sound = document.getElementById("submitSound");
const errorSound = document.getElementById("errorSound");
const rangeError = document.querySelector(".range-error");
const nullError1 = document.querySelector(".null-error-1");
const nullError2 = document.querySelector(".null-error-2");
const nullError3 = document.querySelector(".null-error-3");
const nullError7 = document.querySelector(".null-error7");
const percentileInput = document.querySelector(".percentile-inp");
const studentsInput = document.querySelector(".students-inp");
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let percentile = percentileInput.value;
  let students = studentsInput.value;
  let error = false;
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
  nullError7.classList.remove("show");
  void nullError7.offsetWidth;
  percentileInput.classList.remove("error-border");
  void percentileInput.offsetWidth;
  studentsInput.classList.remove("error-border");
  void studentsInput.offsetWidth;
  if (percentile.trim() === "" && students.trim() === "") {
    nullError3.classList.add("show");
    percentileInput.classList.add("error-border");
    studentsInput.classList.add("error-border");
    error = true;
  } else if (percentile.trim() === "") {
    nullError1.classList.add("show");
    percentileInput.classList.add("error-border");
    error = true;
  } else if (students.trim() === "") {
    nullError2.classList.add("show");
    studentsInput.classList.add("error-border");
    error = true;
  } else if (percentile <= 0 || percentile >= 100) {
    rangeError.classList.add("show");
    percentileInput.classList.add("error-border");
    error = true;
  } else if (students <= 0) {
    nullError7.classList.add("show");
    studentsInput.classList.add("error-border");
    error = true;
  }
  if (error == true) {
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

// Reset Btn 1

const errorMsg = document.querySelectorAll(".error");
const resetBtn = document.querySelector(".reset-btn");
function updateResetBtn1() {
  if (percentileInput.value.length > 0 || studentsInput.value.length > 0) {
    resetBtn.classList.add("show");
  } else {
    resetBtn.classList.remove("show");
  }
}
percentileInput.addEventListener("input", updateResetBtn1);
studentsInput.addEventListener("input", updateResetBtn1);

resetBtn.addEventListener("click", () => {
  resetBtn.classList.remove("show");
  errorMsg.forEach((error) => {
    error.classList.remove("show");
  });
  studentsInput.classList.remove("error-border");
  percentileInput.classList.remove("error-border");
  results.innerHTML = "";
  results.classList.remove("show");
  void results.offsetWidth;
  results.removeAttribute("style");
});

// Form-2 Submit
const results2 = document.querySelector(".results-2");
const rangeError2 = document.querySelector(".range-error2");
const rangeError3 = document.querySelector(".range-error3");
const rangeError4 = document.querySelector(".range-error4");
const nullError4 = document.querySelector(".null-error4");
const nullError5 = document.querySelector(".null-error5");
const nullError6 = document.querySelector(".null-error6");
const nullError8 = document.querySelector(".null-error8");
const rankInput = document.querySelector(".rank-inp");
const studentsInput2 = document.querySelector(".students-inp2");
document.getElementById("myForm2").addEventListener("submit", function (e) {
  e.preventDefault();
  let rank = rankInput.value;
  let students = studentsInput2.value;
  let studentsCount = students * 100000;
  let error = false;
  results2.innerHTML = "";
  results2.classList.remove("show");
  void results.offsetWidth;
  results.removeAttribute("style");
  rangeError2.classList.remove("show");
  void rangeError2.offsetWidth;
  rangeError3.classList.remove("show");
  void rangeError3.offsetWidth;
  rangeError4.classList.remove("show");
  void rangeError4.offsetWidth;
  nullError4.classList.remove("show");
  void nullError4.offsetWidth;
  nullError5.classList.remove("show");
  void nullError5.offsetWidth;
  nullError6.classList.remove("show");
  void nullError6.offsetWidth;
  nullError8.classList.remove("show");
  void nullError8.offsetWidth;
  rankInput.classList.remove("error-border");
  void percentileInput.offsetWidth;
  studentsInput2.classList.remove("error-border");
  void studentsInput2.offsetWidth;
  if (rank.trim() === "" && students.trim() === "") {
    nullError6.classList.add("show");
    rankInput.classList.add("error-border");
    studentsInput2.classList.add("error-border");
    error = true;
  } else if (rank.trim() === "") {
    nullError4.classList.add("show");
    rankInput.classList.add("error-border");
    error = true;
  } else if (students.trim() === "") {
    nullError5.classList.add("show");
    studentsInput2.classList.add("error-border");
    error = true;
  } else if (rank < 1) {
    rangeError3.classList.add("show");
    rankInput.classList.add("error-border");
    error = true;
  } else if (!Number.isInteger(Number(rank))) {
    rangeError4.classList.add("show");
    rankInput.classList.add("error-border");
    error = true;
  } else if (studentsCount <= 0) {
    nullError8.classList.add("show");
    studentsInput2.classList.add("error-border");
    error = true;
  } else if (rank > studentsCount) {
    rangeError2.classList.add("show");
    rankInput.classList.add("error-border");
    error = true;
  }
  if (error == true) {
    errorSound.currentTime = 0;
    errorSound.play();
    return;
  }
  var percentile = (100 * (studentsCount - rank)) / studentsCount;
  results2.innerHTML = `<div class = 'text'> Your Approximate Percentile is </div> <div class = 'rank'> ${percentile} </div>`;
  if (percentile >= 90) {
    results2.setAttribute("style", "color: green");
  } else if (percentile >= 70 && percentile < 90) {
    results2.setAttribute("style", "color: yellow");
  } else {
    results2.setAttribute("style", "color: red");
  }
  results2.classList.add("show");
  sound.currentTime = 0;
  sound.play();
});

// Reset Btn 2

const resetBtn2 = document.querySelector(".reset-btn2");
function updateResetBtn2() {
  if (rankInput.value.length > 0 || studentsInput2.value.length > 0) {
    resetBtn2.classList.add("show");
  } else {
    resetBtn2.classList.remove("show");
  }
}
rankInput.addEventListener("input", updateResetBtn2);
studentsInput2.addEventListener("input", updateResetBtn2);

resetBtn2.addEventListener("click", () => {
  resetBtn2.classList.remove("show");
  errorMsg.forEach((error) => {
    error.classList.remove("show");
  });
  studentsInput2.classList.remove("error-border");
  rankInput.classList.remove("error-border");
  results2.innerHTML = "";
  results2.classList.remove("show");
  void results2.offsetWidth;
  results2.removeAttribute("style");
});

//Switch BTn

const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const text1 = document.querySelector(".t-1");
const text2 = document.querySelector(".t-2");
const switchSound = document.getElementById("switch-sound");
let r = false;
const switchBtn = document.querySelector(".switch-btn");
switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("rotate");
  row1.classList.toggle("hide");
  row2.classList.toggle("hide");
  if (r) {
    text1.classList.toggle("remove");
    text2.classList.toggle("remove");
  }
  text1.classList.toggle("ani-for");
  text2.classList.toggle("ani-back");
  r = true;
  switchSound.currentTime = 0;
  switchSound.play();
  resetBtn.click();
  resetBtn2.click();
});

// Ester Egg

const esterEggSound = document.getElementById("esterEggSound");
const esterBtn = document.querySelector(".title-1-btn");
esterBtn.addEventListener("click", () => {
  esterEggSound.currentTime = 0;
  esterEggSound.play();
});
