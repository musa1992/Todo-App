import DarkLightModeBtn from './images/icon-moon.svg'
import { createInput } from './todoUserInterface'

function div(){
    return document.createElement('div')
}

function createHeader(){
    let heading = div()
    heading.classList.add('heading')
    heading.classList.add('row')
    let logo = div()
    logo.innerHTML = '<p class="title" >TODO</p>'
    let modeBtn = div()
    let btn = new Image()
    btn.src = DarkLightModeBtn
    modeBtn.appendChild(btn)
    heading.append(logo,modeBtn)
    return heading
}

function taskInput(){
    let input = div()
    input.classList.add('input')
    input.classList.add('border-rd')
    let radio = createInput("radio");
    radio.id = "create"
    let text = createInput("text")
    text.id = "task"
    text.setAttribute('placeHolder', 'Create to do ...')
    input.append(radio,text)
    return input
}

function todosBox(){
    let box = div();
    box.classList.add('box')
    box.appendChild(todosParentContainer())
    return box
}

function todosParentContainer(){
    let todos = div()
    todos.classList.add('todos')
    return todos
}

function todosFooter(){
    let paragraph = ()=>{return document.createElement('p')}
    let footer = div()
    footer.classList.add('todos-footer')
    let items = div()
    items.classList.add('num-items')
    let itemsLeft = paragraph()
    itemsLeft.id = "num-active-items"
    itemsLeft.textContent = "5 items left"
    let clear = paragraph()
    clear.textContent = "Clear completed"
    clear.classList.add('clear-complete')
    items.append(itemsLeft,clear)

    let state = div()
    state.classList.add("states")
    state.classList.add('row')
    state.classList.add('border-rd')
    let all = paragraph()
    all.textContent = 'All'
    all.id = "all"
    let active = paragraph()
    active.textContent = 'Active'
    active.id = "active"
    let completed = paragraph()
    completed.id = "complete"
    completed.textContent = "Completed"
    state.append(all,active,completed)
    footer.append(items,state)
    

    return footer
}

function orderListContainer(){
    let text = div()
    text.classList.add('order-list')
    text.innerHTML = '<p>Drag and drop to reoder list</p>'
    return text
}

function parentContainer(){
    let todoSection = document.createElement('section')
    todoSection.classList.add('todo-container')
    let container = div()
    container.classList.add('container')
    todoSection.appendChild(container)
    let headerDiv = createHeader()
    let taskInputDiv = taskInput()
    let todoBox = todosBox()
    let orderList = orderListContainer()
    let footer = todosFooter()
    container.append(headerDiv,taskInputDiv,todoBox,footer,orderList)
    return todoSection
}

export {
    parentContainer
}