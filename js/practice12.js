const chkbox = document.querySelector("#toggle");
const toggle = document.querySelector(".toggle");

let theme = localStorage.getItem("theme");

if (theme === "dark") {
    darkTheme();
    chkbox.checked = true;
}

function darkTheme () {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
}

function lightTheme () {
    localStorage.setItem("theme", "light");
    document.body.removeAttribute("dark-mode"); 
}

toggle.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme !== "dark") {
        darkTheme();
    } else {
        lightTheme();    
    }
});
