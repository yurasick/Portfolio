import videos from "./_video.js";

let youModal = document.createElement("div");
youModal.className = "youtube-modal";
let youcontent = document.createElement("div");
youcontent.className = "content";
youModal.prepend(youcontent);
const youhead = document.createElement("head");
youhead.className = "head";
youcontent.prepend(youhead);
const youTitle = document.createElement("div");
youTitle.className = "title";
youTitle.textContent = "підставити назву фільму"; // назва фільму
youhead.prepend(youTitle);
const youButton = document.createElement("button");
youButton.className = "btn-close js-close-youtube-modal";
youButton.setAttribute("type", "button");
youButton.setAttribute("title", "закрити");
youhead.append(youButton);
const youBody = document.createElement("div");
youBody.className = "body";
youcontent.append(youBody);
const youType = document.createElement("div");
youType.className = "type";
youType.textContent = "підставити назву фільму"; // назва фільму
youBody.prepend(youType);
const youTime = document.createElement("div");
youTime.textContent = "підставити час фільму у форматі __ год. __ хв"; // час
youType.after(youTime);
const youIframe = document.createElement("iframe");
youIframe.setAttribute("width", "560");
youIframe.setAttribute("height", "315");
youIframe.setAttribute(
  "src",
  "https://www.youtube.com/embed/підставити трейлер фільму?si=SOj9kFsaxSjIIVEu" // підставити
);
youIframe.setAttribute("title", "YouTube video player");
youIframe.setAttribute("frameborder", "0");
youIframe.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
);
youIframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
youIframe.setAttribute("allowfullscreen", "allowfullscreen");
youType.after(youIframe);

export function createModalYoutube(e) {
  let trg = e.target;
  if (trg.classList.contains("js-btn-open-film-modal")) {
    youTitle.textContent =
      trg.parentElement.parentElement.children[1].children[0].innerText;
    youType.textContent =
      trg.parentElement.parentElement.children[1].children[0].innerText;
    youTime.textContent = trg.parentElement.children[2].innerText;
    let index = 0;
    index = trg.parentElement.parentElement.dataset.filmId - 1;
    youIframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${
        videos[index].trailer.split("=")[1]
      }?si=SOj9kFsaxSjIIVEu`
    );
    e.target.after(youModal);
  }
  if (trg.classList.contains("js-close-youtube-modal")) {
    trg.parentElement.parentElement.parentElement.parentElement.children[5].remove();
  }
}
