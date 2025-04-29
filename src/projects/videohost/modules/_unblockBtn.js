import { hOne } from "./_elements";

export const jsSearchInput = document.querySelector(".js-search-input");
export const searchBtn = document.querySelector(".search-btn");

export let searchValue = "";

export function unblockBtn() {
  searchValue = jsSearchInput.value;
  searchValue.length > 2
    ? searchBtn.removeAttribute("disabled")
    : searchBtn.setAttribute("disabled", "disabled");
  return searchValue;
}
