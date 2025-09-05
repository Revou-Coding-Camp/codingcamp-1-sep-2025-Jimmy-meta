
///Variables to store to do list items
let todolist =[];

function ValidateInput() {
    const taskInput = document.getElementById('todo-input').value;
    const dateInput = document.getElementById('todo-date-input').value;

    if (taskInput === "" ||dateInput === "") {
        alert("Please fill in both the task and due date.");
    } else {
        AddTask(taskInput, dateInput);
    }

}

function AddTask(todo, duedate) {
    const todoItem = {
        task: todo,
        dueDate: duedate,
        completed: false
    };
    todolist.push(todoItem);
    renderTodolist();
}

function DeleteAllTasks() {
// Clear the todo list array
    todolist = [];

// Re-render the empty list
    renderTodolist();
}

function FilterTasks() {

}   

function renderTodoList (){
    
//code to render the to do list on the webpage
    const todoListContainer = document.getElementById('todo-list') 
    todoListContainer.innerHTML = '';// Clear existing list

    // Loop through the todolist array and create list items
    todolist.forEach((item) => {
        todoListContainer.innerHTML += `
        <p> ${item.task} - Due: ${item.dueDate} </p>
      `;
    });
}