let todos = [
    { text: "牛乳を買う", done: false },
    { text: "宿題をする", done: false },
];
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
function renderTodos() {
    todoList.innerHTML = "";
    for (const todo of todos) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        checkbox.addEventListener("click", function () {
            todo.done = checkbox.checked;
        });
        li.appendChild(checkbox);
        const span = document.createElement("span");
        span.textContent = todo.text;
        li.appendChild(span);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.addEventListener("click", function () {
            todos = todos.filter(function (t) {
                return t !== todo;
            });
            renderTodos();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
}
renderTodos();
addBtn.addEventListener("click", function () {
    const newTodo = {
        text: todoInput.value,
        done: false,
    };
    todos.push(newTodo);
    renderTodos();
    todoInput.value = "";
});
export {};
//# sourceMappingURL=script.js.map