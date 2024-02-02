/*
validation
user / pass 8
pword match
h2 "Successfully registered"
gender = male; h2 = "Mr fname lastname you have successfull regis"
gender = female; h2 = "Ms fname lastname you have successfull regis"
*/

let form = document.querySelector("form");
let showBtn = document.querySelectorAll("button[type='button']");
let pwordTextBox = document.querySelectorAll("input[type='password']");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let gender = document.querySelector(".gender");
    let output = document.querySelector("h2");
    output.style.color = "rgb(223, 101, 101)";
    const { fname, lname, uname, pword, pword2, } = e.target;
    if (
        fname.value === "" ||
        lname.value === "" ||
        uname.value === "" ||
        pword.value === "" ||
        pword2.value === ""
    ) {
        output.innerText = "Please fill all fields!";
    } else if (pword.value.length < 8) {
        output.innerText = "Password must be atleast 8 characters";
    } else if (pword.value !== pword2.value) {
        output.innerText = "Password doesn't match";
    } else if (gender.value === "male") {
        output.style.color = "green";
        output.innerText = `Mr. ${fname.value} ${lname.value} you have successfully registered!`;
        form.reset();
    } else {
        output.style.color = "green";
        output.innerText = `Ms. ${fname.value} ${lname.value} you have successfully registered!`;
        form.reset();
    }
});

showBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let type = pwordTextBox[index].getAttribute("type");
        if (type === "password") {
            pwordTextBox[index].setAttribute("type", "input");
            btn.innerText = "Hide Password";
        } else {
            pwordTextBox[index].setAttribute("type", "password"); 
            btn.innerText = "Show Password";
        }
        
    });
});