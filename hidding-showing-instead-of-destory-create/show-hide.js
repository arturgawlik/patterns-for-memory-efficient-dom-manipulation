const rootEl = document.getElementById("show-hide-root");
let paragraphEl = document.querySelector("#show-hide-root p");

export function show() {
  paragraphEl.style.display = "block";
}

export function hide() {
  paragraphEl.style.display = "none";
}
