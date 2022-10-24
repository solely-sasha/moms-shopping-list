// reference to the form
const form = document.querySelector('.addTodo')

// reference to the ul
const list = document.querySelector('#list')

// reference to the input value
const item = form.title.value


//  create a template for the new todo items with the item variable as the parameter



// listen for a submit event
form.addEventListener('submit', e => {
    e.preventDefault();
    // creat a variable for the input value
    const item = form.title.value

})