
const toggler = document.querySelector('.toggler')
const lightIcon = document.querySelector('img[alt="Sun"]')
const darkIcon = document.querySelector('img[alt="Moon"]')

const todoBody = document.querySelector('.todo-body-list')
const radioBtn = todoBody.querySelectorAll('.radio-btn')
const text = todoBody.querySelectorAll('.task')
const todoItem = todoBody.querySelectorAll('.todo-item')
const itemNumber = document.querySelector('#items-left');

const html = document.querySelector('html')
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
function deductItem(){
    var num;
        num = todoItem.length;
        newDefault = num - 1;
        itemNumber.textContent = newDefault;
}
function itemsLeft(){
    itemNumber.textContent = todoItem.length;
}

toggler.addEventListener('click', ()=>{
    if (html.classList.contains('dark') == false) {
        dark();
    }else {
        light();
    }
})

// Delete To-do Item

todoBody.addEventListener('click', (remove)=>{
    if (remove.target.className == 'cancel') {
        const div = remove.target.parentElement;
        div.parentNode.removeChild(div);

        deductItem();
    }
    
});

for (let i = 0; i < radioBtn.length; i++) {
    
    radioBtn[i].addEventListener('click', ()=>{

        if (radioBtn[i].classList.contains('checked') == false) {
            radioBtn[i].classList.add('checked');
            text[i].classList.add('line')
            
            deductItem();
        }else{
            radioBtn[i].classList.remove('checked');
            text[i].classList.remove('line')

            itemNumber.textContent = newDefault + 1;
        }
     })

     todoItem[i].addEventListener('dblclick', ()=>{
        todoItem[i].classList.add('dbclick');
     })
     
     todoItem[i].addEventListener('mouseup', ()=>{
        todoItem[i].classList.remove('dbclick');
     })

     todoItem[i].addEventListener('drag', ()=>{
        todoItem[i].classList.add('dbclick');
     })

}

window.addEventListener('load', itemsLeft);
