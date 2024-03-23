const overlay = document.getElementsByClassName("overlay");
const lightbox = document.getElementsByClassName("lightbox");
const body = document.body;

document.addEventListener("click", lbOnClick);
document.addEventListener("keydown", onPress);

let slideIndex = 0;

// since i pass the value via delegation this will only be triggered by an image tag, tsk... one of the solution that i currently know is to convert this into class and instantiate it on the other js file, but i'm too lazy so naah...

export function myLightbox(e) {
    e.preventDefault();
    let parent = e.target.parentElement;
    let parentIndex = [...lightbox].indexOf(parent);

    if (e.target.tagName === "IMG" && parent.classList.contains("lightbox")) {
    
        createElements();
        createSlideshow(parentIndex);
    }
}

function createSlideshow(index) {
    let ctr = document.querySelector(".counter");
    let scImg = document.querySelector(".showcase-image");
    let lastIndx = lightbox.length - 1;

    if (index < 0) slideIndex = lastIndx;

    if (index > lastIndx) slideIndex = 0;

    [...lightbox].map(img => {
        if ([...lightbox].indexOf(img) === slideIndex) {
            let bigImg = `
                <img src="${img.href}">
                <p class="showcase-tags">${img.children[0].alt}</p>
            `;
            scImg.innerHTML = bigImg;
        }
    });
    
    ctr.innerText = `${slideIndex + 1}/${lightbox.length}`;
}

function createElements() {
    let overlay = `
        <div class="overlay">
            <span class="counter"></span>
            <div class="close">&times;</div>
            <div class="prev">&#10094;</div>
            <div class="next">&#10095;</div>
            <div class="showcase-image"></div>
        </div>
    `;

    body.insertAdjacentHTML("beforeend", overlay);
}

function lbOnClick(e) {
    if (e.target === overlay[0] || e.target.classList.contains("close")) {
        overlay[0].remove();
    }

    if (e.target.classList.contains("prev")) {
        createSlideshow(slideIndex -= 1);
    }

    if (e.target.classList.contains("next")) {
        createSlideshow(slideIndex += 1);
    }
}

function onPress(e) {
    if (overlay.length !== 0) {
        if (e.key === "ArrowLeft") {
            createSlideshow(slideIndex -= 1);
        }
        if (e.key === "ArrowRight") {
            createSlideshow(slideIndex += 1);
        }
        if (e.key === "Escape") {
            overlay[0].remove();
        }
    }
}