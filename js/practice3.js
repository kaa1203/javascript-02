const numOne = document.querySelector("#num1")
const numTwo = document.querySelector("#num2")
const btns = document.querySelectorAll("button");
let result = document.querySelector("h2");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let operand = btn.innerText; 
        if (numOne.value === "" || numTwo.value == "")  return result.innerText = "Please fill the fields";

        if (operand === "+") {
            result.innerText = parseInt(numOne.value) + parseInt(numTwo.value);
        } else if (operand === "-") {
            result.innerText = parseInt(numOne.value) - parseInt(numTwo.value);
        } else if (operand === "*") {
            result.innerText = parseInt(numOne.value) * parseInt(numTwo.value);
        } else {
            result.innerText = parseInt(numOne.value) / parseInt(numTwo.value);
        }
    });
})