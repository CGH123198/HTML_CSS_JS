const todoForm = document.querySelector("#todo-form");
const todoList = todoForm.appendChild(document.createElement("ul"));
todoList.id = "todo-list";
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY="todos";

let toDos = [];
const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function removeList(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(element => element !== li.childNodes[0].innerText );
    saveToDos();
    li.remove();
}

function paintToDo(newToDo){
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText=newToDo;
   const button =document.createElement("button");
   button.innerText="X";
   button.type="button";
   button.addEventListener("click", removeList);
   li.append(span);
   li.append(button);
   todoList.append(li);
}


if(savedToDos){
    for(let idx in savedToDos){
        toDos[idx] = savedToDos[idx];
        paintToDo(toDos[idx]);
    }
}


todoForm.addEventListener("submit", handleToDoSubmit);