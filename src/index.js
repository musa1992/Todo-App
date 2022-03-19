import { todoFactory } from "./todo";
import { createTodoElement } from "./todoUserInterface";
import { setMode, setHeroImage } from "./interfaceMode";
import './style.css';

import { parentContainer, changeModeImage, heroSection } from "./todoContainer";


const main = document.getElementById('main')

// function heroSection(){
//     let hero = document.createElement('section')
//     hero.classList.add('hero')
//     return hero
// }



function removeTodos(parentElement){
    let child = parentElement.lastElementChild
    while(child){
        parentElement.removeChild(child)
        child = parentElement.lastElementChild
    }   
}

main.appendChild(heroSection())
main.appendChild(parentContainer())

let todos = main.querySelector('.todos')
let todoInput = main.querySelector('#task')
let saveTodo = main.querySelector('#create')

let allBtn = main.querySelector('#all')
let activeBtn =  main.querySelector('#active')
let completeBtn = main.querySelector('#complete')

let clearCompleteBtn = main.querySelector('.clear-complete')
let toggle = main.querySelector('#toggle')
let numOfActiveItems = main.querySelector("#num-active-items")

if (window.localStorage.getItem('index')=== null){
    window.localStorage.setItem('index', '0');
}

window.onload= ()=>{
    allBtn.click()
    setMode('light')

}
setHeroImage(toggle.getAttribute('data-mode'))
function ActiveTodos(){
    let totalItems = parseInt(localStorage.getItem('index'))
    for (let index = 1; index <= totalItems; index++) {
        if(localStorage.getItem(index) !== null){
            const element = JSON.parse(localStorage.getItem(index));
        
            if (element.status === "active"){
                let el = createTodoElement(element.task)
                el.setAttribute('data-id',index)
                todos.appendChild(el)
            }  
        }      
    }
}

function CompletedTodos(){
    let totalItems = parseInt(localStorage.getItem('index'))
    for (let index = 1; index <= totalItems; index++) {
        if(localStorage.getItem(index) !== null){
            const element = JSON.parse(localStorage.getItem(index));
            if (element.status === "Complete"){
                let el = createTodoElement(element.task)
                el.classList.add('line-through')
                el.setAttribute('data-id',index)
                todos.appendChild(el)
            } 
        }           
    }
}

function AllTodos(){
    let totalItems = parseInt(localStorage.getItem('index'))
    for (let index = 1; index <= totalItems; index++) {

        if(localStorage.getItem(index) !== null){
            const element = JSON.parse(localStorage.getItem(index));
            let el = createTodoElement(element.task)
            el.setAttribute('data-id',index)
            if (element.status === "Complete"){
                el.classList.add('line-through')
            }
            todos.appendChild(el)
        }
        
    }
}

function clearCompletedTodos(){
    let totalItems = parseInt(localStorage.getItem('index'))
    for (let index = 1; index <= totalItems; index++) {
        if(localStorage.getItem(index) !== null){
            const element = JSON.parse(localStorage.getItem(index));
            if (element.status === "Complete"){
                localStorage.removeItem(index)
            } 
        }           
    }
}

function numberOfActiveItems(){
    let activeItems = 0
    let totalItems = parseInt(localStorage.getItem('index'))
    for (let index = 1; index <= totalItems; index++) {
        if(localStorage.getItem(index) !== null){
            const element = JSON.parse(localStorage.getItem(index));
            if (element.status === "active"){
                activeItems += 1
            }  
        }      
    }
    return activeItems
}

saveTodo.addEventListener('click', ()=>{
    let id = parseInt(window.localStorage.getItem('index'))
    id += 1;
    id = id.toString()
    let task = todoInput.value
    let todo = todoFactory(task)
    let el = createTodoElement(todo.getTask())
    todos.appendChild(el)
    el.setAttribute('data-id', id)
    todoInput.value = ""
    localStorage.setItem('index', id)
    localStorage.setItem(id,JSON.stringify(todo.serialize()))

})

todos.addEventListener('click', (e)=>{
    if (e.target.classList.contains('done-task-input')){
        let parent = e.target.parentElement
        let p = parent.children[1]
        p.classList.add('line-through')
        let id = parent.getAttribute('data-id')
        let completedTask = JSON.parse(localStorage.getItem(id))
        completedTask.status = "Complete"
        localStorage.setItem(id,JSON.stringify(completedTask))   
    }


    if (e.target.classList.contains('dlt-btn')){
        let parent =  e.target.parentElement

        let id = parent.getAttribute('data-id')
        localStorage.removeItem(id)
        parent.remove()
    }
})

activeBtn.addEventListener('click',()=>{
    completeBtn.classList.remove('active')
    allBtn.classList.remove('active')
    activeBtn.classList.add('active')
    removeTodos(todos)
    ActiveTodos()
})

completeBtn.addEventListener('click',()=>{
    activeBtn.classList.remove('active')
    allBtn.classList.remove('active')
    completeBtn.classList.add('active')
    removeTodos(todos)
    CompletedTodos()
})

allBtn.addEventListener('click',()=>{
    activeBtn.classList.remove('active')
    completeBtn.classList.remove('active')
    allBtn.classList.add('active')
    removeTodos(todos)
    AllTodos()
})

clearCompleteBtn.addEventListener('click', ()=>{
    clearCompletedTodos()
})

toggle.addEventListener('click', ()=>{   
    changeModeImage(toggle)
    let mode = toggle.getAttribute('data-mode')
    setMode(mode)
    setHeroImage(mode)
    
})





