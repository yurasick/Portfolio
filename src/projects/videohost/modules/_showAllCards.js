import {
  grid,
  article,
  img,
  title,
  mark,
  time,
  year,
  genresList,
} from "./_elements.js";

import { convertTime } from "./_convertTime.js";

export let showAllCards = function (videos) {
  grid.innerHTML = "";
  for (let i = 0; i < videos.length; i++) {
    article.setAttribute("data-film-id", videos[i].id);
    img.alt = videos[i].title;
    img.title = videos[i].title;
    title.textContent = videos[i].title;
    img.src = `assets/images/films/${videos[i].image}`;
    mark.title = videos[i].mark;
    mark.textContent = videos[i].mark;
    time.textContent = convertTime(videos[i].time);
    year.textContent = videos[i].year;
    genresList.innerHTML = "";
    videos[i].genres.split(",").forEach((genre) => {
      const li = document.createElement("li");
      li.textContent = genre;
      genresList.appendChild(li);
    });
    grid.append(article.cloneNode(true));
  }
};

export default showAllCards;
