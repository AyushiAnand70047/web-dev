const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItems = document.getElementById('todo-items');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    const li = document.createElement('li')
    li.innerText = value
    const deleteBtn = document.createElement('button');
    todoItems.appendChild(li);
    li.appendChild(deleteBtn)
    deleteBtn.innerText = 'x'
    todoInput.value = '';

    deleteBtn.addEventListener('click',function(){
        li.remove();
    })
})