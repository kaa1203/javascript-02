const form = document.querySelector(".form");
const uname = document.querySelector("#uname");
const pword = document.querySelector("#pword");
const icon = document.querySelector(".icon");

const INPUT_KEY = "input-values"; 

form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);

icon.addEventListener("click", () => {
    if (pword.type !== "text") {
        pword.setAttribute("type", "text");
        icon.children[0].setAttribute("href", "./images/icons.svg?#eye-close");
    } else {
        pword.setAttribute("type", "password");
        icon.children[0].setAttribute("href", "./images/icons.svg?#eye");
    }
});

function onInput(e) {
    const { uname, pword} = e.currentTarget;
    if (e.target.tagName === "INPUT") {
        let label = e.target.nextElementSibling;
        if (e.target.value !== "") {
            label.classList.add("focus");
        } else {
            label.removeAttribute("class");
        }
    }
    
    const formData = { uname: uname.value, pword: pword.value };
    localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
    e.preventDefault();
    if (uname.value !== "" && pword.value !== "") {
        form.reset();
        localStorage.removeItem(INPUT_KEY);
        uname.nextElementSibling.removeAttribute("class");
        pword.nextElementSibling.removeAttribute("class"); 
    }
}

function localGetter() {
    let obj = JSON.parse(localStorage.getItem(INPUT_KEY));

    if (obj !== null) {
        if (uname.value === "") { uname.value = obj.uname }
        if (uname.value !== "") { uname.nextElementSibling.classList.add("focus") }

        if (pword.value === "") { pword.value = obj.pword }
        if (pword.value !== "") { pword.nextElementSibling.classList.add("focus") }
    }
}

localGetter();

