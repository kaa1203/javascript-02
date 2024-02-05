const srchBox = document.querySelector("input");
const poem = document.querySelector(".poem");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    poem.innerHTML = poem.innerText
        .split(" ")
        .map((word) => word.toLowerCase() === srchBox.value.toLowerCase() ? `<span style="background-color: yellow; font-size: 30px">${word}</span>` : word)
        .join(" ");

});