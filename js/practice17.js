import { BASE_LINK, options } from "./pixabay-api.js";
import { myLightbox } from "./mylightbox.js";

let { key, q, image_type, orientation, safesearch, page, per_page} = options.params;

const gallery = document.querySelector(".gallery");
const searchCon = document.querySelector(".search-wrapper");
const nav = document.querySelector(".navbar");
const themeBtn = document.querySelector(".themes");
const toTopBtn = document.getElementsByClassName("go-up");

let theme = localStorage.getItem("theme"); 

let result = document.createElement("div");
result.className = "result";
let ul = document.createElement("ul");
ul.className = "list";

let toTop = document.createElement("button");
toTop.className = "go-up is-hidden";
toTop.innerHTML = `
    <svg class="icon">
        <use href="../images/icons.svg?#arrow-up"></use>
    </svg>
`;

gallery.insertAdjacentElement("afterbegin", ul);
gallery.insertAdjacentElement("afterbegin", result);
gallery.insertAdjacentElement("afterbegin", toTop);

document.addEventListener("input", onInput);
document.addEventListener("click", onClick);
document.addEventListener("submit", onSubmit);
document.addEventListener("scroll", onScroll);
themeBtn.addEventListener("click", themeClicked);
toTopBtn[0].addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
ul.addEventListener("click", myLightbox); //now i get why they use class


let total = "";

function onInput(e) {
    if (e.target.tagName === "INPUT") {
        let del = e.target.nextElementSibling;
        let input = e.target.value;

        if (input.trim() !== "") { return  del.classList.remove("is-hidden") }
        del.classList.add("is-hidden");
    }
}

function onClick(e) {
    if (e.target.classList.contains("del")) {
        let srchbr = e.target.previousElementSibling;
        srchbr.value = "";
        srchbr.focus();
        e.target.classList.add("is-hidden");
    }

    if (e.target.classList.contains("nav-logo")) {
        nav.classList.add("is-hidden");
        ul.innerHTML = "";
        searchCon.classList.remove("is-hidden");
        searchCon.children[1].children[0].value = "";
        searchCon.children[1].children[0].nextElementSibling.classList.add("is-hidden");
        result.innerText = "";
        result.classList.add("is-hidden");
    }
}

async function onSubmit(e) {
    e.preventDefault();
    const { searchbar } = e.target;
    q = searchbar.value;

    try {
        let res = await fetch(`${BASE_LINK}?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&page=${page}&per_page=${per_page}`);
        let datas = res.json();

        if (q === "") { return }

        datas.then(data => {
            const { totalHits, hits } = data;

            total = totalHits;

            result.innerText = `Showing ${total} search results`;
            ul.innerHTML = "";
            
            searchCon.classList.add("is-hidden");
            nav.classList.remove("is-hidden");
            result.classList.remove("is-hidden");
            createCards(hits);
        });
    } catch (err) {
        console.log(err);
    }
}

async function loadMore() {
    if (page * per_page <= total) {
        page += 1;

        try {
            let res = await fetch(`${BASE_LINK}?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&page=${page}&per_page=${per_page}`);
            let datas = res.json();

            datas.then(data => {
                const { hits } = data;

                createCards(hits);
            });
        } catch (err) {
            console.log(err);
        }
    }
}

function createCards(images) {
    images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        let li = `
            <li class="item">
                <a href="${largeImageURL}" class="link card lightbox">
                    <img src="${webformatURL}" alt="${tags}" class="image" loading="lazy">
                    <div>
                        <p>
                            <b>Likes</b>
                            ${likes}
                        </p>
                        <p>
                            <b>Views</b>
                            ${views}
                        </p>
                        <p>
                            <b>Comments</b>
                            ${comments}
                        </p>
                        <p>
                            <b>Downloads</b>
                            ${downloads}
                        </p>
                    </div>
                </a>
            </li>
        `;
        ul.insertAdjacentHTML("beforeend", li);
    }).join();
}

function themeClicked() {
    theme = localStorage.getItem("theme");
    if (theme !== "light") {
        lightTheme();
        return
    }
    darkTheme();
}

function themeChecker() {
    if (theme === "light") {
        lightTheme();
        return;
    }
    darkTheme();
}

function darkTheme() {
    localStorage.setItem("theme", "dark");
    document.body.className = "dark-theme";
    themeBtn.children[0].children[0].setAttribute("href", "./images/icons.svg?#moon");
}

function lightTheme() {
    localStorage.setItem("theme", "light");
    document.body.removeAttribute("class");
    themeBtn.children[0].children[0].setAttribute("href", "./images/icons.svg?#sun");
}

themeChecker();

function onScroll() {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight) {
        loadMore();
    }

    if (scrollTop > 20) {
      return toTopBtn[0].classList.remove("is-hidden");
    }  
    toTopBtn[0].classList.add("is-hidden");
}