import { getTodos, addTodos, updateTodos, deleteTodos } from "./todo-api.js";

const todoCon = document.querySelector(".todo-container");
const addTodo = document.querySelector(".add-todo");

let dummyDivs = 0;

function displayTodos() {
    getTodos().then((todos) => {
        todos.forEach(({ title, id, status }) => {
            let chkbx = `<input type="checkbox" class="checkbox"></input>`;
            let todo = `<input class="todos-title" value="${title}"></input>`;
            
            if (status == true) {
                chkbx = `<input type="checkbox" class="checkbox" checked></input>`;
                todo = `<input class="todos-title check" value="${title}"></input>`;
            }
    
            let div = `
                <div class="todos" id=${id} data-status=${status}>
                    ${chkbx}
                    ${todo}
                    <button class="delete">\u00d7</button>
                </div>
            `;
            todoCon.insertAdjacentHTML("beforeend", div);
            dummyDivs = todos.length;
       });
        bgs(dummyDivs);
    });
}

todoCon.addEventListener("change", editTodos);   
todoCon.addEventListener("click", removeTodos);       
addTodo.addEventListener("click", addLine);

function addLine() {
    let div = `
        <div class="todos">
            <input type="checkbox" class="checkbox"></input>
            <input class="todos-title"></input>
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

    if (e.target.tagName === "INPUT" && e.target.classList.contains("checkbox")) {
        if (e.target.checked) {
            status = true;
            todo.classList.add("check");
        } else {
            status = false;
            todo.classList.remove("check");
        }
        updateTodos({id, status });
    }

}

function removeTodos(e) {
    const parent = e.target.parentElement;
    const id = e.target.parentElement.id;

    if (e.target.tagName === "BUTTON") {
        parent.remove();
        deleteTodos(id);
        addLine();
    }
}

function bgs(divs) {
    for (divs; divs < 10; divs++) {
        let div = `
           <div class="todos">
                <input type="checkbox" class="checkbox"></input>
                <input class="todos-title"></input>
           </div>
           `;
           todoCon.insertAdjacentHTML("beforeend", div);
    }
}

document.addEventListener("DOMContentLoaded", displayTodos);