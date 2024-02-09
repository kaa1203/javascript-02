const input = document.querySelector("#ve-input");
const output = document.querySelector("#ve-output");
const h2 = document.querySelector("h2");
const btn = document.querySelector("#ve-btn");

btn.addEventListener("click", () => {
    let text = "";
    let nums = input.value.toString().split("");
    if (nums.length === 0) return output.textContent = "fill the field first!";
    
    let total = nums.reduce((total, num) => total += parseInt(num), 0);
    if (total > 9) {
        total = total
            .toString()
            .split("")
            .reduce((total2, num) => total2 += parseInt(num), 0);
    }

    if (total % 2 === 0) {
        text = "Very Even";
    } else {
        text = "Not Very Even";
    }
        output.textContent = total +" is "+ text;
});

