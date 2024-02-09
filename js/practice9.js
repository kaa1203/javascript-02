const tools = document.querySelector(".tool-wrapper");
const commentBox = document.querySelector("#commentBox");
const spans = document.getElementsByTagName("span");
const btns = document.querySelectorAll("[data-font]");

// How to add span inside a created span??? SPANCEPTION!!!!
tools.addEventListener("click", (e) => {
   if (e.target.tagName === "A") {
      let btn = e.target.dataset.font;
      let span = `<span class="${btn}">${commentBox.innerText}</span>`;
      commentBox.innerHTML = span;
   } 
});
