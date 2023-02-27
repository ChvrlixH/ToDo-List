let form = document.querySelector(".btn");
let items = [];

form.addEventListener("click", function () {
  let todoInput = document.querySelector(".search").value;

  if (todoInput === "") {
    alert("Please enter valid input!");
  } else {
    displayItems(todoInput);
    storeItem(todoInput);
    document.querySelector(".search").value = "";
    // addDeleteFunction(todoInput);
  }
});

function storeItem(item) {
  items.push(item);
}

function displayItems(todoInput) {
  let todoItem = document.createElement("li");
  // todoItem.innerHTML = `${todoInput}<div class=".deleteBtn">Delete</div>`;
  let todoList = document.querySelector(".ul");
  todoItem.innerHTML = todoInput;
  let deleteBtn = document.createElement("div");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = "Delete";
  todoList.appendChild(todoItem);
  todoList.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    todoItem.remove();
    deleteBtn.remove();
  });
}

// function addDeleteFunction(todoInput) {
//   let deleteButton = document.querySelectorAll(".delete-item");
//   deleteButton.appendChild(todoInput);
//   deleteButton.addEventListener("click", function () {
//     todoInput.pop(todoItem);
//   });
// }
