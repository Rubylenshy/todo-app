
const toggler = document.querySelector('.toggler')
const lightIcon = document.querySelector('img[alt="Sun"]')
const darkIcon = document.querySelector('img[alt="Moon"]')

const todoBody = document.querySelector('.todo-body-list')
const radioBtn = document.querySelectorAll('.radio-btn')
const text = todoBody.querySelectorAll('.task')

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
    }
});

for (let i = 0; i < radioBtn.length; i++) {
    
    radioBtn[i].addEventListener('click', ()=>{
        

        if (radioBtn[i].classList.contains('checked') == false) {
            radioBtn[i].classList.add('checked');
            document.getElementsByClassName('task').style.textDecoration = 'line-through';
        }else{
            radioBtn[i].classList.remove('checked');
            text[i].style.textDecoration = 'none'
        }
     })

}