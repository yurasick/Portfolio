import {
  allCell,
  grid,
  btnStart,
  btnReplay,
  divClick,
  divScore,
  btnResult,
  wrapper,
  elem,
  resultsText,
  ulres,
  resultItem,
  resultList,
  resultHead,
  top,
} from "./_marking.js";
import { colorsArray } from "./_colorsArray.js";

export let arrResult = JSON.parse(localStorage.getItem("arr")) || [];

export function sortedCell(obj) {
  let sortedObj = [...obj];
  sortedObj.sort(() => Math.random() - 0.5);

  grid.innerHTML = "";

  for (let item of sortedObj) {
    grid.append(item);
  }
}

export function starGame() {
  const title = document.querySelector("title");
  title.textContent = "Гра почалась";
  sortedCell(allCell);
  grid.classList.remove("start");
  btnStart.classList.add("btn-disabled");
  top.append(btnReplay);
  top.append(divClick);
  top.append(divScore);
}

let score = 0;

export function mathScore(event) {
  let cell = event.target;
  cell.classList.contains("clicked") ? null : cell.classList.add("clicked");
  let celltext = cell.innerText;
  let index;
  for (let i = 0; i < allCell.length; i++) {
    if (allCell[i].textContent == celltext) {
      index = i;
    }
  }
  cell.style.backgroundColor = `${colorsArray[index]}`;
  ++divClick.textContent;
  score += +cell.textContent;
  divScore.textContent = score;
  cell.style.pointerEvents = "none";
  divClick.textContent === "0" ? (score = 0) : null;
  divClick.textContent === "0" ? (divScore.textContent = 0) : null;
  if (score == 1000) {
    grid.classList.add("win");
    const title = document.querySelector("title");
    title.textContent = "Виграш!!!";
  }
  if (score > 1000) {
    grid.classList.add("loss");
    const title = document.querySelector("title");
    title.textContent = "Невдача";
  }
}

export function replayGame(event) {
  const title = document.querySelector("title");
  title.textContent = "Гра почалась";
  divClick.textContent = "0";
  divScore.textContent = "0";
  [...allCell].forEach((item) => {
    item.classList.remove("clicked");
    item.style.pointerEvents = "auto";
    item.style.backgroundColor = "rgba(255, 255, 255, 0.10)";
  });
  grid.classList.contains("win") ? grid.classList.remove("win") : null;
  grid.classList.contains("loss") ? grid.classList.remove("loss") : null;
  score = 0;
  return score;
}

export function mathResult() {
  let obj = {};
  if (grid.classList.contains("win") || grid.classList.contains("loss")) {
    obj["clicks"] = divClick.textContent;
    obj["score"] = divScore.textContent;
    arrResult.push(obj);
  }
  return arrResult;
}

export function showBtnResult() {
  btnReplay.after(btnResult);
}

export function createRes() {
  wrapper.prepend(elem);
  if (arrResult.length > 0) {
    resultsText.remove();
  }
}

export function showListResult(arrResult, arr = "") {
  arrResult.length === 0 ? ((arrResult = null), (arrResult = arr)) : null;
  if (grid.classList.contains("win") || grid.classList.contains("loss")) {
    ulres.innerHTML = "";
    for (let i = 0; i < arrResult.length; i++) {
      let ternOperator = "";
      ternOperator = `${arrResult[i]["score"]}` > 1000 ? "Невдача" : "Виграш";
      resultItem.innerHTML = `<span>Кліків: ${arrResult[i]["clicks"]}</span>
      <span>Балів: ${arrResult[i]["score"]}</span>
      <span>${ternOperator}</span>`;
      ulres.prepend(resultItem.cloneNode(true));
    }
    resultList.classList.remove("btn-disabled");
  }
}

export function clearAllResults(arrResult) {
  arrResult.length = 0;
  ulres.innerHTML = "";
  resultList.classList.add("btn-disabled");
  resultHead.after(resultsText);
}

export function saveToLocalStorage(arrResult) {
  if (
    resultList.classList.contains("btn-disabled") ||
    grid.classList.contains("win") ||
    grid.classList.contains("loss")
  ) {
    localStorage.setItem("arr", JSON.stringify(arrResult));
    console.log(JSON.parse(localStorage.getItem("arr")));
  }
}

// функція повернення результатів після перезагрузки сторінки

export function localStorageData() {
  let arr = JSON.parse(localStorage.getItem("arr"));
  return arr;
}

// єдине тільки я не знаю к зробити в 5 пункті 4 підпункт
