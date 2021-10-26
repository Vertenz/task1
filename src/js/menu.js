document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu__ul_phone')
    let menuIsOpen = false
    document.addEventListener("click", e => {
        if (menuIsOpen === false) {
            if (e.target.id === 'btn-menu' || e.target.className === 'btn-menu__line') {
                menu.style.left = '0'
                menuIsOpen = true
                return true
            }
        } else {
            if (e.target.id !== 'menu__ul_phone' && e.target.id !== 'btn-menu') {
                menu.style.left = '-70%'
                menuIsOpen = false
                return true
            }
        }
    })
})
