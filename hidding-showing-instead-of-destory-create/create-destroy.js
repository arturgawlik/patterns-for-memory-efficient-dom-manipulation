const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil impedit eum sequi aliquam labore. Ducimus consequatur exercitationem, ullam at dignissimos fugiat, eveniet dolorem veritatis corrupti harum molestias neque, vitae molestiae.";
const rootEl = document.getElementById("create-destroy-root");
let paragraphEl = null;

export function create() {
  paragraphEl = document.createElement("p");
  paragraphEl.textContent = lorem;
  rootEl.appendChild(paragraphEl);
}

export function destroy() {
  paragraphEl.remove();
}
