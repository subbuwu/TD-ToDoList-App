const todoInput = document.querySelector(".user-input");
const todoButton = document.querySelector(".selector");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", PushTodo);
todoList.addEventListener("click", DeleteTodo);

function PushTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-2x fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = ""; 
}

function DeleteTodo(event){
    const item = event.target;

    if(item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}