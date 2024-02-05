const keys = document.querySelectorAll(".key");
const output = document.querySelector("textarea");

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    console.log(e.key)
    keys.forEach(key => { if (e.code === key.id) key.style.border = "1px solid red" });
    e.key === " " ? key = "Space" : key = e.key; 
    output.innerText = `You pressed the key ${key.toUpperCase()}`;
});
