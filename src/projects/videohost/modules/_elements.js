import { showAllCards } from "./_showAllCards.js";
import videos from "./_video.js";

export let grid;

document.addEventListener("DOMContentLoaded", () => {
  grid = document.querySelector(".grid");
});

export const article = document.createElement("article");
article.className = "card";

const cardWrap = document.createElement("div");
cardWrap.className = "card-wrap";

export const img = document.createElement("img");
img.src = `assets/images/films/nyad.webp`;
img.className = "card-img";
img.width = 200;
img.height = 300;

export const mark = document.createElement("span");
mark.className = "card-mark";

export const time = document.createElement("span");
time.className = "card-time";
time.title = "хронометраж";
time.textContent;

const favoriteButton = document.createElement("button");
favoriteButton.className = "card-favorite added js-btn-add-to-favorite";
favoriteButton.title = "додати в обране";

const playButton = document.createElement("button");
playButton.className = "card-play js-btn-open-film-modal";
playButton.title = "подивитись трейлер";

cardWrap.appendChild(img);
cardWrap.appendChild(mark);
cardWrap.appendChild(time);
cardWrap.appendChild(favoriteButton);
cardWrap.appendChild(playButton);

const cardContent = document.createElement("div");
cardContent.className = "card-content";

export const title = document.createElement("p");
title.className = "card-title";

const details = document.createElement("div");
details.className = "card-details";

export const year = document.createElement("span");
year.className = "card-year";

export const genresList = document.createElement("ul");
genresList.className = "card-genres";

details.appendChild(year);
details.appendChild(genresList);
cardContent.appendChild(title);
cardContent.appendChild(details);
article.appendChild(cardWrap);
article.appendChild(cardContent);

export const hOne = document.querySelector("h1");

document.addEventListener("DOMContentLoaded", () => {
  showAllCards(videos);
});
export const searchResult = document.createElement("div");
searchResult.className = "search-result";
const paragraph = document.createElement("p");
paragraph.textContent = "На жаль, за вашим запитом нічого не знайдено";
export const button = document.createElement("button");
button.className = "btn-clear js-clear-search-results";
button.textContent = "Показати усі фільми";
searchResult.appendChild(paragraph);
searchResult.appendChild(button);

export const favoriteModal = document.createElement("div");
favoriteModal.className = "favorite-modal open";
export const headModal = document.createElement("div");
headModal.classList.add("head");
favoriteModal.insertAdjacentElement("afterbegin", headModal);
const titleModal = document.createElement("div");
titleModal.classList.add("title");
titleModal.textContent = "Обране";
headModal.insertAdjacentElement("afterbegin", titleModal);
export const buttonModal = document.createElement("button");
buttonModal.className = "btn-close js-close-modal";
buttonModal.setAttribute("type", "button");
buttonModal.setAttribute("title", "закрити");
titleModal.after(buttonModal);

export const textModal = document.createElement("p");
textModal.classList.add("text");
textModal.textContent = "Список обраного порожній";

export const ulModal = document.createElement("ul");

export const buttonClear = document.createElement("button");
buttonClear.className = "btn-clear js-clear-modal";
buttonClear.setAttribute("type", "button");
buttonClear.setAttribute("title", "очистити список");
buttonClear.textContent = "Очистити обране";
ulModal.after(buttonClear);

export const liModal = document.createElement("li");
export const favoriteCard = document.createElement("div");
favoriteCard.classList.add("favorite-card");
favoriteCard.setAttribute("data-film-id", "підставити id"); // зміни мають бути
liModal.prepend(favoriteCard);
export const favoriteImg = document.createElement("img");
favoriteImg.setAttribute("width", "50");
favoriteImg.setAttribute("height", "75");
favoriteImg.setAttribute("title", "підставити назву фільму"); //зміни мають бути
favoriteCard.prepend(favoriteImg);
export const favoriteTitle = document.createElement("div");
favoriteTitle.className = "favorite-card-title";
favoriteTitle.textContent = " підставити назву фільму"; //зміни мають бути
favoriteImg.after(favoriteTitle);
const favoriteAction = document.createElement("div");
favoriteAction.classList.add("favorite-actions");
favoriteTitle.after(favoriteAction);
const buttonWatch = document.createElement("button");
buttonWatch.className = " btn-watch js-btn-open-film-modal";
buttonWatch.setAttribute("title", "переглянути трейлер");
favoriteAction.insertAdjacentElement("afterbegin", buttonWatch);
const buttonRemove = document.createElement("button");
buttonRemove.className = "btn-remove js-remove-from-favorite-btn";
buttonRemove.setAttribute("title", "видалити з обраного");
buttonWatch.after(buttonRemove);

// виводимо список з юлюблених фільмів поряд із лічильником
export const favBtn = document.querySelector(".js-favorite-btn");
export const navAction = document.querySelector(".nav-actions");
