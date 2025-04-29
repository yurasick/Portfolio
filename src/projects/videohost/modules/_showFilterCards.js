// import { grid } from "./_showAllCards.js";
import videos from "./_video.js";
import { convertTime } from "./_convertTime.js";

import {
  searchResult,
  hOne,
  article,
  img,
  title,
  mark,
  time,
  year,
  genresList,
} from "./_elements.js";

const grid = document.querySelector(".grid");

export function showFilterCards(jsSearchInpTextCont) {
  grid.innerHTML = "";
  for (let i = 0; i < videos.length; i++) {
    let srch = "";
    srch = jsSearchInpTextCont.toLocaleUpperCase();
    if (videos[i].title.toLocaleUpperCase().includes(srch)) {
      article.setAttribute("data-film-id", videos[i].id);
      img.alt = videos[i].title;
      img.title = videos[i].title;
      title.textContent = videos[i].title;
      img.src = `assets/images/films/${videos[i].image}`;
      mark.title = `${videos[i].mark}`;
      mark.textContent = videos[i].mark;
      time.textContent = convertTime(videos[i].time);
      year.textContent = videos[i].year;
      videos[i].genres.split(",").forEach((genre) => {
        const li = document.createElement("li");
        li.textContent = genre;
        genresList.appendChild(li);
      });

      grid.append(article.cloneNode(true));
    }
  }
  if (grid.children.length == 0) {
    grid.append(searchResult);
  }
  hOne.textContent = "";
  hOne.insertAdjacentHTML(
    "afterBegin",
    `Результати за запитом <span> ${jsSearchInpTextCont}</span>:`
  );
}
