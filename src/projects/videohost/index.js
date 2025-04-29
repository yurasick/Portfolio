import "./styles.css";

export default {
  name: "VideoHub",
  description: "Відеохостинг",
};

import videos from "./modules/_video.js";
import { showAllCards } from "./modules/_showAllCards.js";
import {
  unblockBtn,
  jsSearchInput,
  searchBtn,
  searchValue,
} from "./modules/_unblockBtn.js";
import { showFilterCards } from "./modules/_showFilterCards.js";
import {
  counterSpan,
  arrStorag,
  arr,
  createArrCards,
  showFavCards,
  cleanAllCards,
  deleteCard,
} from "./modules/_showFavCards.js";
import { createModalYoutube } from "./modules/_modalYoutube.js";
import {
  button,
  favBtn,
  buttonModal,
  buttonClear,
  ulModal,
  favoriteModal,
  grid,
  hOne,
} from "./modules/_elements.js";

document.addEventListener("DOMContentLoaded", () => {
  jsSearchInput.addEventListener("input", function () {
    unblockBtn();
    if (searchValue === "") {
      showAllCards(videos);
    }
  });

  // функція виводу карт з пошуку
  // і розмітка для неї

  // показати відфільтровані картки
  searchBtn.addEventListener("click", function () {
    showFilterCards(searchValue);
  });

  button.addEventListener("click", function () {
    showAllCards(videos);
    hOne.textContent = "Останні новинки";
  });

  if (searchValue === "") {
    showAllCards(videos);
  }

  for (let i = 0; i < grid.children.length; i++) {
    if (arrStorag.length > 0) {
      for (let j = 0; j < arrStorag.length; j++) {
        if (+arrStorag[j].id == +grid.children[i].dataset.filmId) {
          grid.children[i].classList.add("is-favorite");
        }
      }
    }
  }

  grid.addEventListener("click", function (e) {
    createArrCards(e);
  });

  /* 4 */

  favBtn.addEventListener("click", function () {
    showFavCards();
  });

  // закриваємо список з юлюблених фільмів поряд із лічильником
  buttonModal.addEventListener("click", function () {
    favoriteModal.style.display = "none";
  });

  buttonClear.addEventListener("click", function (e) {
    e.stopPropagation();
    cleanAllCards();
    showFavCards();
  });

  /* 5 */

  ulModal.addEventListener("click", function (e) {
    deleteCard(e);
    showFavCards();
  });

  /* 5.1 */

  grid.addEventListener("click", function (e) {
    createModalYoutube(e);
  });

  jsSearchInput.addEventListener("input", () => {
    if (jsSearchInput.value === "") {
      hOne.innerHTML = "";
      hOne.textContent = "Останні новинки";
    }
  });
});
