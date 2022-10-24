// reference to the form
const form = document.querySelector('.addTodo')

// reference to the ul
const list = document.querySelector('#list')

// reference to the input value
const item = form.title.value


//  create a template for the new todo items with the item variable as the parameter
const newItem = item => {
    const html = `<li>
    <div>${item}</div>
    <button>edit</button>
    <button class = "delete"> X </button>
    </li>
    `
    list.innerHTML += html
}


// listen for a submit event
form.addEventListener('submit', e => {
    e.preventDefault();
    // creat a variable for the input value
    const item = form.title.value
    // console.log(item)
    newItem(item)
    form.reset()
})

// add a click event to the ul to delete items 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        // console.log('clicked')
        e.target.parentElement.remove()
    }
})