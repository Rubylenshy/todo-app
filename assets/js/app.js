
const toggler = document.querySelector('.toggler')
const lightIcon = document.querySelector('img[alt="Sun"]')
const darkIcon = document.querySelector('img[alt="Moon"]')

const todoBody = document.querySelector('.todo-body-list')
const todoInput = document.querySelector('#new-todo')
const itemNumber = document.querySelector('#items-left')
const html = document.querySelector('html')

// Predefined Functions
function dark(){
    html.classList.add('dark');
    darkIcon.style.display = 'none';
    darkIcon.classList.add('rotate')
    lightIcon.style.display = 'block';
}
function light(){
    html.classList.remove('dark');
    lightIcon.style.display = 'none';
    lightIcon.classList.add('rotate')
    darkIcon.style.display = 'block';
}

function showAll(){
    document.querySelectorAll('.todo-item').forEach((todo) => {
        todo.style.display = "flex";
        })
    count();
}

function showActive() {
    document.querySelectorAll('.todo-item').forEach((todo) => {
        todo.style.display = "flex";
        if (todo.classList.contains('checked')) {
            todo.style.display = "none"
        }
        });
    countActive();
}

function showArchive() {
    
    document.querySelectorAll('.todo-item').forEach((todo) => {
        todo.style.display = "flex";
        if (!todo.classList.contains('checked')) {
            todo.style.display = "none";
        }
    });
    countArchive();
}

function count(){
    itemNumber.textContent = document.querySelectorAll('.todo-item').length
}
function countActive(){
    itemNumber.textContent = document.querySelectorAll('.todo-item:not(.checked)').length
}
function countArchive(){
    itemNumber.textContent = document.querySelectorAll('.todo-item.checked').length
}

toggler.addEventListener('click', ()=>{
    if (html.classList.contains('dark') == false) {
        dark();
    }else {
        light();
    }
})

// New Todo
todoInput.addEventListener("keyup", (e)=>{
    if (e.key == "Enter" || e.keyCode == 13){
        document.querySelector('.items_archive').style.display = 'flex';
        document.querySelector('.empty-todo').style.display = 'none';
        newTodo();
        count();
        todoInput.value = '';
    }
});

function newTodo(){
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item', 'flex');
    const radioTask = document.createElement('div')
    radioTask.classList.add('radio_task', 'flex')
    const radioBtn = document.createElement('div')
    radioBtn.classList.add('radio-btn')
    const taskName = document.createElement('p')
    taskName.classList.add('task')
    taskName.textContent = todoInput.value;
    const delBtn = document.createElement('div')
    delBtn.classList.add('cancel')
    delBtn.title = 'Delete';
    const hr = document.createElement('hr')
    
    radioBtn.addEventListener('click', ()=>{
        if (todoItem.classList.contains('checked') == false) {
            todoItem.classList.add('checked');
            radioBtn.classList.add('checked');
            
        }else{
            radioBtn.classList.remove('checked');
            todoItem.classList.remove('checked');

        }
    })

    radioTask.appendChild(radioBtn)
    radioTask.appendChild(taskName)
    todoItem.appendChild(radioTask)
    todoItem.appendChild(delBtn)


    todoBody.appendChild(todoItem)
    todoBody.appendChild(hr)
}

// Delete To-do Item

todoBody.addEventListener('click', (remove)=>{
    if (remove.target.className == 'cancel') {
        const div = remove.target.parentElement;
        div.parentNode.removeChild(div)
        div.parentNode.removeChild(hr); 
        count();
    }if(document.querySelectorAll('.todo-item').length == 0){
        document.querySelector('.items_archive').style.display = 'none';
        document.querySelector('.empty-todo').style.display = 'block';
        document.querySelector('.empty-todo h1').textContent = 'Got more tasks?';
        document.querySelector('.empty-todo p').textContent = 'Make a list and get them done';

    }
    else{
        return itemNumber.textContent == 0 ? itemNumber.parentElement.style.visibility = 'hidden' 
        : itemNumber.parentElement.style.visibility = 'visible' ;
    }
});

window.addEventListener('load', ()=>{
    document.querySelector('.items_archive').style.display = 'none';
})