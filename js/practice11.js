import { memeGallery } from "./memes.js"; 

const ul = document.querySelector(".gallery");
const showCase = document.querySelector(".showcase");
const bigPicture = document.querySelector(".showcase-list");
const slideCounter = document.querySelector(".slide-counter");
const desc = document.querySelector(".desc");


const close = () => showCase.classList.add("is-hidden");
const open = () => showCase.classList.remove("is-hidden");

let slideIndex = 1;
memeGallery.forEach((meme, index) => {
    const { src, desc } = meme;
    let li = document.createElement("li");
    li.classList.add("gallery-item")
    li.innerHTML = `<img src="${src}" alt="${desc}" id="${index}"> `;
    ul.insertAdjacentElement("beforeend", li);
});

// I know i shouldn't copy/paste my code but due to my lack of knowledge on functions this is the best that i can do, for now...
memeGallery.forEach((meme, index) => {
    const { src, desc } = meme;
    let li = document.createElement("li");
    li.classList.add("showcase-item")
    li.innerHTML = `<img src="${src}" alt="${desc}" id="${index}"> `;
    bigPicture.insertAdjacentElement("beforeend", li);
});

ul.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        open();
        currentSlide(parseInt(e.target.id)+1);
    }
});

showCase.addEventListener("click", e => {
    if (e.target.dataset.button === "previous") {
        slider(slideIndex -= 1);
    }
    if (e.target.dataset.button === "next") {
        slider(slideIndex += 1)
    }
});
const currentSlide = (n) => slider(slideIndex = n);

function slider(n) {
    let lis = document.getElementsByClassName("showcase-item");
    n = parseInt(n);

    for (let i = 0; i < lis.length; i++) {lis[i].style.display = "none";}

    if (n > lis.length) slideIndex = 1;
    if (n < 1) slideIndex = lis.length;

    slideCounter.innerText = `${slideIndex} / ${lis.length}`
    lis[slideIndex - 1].style.display = "block";

    let alt = lis[slideIndex - 1].children[0].alt;
    
    desc.textContent = alt;
    
}

document.addEventListener("click", e => { if (e.target === showCase || e.target.dataset.button === "close") close() });
document.addEventListener("keyup", e => { if (e.key === "Escape") close(); });

document.addEventListener("keyup", e => { if (e.key === "ArrowLeft") slider(slideIndex -= 1);});
document.addEventListener("keyup", e => { if (e.key === "ArrowRight") slider(slideIndex += 1); });
