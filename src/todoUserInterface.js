import Delete from './images/icon-cross.svg'

function createInput(kind){
    let input = document.createElement('input')
    input.setAttribute("type", kind)
    return input
}

function createParagraph(words){
    let el = document.createElement('p');
    el.textContent = words;
    return el
}

function deleteTodoBtn(){
    let btn = new Image()
    btn.classList.add('dlt-btn')
    btn.src = Delete
    return btn
}

function createTodoElement(todoObject){

    let todo = document.createElement('div')
    todo.classList.add('todo')
    todo.classList.add('row')
    let input = createInput("radio")
    input.classList.add("done-task-input")
    let task = createParagraph(todoObject)
    let deleteButton = deleteTodoBtn()

    todo.append(input,task,deleteButton)

    return todo
}

export {
    createTodoElement, createInput
}