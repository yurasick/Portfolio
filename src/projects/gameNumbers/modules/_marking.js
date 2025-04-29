export let wrapper;
export let grid;
export let top;
export let btnStart;
export let divClick;
export let divScore;
export let btnReplay;
export let allCell;
export let click;
export let btnResult;
export let elem;
export let resultHead;
export let btnClose;
export let resultsText;
export let ulres;
export let resultList;
export let resultItem;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.createElement("div");
  grid.classList.add("grid");

  wrapper = document.querySelector(".wrapper");

  wrapper.insertAdjacentElement("afterbegin", grid);

  const cell = document.createElement("div");
  cell.classList.add("cell");
  for (let i = 0; i <= 99; i++) {
    let clonCell = cell.cloneNode(true);
    clonCell.textContent = `${i}`;
    grid.append(clonCell);
  }
  grid.classList.add("start");

  // 2 part

  top = document.createElement("div");
  top.classList.add("top");

  wrapper.prepend(top);

  btnStart = document.createElement("button");
  btnStart.className = "btn btn-start btn-blue";
  top.prepend(btnStart);

  divClick = document.createElement("div");
  divClick.className = "counter click-counter";
  divClick.textContent = "0";

  divScore = document.createElement("div");
  divScore.className = "counter score-counter";
  divScore.textContent = "0";

  btnReplay = document.createElement("button");
  btnReplay.className = "btn btn-replay btn-violet";

  // 3 part

  allCell = document.querySelectorAll(".cell");

  click = 0;
  // export let score = 0;

  // 3 створюємо кнопку з результатами
  const divTop = document.querySelector(".top");
  btnResult = document.createElement("div");
  btnResult.className = "btn btn-result btn-purple";

  elem = document.createElement("div");
  elem.classList.add("results");
  resultHead = document.createElement("div");
  resultHead.classList.add("results-head");
  elem.append(resultHead);
  const divrs = document.createElement("div");
  divrs.textContent = "Результати";
  resultHead.prepend(divrs);
  btnClose = document.createElement("button");
  btnClose.className = "btn btn-close btn-transparent";
  resultHead.append(btnClose);
  resultsText = document.createElement("div");
  resultsText.textContent = "Немає результатів";
  elem.append(resultsText);
  ulres = document.createElement("ul");
  ulres.classList.add("results-list");
  elem.append(ulres);
  resultList = document.createElement("button");
  resultList.className = "results-clear btn-disabled";
  resultList.textContent = "Очистити результати";
  elem.append(resultList);

  resultItem = document.createElement("li");
  resultItem.className = "results-item";
});
