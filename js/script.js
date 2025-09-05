
/// Variables to store todo items
let todoList = [];
let currentFilter = 'all'; // all | completed | uncompleted

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

function toggleComplete(index) {
    todoList[index].completed = !todoList[index].completed;
    renderTodoList();
}

function deleteAllTodo() {
    // Clear the todo list array
    todoList = [];

    /// Re-render the todo list
    renderTodoList();
}

function filterTodo() {
    const filterSelect = document.getElementById('filter-select');
    currentFilter = filterSelect.value;
    renderTodoList();

}

function renderTodoList() {
    // Code to render the todo list on the webpage
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; // Clear existing list

    /// Loop through the todoList array and create HTML elements for each item
    let filteredList = todoList;
    if (currentFilter === 'completed') {
        filteredList = todoList.filter(item => item.completed);
    } else if (currentFilter === 'uncompleted') {
        filteredList = todoList.filter(item => !item.completed);
    }

    if (filteredList.length === 0) {
        todoListContainer.innerHTML = '<p>No Task Found</p>';
        return;
    }

    filteredList.forEach((item, idx) => {
        todoListContainer.innerHTML += `
            <p>
                <input type="checkbox" onclick="toggleComplete(${idx})" ${item.completed ? 'checked' : ''}>
                <span style="${item.completed ? 'text-decoration: line-through;' : ''}">${item.task}</span> - Due: ${item.dueDate}
            </p>
        `;
    });
}