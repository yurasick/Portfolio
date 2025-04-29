import "./styles.css";

export default {
  name: "Гра",
  description: "Гра на найменшу кількість кліків",
};

import {
  resultList,
  allCell,
  btnClose,
  btnResult,
  btnReplay,
  btnStart,
  divClick,
  elem,
  wrapper,
} from "./modules/_marking.js";
import {
  starGame,
  sortedCell,
  mathScore,
  replayGame,
  mathResult,
  showBtnResult,
  createRes,
  showListResult,
  clearAllResults,
  saveToLocalStorage,
  localStorageData,
  arrResult,
} from "./modules/_functions.js";

document.addEventListener("DOMContentLoaded", () => {
  divClick.addEventListener("click", function () {
    localStorageData();
  });

  wrapper.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.classList.contains("cell")) {
      mathScore(event);
      mathResult();
    }
  });

  btnStart.addEventListener("click", function (event) {
    event.stopPropagation();
    starGame();
    showBtnResult();
  });

  btnReplay.addEventListener("click", function (event) {
    event.stopPropagation();
    replayGame(event);
    sortedCell(allCell);
  });

  // 6 part

  // 7 part

  // 1 функція отримання результатів

  btnResult.addEventListener("click", function () {
    createRes();
    showListResult(arrResult);
    saveToLocalStorage(arrResult);
  });

  btnClose.addEventListener("click", function () {
    elem.remove();
  });

  // 4
  resultList.addEventListener("click", function () {
    clearAllResults(arrResult);
  });

  // 5 збереження інформації в localStorage
});
