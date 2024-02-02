let tds = document.querySelectorAll("td");

tds.forEach(td => {
    td.addEventListener("click", () => {
        let color = prompt("Enter Color:");
        td.style.backgroundColor = color.toLowerCase();
    })
});
