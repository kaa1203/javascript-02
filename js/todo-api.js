const BASE_URL = "https://65f0639fda8c6584131b9408.mockapi.io/todos";

export async function getTodos() {
    let res = await fetch(BASE_URL);
    let data = await res.json();
    return data;
}

export async function addTodos(todo) {
    let res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(todo),
    });
}

export async function deleteTodos(todoId) {
    let res = await fetch(`${BASE_URL}/${todoId}`, {
        method: "DELETE",
    });
}

export async function updateTodos({id, title, status}) {
    let res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({title, status}),
    });
} 

