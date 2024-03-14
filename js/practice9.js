const tools = document.querySelector(".tool-wrapper");
const comBox = document.querySelector("#commentBox");
const comSec = document.querySelector("#comment-section");
const comBtn = document.querySelector(".comment-button");
const btns = document.querySelectorAll("[data-font]");

// Now how to remove the spans? gonna come back to this later
tools.addEventListener("click", (e) => {
   if (e.target.tagName === "A") {
      let btn = e.target;
      let font = e.target.dataset.font;

      let span = `<span class="${font}">${commentBox.innerHTML}</span>`;
      comBox.innerHTML = span;
   } 
});

comBtn.addEventListener("click", () => {
   const div = document.createElement("div");
   div.innerHTML = comBox.innerHTML;
   comSec.appendChild(div);
});