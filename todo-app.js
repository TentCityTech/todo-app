const todos = getSavedTodos()
// Object that keeps track of latest input data
const filters = {
    searchText: '',
    hideCompleted: false
}
// Initial rendering for renderTodos function
renderTodos(todos, filters)
// Listen for filter todo's
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
// Listen for new todo's added via the form
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})
// Listen for Hide Completed checkbox to be checked.
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})