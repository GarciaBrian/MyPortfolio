const menu = document.querySelector('#menu-container')
const show = document.querySelector('#bars')
const hide = document.querySelector('#menu-x')

const dropMenu = () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none'
        hide.style.display = 'none'
        show.style.display = 'block'
    } else {
        menu.style.display = 'block'
        hide.style.display = 'block'
        show.style.display = 'none'
    }
}

show.addEventListener('click', () => {
    dropMenu()
})

hide.addEventListener('click', () => {
    dropMenu()
})

