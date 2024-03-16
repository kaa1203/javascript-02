import { getTodos, addTodos, updateTodos, deleteTodos } from "./todo-api.js";

const todoCon = document.querySelector(".todo-container");
const addBtn = document.querySelector(".add-todo");

let dummyDivs = 0;

function displayTodos() {
    getTodos().then((todos) => {
        todoCon.innerText = "";
        let header = `<h1 class="todo-header">TODO LIST</h1>`;
        todos.map(({ title, id, status }) => {
            let chkbx = `<input type="checkbox" class="checkbox"></input>`;
            let todo = `<input class="todos-title" value="${title}"></input>`;
            let del = `<button class="delete is-hidden">\u00d7</button>`;
            
            if (status == true) {
                chkbx = `<input type="checkbox" class="checkbox" checked></input>`;
                todo = `<input class="todos-title check" value="${title}"></input>`;
            }

            if (title !== "") {
                del = `<button class="delete">\u00d7</button>`;
            }
    
            let div = `
                <div class="todos" id=${id}>
                    ${chkbx}
                    ${todo}
                    ${del}
                </div>
            `;
            todoCon.insertAdjacentHTML("beforeend", div);
            dummyDivs = todos.length;
        });
        todoCon.insertAdjacentHTML("afterbegin", header);
        bgs(dummyDivs);
    });
}

todoCon.addEventListener("change", editTodos);   
todoCon.addEventListener("click", removeTodos);  
addBtn.addEventListener("click", addLine);  

function addLine() {
    let div = `
        <div class="todos">
            <input type="checkbox" class="checkbox"></input>
            <input class="todos-title"></input>
            <button class="delete is-hidden">\u00d7</button>
        </div>
        `;
        todoCon.insertAdjacentHTML("beforeend", div);
}

function editTodos(e) {
    const id = e.target.parentElement.id;
    const title = e.target.value;
    let status = e.target.parentElement.dataset.status;
    const todo = e.target.nextElementSibling;

    const data = { id, title, status };

    if (e.target.classList.contains("todos-title")) {
        id !== "" ? updateTodos(data) : addTodos({ title: data.title });
    }

    if (e.target.tagName === "INPUT") {
        if (e.target.classList.contains("checkbox") && id !== "") {
            if (e.target.checked) {
                status = true;
                todo.classList.add("check");
            } else {
                status = false;
                todo.classList.remove("check");
            }
            updateTodos({id, status });
        }

        if (title !=="") {
            todo.classList.remove("is-hidden");
        } else {
            todo.classList.add("is-hidden");
        }
    }
}

function removeTodos(e) {
    const todos = document.querySelectorAll(".todos");
    const lastTodo = todos.length - 1;
    const parent = e.target.parentElement;
    const id = e.target.parentElement.id;

    if (e.target.tagName === "BUTTON") {
        if (id !== "") {
            deleteTodos(id);
        }
        parent.remove();
        addLine();
    }

    if ([...todos].indexOf(parent) === lastTodo) {
        addLine();
    }
}

function bgs(divs) {
    for (divs; divs < 10; divs++) {
        let div = `
           <div class="todos">
                <input type="checkbox" class="checkbox"></input>
                <input class="todos-title"></input>
                <button class="delete is-hidden">\u00d7</button>
           </div>
           `;
           todoCon.insertAdjacentHTML("beforeend", div);
    }
}

document.addEventListener("DOMContentLoaded", displayTodos);
