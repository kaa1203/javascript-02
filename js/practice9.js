const tools = document.querySelector(".tool-wrapper");
const comBox = document.querySelector("#commentBox");
const comSec = document.querySelector("#comment-section");
const comBtn = document.querySelector(".comment-button");
const spans = document.getElementsByTagName("span");
const btns = document.querySelectorAll("[data-font]");

// How to add span inside a created span??? SPANCEPTION!!!!
tools.addEventListener("click", (e) => {
   if (e.target.tagName === "A") {
      let btn = e.target.dataset.font;
      let span = `<span class="${btn}">${commentBox.innerText}</span>`;
      comBox.innerHTML = span;
   } 
});

comBtn.addEventListener("click", () => {
   const div = document.createElement("div");
   div.innerHTML = comBox.innerHTML;
   comSec.appendChild(div);
});