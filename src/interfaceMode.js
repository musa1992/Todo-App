function setMode(mode){
    getBody(mode)
    getInput(mode)
    getBoxElement(mode)
    getNumberItems(mode)
    getStates(mode)
    getTodoElement(mode)
}

function getBody(mode){
    let body = document.querySelector('body')
    
    if (mode === 'dark'){
        body.classList.add('bg-color-dark')
    }else {
        body.classList.add('bg-color-light')
    }
}

function getInput(mode){
    let input = document.querySelector('.input')

    if (mode === 'dark'){
        input.classList.add('input-dark')
    }else {
        input.classList.add('input-light')
    }

}

function getBoxElement(mode){
    let box = document.querySelector('.box')
    
    if (mode === 'dark'){
        box.classList.add('box-dark')
    }else {
        box.classList.add('box-light')
    }
}

function getTodoElement(mode){
    let todo = document.querySelector('.todo')
    if (mode === 'dark'){
        todo.classList.add('todo-dark')
    }else {
        todo.classList.add('todo-light')
    }

}

function getNumberItems(mode){
    let items = document.querySelector('.num-items')

    if (mode === 'dark'){
        items.classList.add('num-items-dark')
    }else {
        items.classList.add('num-items-light')
    }
}

function getStates(mode){
    let states = document.querySelector('.states')
    
    if (mode === 'dark'){
        states.classList.add('states-dark')
    }else {
        states.classList.add('states-light')
    }
}

export {
    setMode
}