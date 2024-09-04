const addTaskButton = document.querySelector('.addTask');
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector('.todos');
const baslik = document.querySelector(".baslik");

const toggleComplete = (event) => {
    event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
    todosContainer.removeChild(event.currentTarget.parentElement);
    
}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('todoItem');



    const completeButton = document.createElement('button');
    completeButton.classList.add('completeButton');
    todoItemElement.appendChild(completeButton);
    completeButton.innerText = 'Tamamlandı';
    completeButton.addEventListener("click", toggleComplete);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    todoItemElement.appendChild(deleteButton);
    deleteButton.innerText = 'Sil';
    deleteButton.addEventListener('click' , removeItem)

    const textElement = document.createElement('p');
    textElement.innerText = todoText;
    textElement.classList.add("todoText");
    todoItemElement.appendChild(textElement);



    todosContainer.appendChild(todoItemElement);
    todoInput.value = "";
    todoInput.focus();



}





const addTask = () => {
    if (todoInput.value == "") {
        alert("Görev yazmadınız");
    }
    else{
        renderTodoItem(todoInput.value)
    }

};

addTaskButton.addEventListener("click", addTask);