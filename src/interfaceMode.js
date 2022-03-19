import HeroImageMobileDark from './images/bg-mobile-dark.jpg'
import HeroImageMobileLight from './images/bg-mobile-light.jpg'
import HeroImageDesktopDark from './images/bg-desktop-dark.jpg'
import HeroImageDesktopLight from './images/bg-desktop-light.jpg'

function setMode(mode){
    getBody(mode)
    getInput(mode)
    getBoxElement(mode)
    getNumberItems(mode)
    getStates(mode)
    getTodoElement(mode)
   
}

function setHeroImage(mode){
    let hero = document.querySelector('.hero')
    let img = new Image()
    let mediaQuery = window.matchMedia("(min-width: 880px)")
   
    if (mediaQuery.matches && mode === 'light'){
        img.src = HeroImageDesktopLight
       
    }
    if (mediaQuery.matches && mode === 'dark'){
        img.src = HeroImageDesktopDark
       
    }
    if (!mediaQuery.matches && mode === 'light'){
        img.src = HeroImageMobileLight
    }
    if (!mediaQuery.matches && mode === 'dark'){
        img.src = HeroImageMobileDark
    }
    // console.log(hero.firstChild)
    if (hero.firstChild !== null){
        hero.removeChild(hero.firstChild)
    }
    hero.appendChild(img)
    // console.log(hero.firstChild)
}

function getBody(mode){
    let body = document.querySelector('body')
    
    if (mode === 'dark'){
        body.classList.remove('bg-color-light')
        body.classList.add('bg-color-dark')
    }else {
        body.classList.remove('bg-color-dark')
        body.classList.add('bg-color-light')
    }
}

function getInput(mode){
    let input = document.querySelector('.input')

    if (mode === 'dark'){
        input.classList.remove('input-light')
        input.classList.add('input-dark')
    }else {
        input.classList.remove('input-dark')
        input.classList.add('input-light')
    }

}

function getBoxElement(mode){
    let box = document.querySelector('.box')
    
    if (mode === 'dark'){
        box.classList.remove('box-light')
        box.classList.add('box-dark')
    }else {
        box.classList.remove('box-dark')
        box.classList.add('box-light')
    }
}

function getTodoElement(mode){
    let todo = document.querySelector('.todos')
    if (mode === 'dark'){
        todo.classList.remove('todos-light')
        todo.classList.add('todos-dark')
    }else {
        todo.classList.remove('todos-dark')
        todo.classList.add('todos-light')
    }
}

function getNumberItems(mode){
    let items = document.querySelector('.num-items')

    if (mode === 'dark'){
        items.classList.remove('num-items-light')
        items.classList.add('num-items-dark')
    }else {
        items.classList.remove('num-items-dark')
        items.classList.add('num-items-light')
    }
}

function getStates(mode){
    let states = document.querySelector('.states')
    
    if (mode === 'dark'){
        states.classList.remove('states-light')
        states.classList.add('states-dark')
    }else {
        states.classList.remove('states-dark')
        states.classList.add('states-light')
    }
}

export {
    setMode, setHeroImage
}