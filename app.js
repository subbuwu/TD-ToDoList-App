const input = document.querySelector('.user-input');
const todoList = document.querySelector('.list-items');
const todoButton = document.querySelector('.submit');

todoButton.addEventListener('click',appendTodo);
todoList.addEventListener('click',removeTodo);

const todos = [];

function appendTodo(event) {
    //preventing funcs
    event.preventDefault();

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-list');

    const todoTitle = document.createElement('p');
    todoTitle.classList.add('todo-title');
    todoTitle.innerText = input.value;

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa fa-2x fa-check"></i>';
    checkButton.classList.add("complete-button");

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>';
    deleteButton.classList.add("trash-button");

    const buttonDiv = document.createElement('div');


    buttonDiv.appendChild(checkButton);
    buttonDiv.appendChild(deleteButton);

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(buttonDiv);

    todoList.appendChild(todoItem);

    saveTodoToLocalStorage(input.value);

    input.value = " ";
}

function saveTodoToLocalStorage(todo) {
    let todos;

    // Check if there are existing todos in local storage
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo); // Add the new todo

    localStorage.setItem('todos', JSON.stringify(todos));
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
        savedTodos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-list');

            const todoTitle = document.createElement('p');
            todoTitle.classList.add('todo-title');
            todoTitle.innerText = todo;

            const checkButton = document.createElement('button');
            checkButton.innerHTML = '<i class="fa fa-2x fa-check"></i>';
            checkButton.classList.add("complete-button");

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>';
            deleteButton.classList.add("trash-button");

            const buttonDiv = document.createElement('div');

            buttonDiv.appendChild(checkButton);
            buttonDiv.appendChild(deleteButton);

            todoItem.appendChild(todoTitle);
            todoItem.appendChild(buttonDiv);

            todoList.appendChild(todoItem);
        });
    }
});

function removeTodo(event){
    const item = event.target;

    if(item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        const anotherTodo = todo.parentElement
        anotherTodo.remove();
    }

    if(item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        const anotherTodo = todo.parentElement
        anotherTodo.classList.toggle("completed");
    }
}
