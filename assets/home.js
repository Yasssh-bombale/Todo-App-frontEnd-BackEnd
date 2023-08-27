let selectField = document.getElementById("select-field");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrow = document.getElementById("drop-arrow");
let listContainer = document.getElementById("ul");

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// selectField.addEventListener("click", () => {
//   list.classList.toggle("hidden");
//   arrow.classList.toggle("rotate");
// });

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hidden");
    arrow.classList.toggle("rotate");
  };
}
