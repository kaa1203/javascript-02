// Add list
const ul = document.querySelector("ul");
const fruits = ["apple", "banana", "tomato"];

fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.innerText = fruit;
    ul.appendChild(li);
});

//Add and set image 
const imageSrc = "https://crocoder.dev/icon.png";
const div = document.querySelector("div");
const img = document.createElement("img");

img.setAttribute("src", imageSrc);
// the solution is: img.src = imageSrc. Didn't know this one 
div.appendChild(img);

// Change first and last li
const firstLi = document.querySelectorAll("ul li:first-child");
const lastLi = document.querySelectorAll("ul li:last-child");

firstLi.forEach(li => li.textContent = "First");
lastLi.forEach(li => li.textContent = "Last");

// Add List/Rename list
const divTwo = document.getElementById("list-app");
const input = document.createElement("input");
const btn = document.createElement("button");
const ulTwo = document.createElement("ul");

input.setAttribute("type", "text");
btn.textContent = "Create Item";

divTwo.appendChild(ulTwo);
divTwo.appendChild(input);
divTwo.appendChild(btn);

btn.addEventListener("click", () => {
    if (input.value === "") {return alert("No input")}
    let li = document.createElement("li");
    li.textContent = input.value;
    ulTwo.appendChild(li);
    input.value = "";
});

ulTwo.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        let userInput = prompt();
        e.target.textContent = userInput;
    }
})