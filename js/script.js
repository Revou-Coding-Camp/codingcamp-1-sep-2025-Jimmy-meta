
/// Variables to store todo items
let todoList = [];

/// Function to validate input fields
function validateInput() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDateInput = document.getElementById('todo-date-input').value;

    if (todoInput === '' || todoDateInput === '') {
        alert('Please fill in both the task and due date.');
    } else {
        addTodo(todoInput, todoDateInput);
    }
}

function addTodo(todo, dueDate) {
    // Add a new todo item to the list
    const todoItem = {
        task: todo,
        dueDate: dueDate,
        completed: false
    };

    /// Push the new item to the todo list array
    todoList.push(todoItem);

    /// Re-render the todo list
    renderTodoList();
}

function deleteAllTodo() {
    // Clear the todo list array
    todoList = [];

    /// Re-render the todo list
    renderTodoList();
}

function filterTodo() {

}

function renderTodoList() {
    // Code to render the todo list on the webpage
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; // Clear existing list

    /// Loop through the todoList array and create HTML elements for each item
    todoList.forEach((item) => {
        todoListContainer.innerHTML += `
            <p>${item.task} - Due: ${item.dueDate} </p>
        `;
    });
}