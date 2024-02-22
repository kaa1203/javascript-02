const chkbox = document.querySelector("#toggle");
const toggle = document.querySelector(".toggle");

let theme = localStorage.getItem("theme");

if (theme === "dark") { darkTheme() }

function darkTheme () {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
    // chkbox.checked = true;
}

function lightTheme () {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode"); 
    // chkbox.checked = false;
}

toggle.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme !== "dark") {
        darkTheme();
    } else {
        lightTheme();    
    }
});
