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

var results = document.querySelector(".results");
const sound = document.getElementById("submitSound");
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  results.innerHTML = "";
  results.classList.remove("show");
  results.removeAttribute("style");
  let percentile = document.getElementById("percentile").value;
  let students = document.getElementById("students").value * 100000;
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
