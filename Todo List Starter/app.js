// render list dynamically

{
  /* <li>
  Finish Frontend Simplified
  <button class="todo__delete">x</button>
</li>; */
}

const list = document.querySelector(".list");
console.log(list);

const input = document.querySelector("input");

// array of objects
let todoList = [
  //   {
  //     id: 1,
  //     task: "Finish Frontend Simplified",
  //   },
  //   {
  //     id: 2,
  //     task: 'Finsh Interview Qns',
  //   }
];

let todoInputValue = "";

let counter = 0;

// whenever input field unfocuses
function onInputChange(event) {
  console.log(event.target.value);
  todoInputValue = event.target.value;
}

function addTodo() {
  console.log(todoInputValue);

  if (!todoInputValue) {
    return;
  }

  //   const task = {
  //     id: Math.floor(Math.random() * 10000),
  //     task: todoInputValue,
  //   };

  todoList.push({
    id: counter++,
    //  id: Math.floor(Math.random() * 10000) may overlap
    task: todoInputValue,
  });
  console.log(todoList);

  renderTodos();

  // reset
  input.value = "";
  todoInputValue = "";
}

function deleteTodo(id) {
  console.log(id);

  // Returns the elements of an array that meet the condition specified in a callback function.
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  console.log(todoList);

  renderTodos();
}

// to render updated DOM
function renderTodos() {
  list.innerHTML = todoList
    .map(
      // object
      (element) =>
        `<li>
    ${element.task}
    <button 
        class="todo__delete" 
        onclick='deleteTodo(${element.id})'
    >
        x
    </button>
  </li>`
    )
    .join("");
}

renderTodos();
