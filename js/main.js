let inputText = document.querySelector("#inputText");
let btnResult = document.querySelector("#btnResult");
let displayShowSecond = document.querySelector("#displayShowSecond");
let displayShowMinute = document.querySelector("#displayShowMinute");

displayShowSecond.innerHTML = " Result Second : 0 s";
displayShowMinute.innerHTML = " Result Minute : 0 m";

btnResult.onclick = () => {
  if (inputText.value != "") {
    let resultSecond = inputText.value.trim().split(" ").length / 2;
    let resultMinute = resultSecond / 60;

    displayShowSecond.innerHTML = ` Result Second : ${resultSecond} s`;
    displayShowMinute.innerHTML = ` Result Minute : ${resultMinute} m `;
  } else {
    alert("input Data please !");
  }
};
