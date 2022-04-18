
const menuItems = document.querySelectorAll('.menu_item');
const groupcount = document.querySelector('.group-count');



// ================ SIDEBAR ===============

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        groupcount.remove();
    })
})

// ================ GROUP COUNT =====================

