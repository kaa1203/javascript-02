import { pics } from './pictures.js';

const ul = document.querySelector("ul");
const overLay= document.querySelector(".overlay");

pics.forEach(pic => {
    const { preview, original, description } = pic;
    let li = `
        <li>
            <img src="${preview}" data-src="${original}" alt="${description}">
        </li>
    `;
    ul.innerHTML += li;
});

ul.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        let src = e.target.dataset.src;
        console.log(src)
        overLay.classList.remove("is-hidden");
        let img = `
        <div class="big-picture">
            <img src="${src}">
        </div >
        `;
        overLay.innerHTML = img;
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "Escape") {
        overLay.classList.add("is-hidden");
    }
});

document.addEventListener("click", e => {
    if (e.target === overLay) {
        overLay.classList.add("is-hidden");
    }
});


