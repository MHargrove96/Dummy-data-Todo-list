let url = ('https://jsonplaceholder.typicode.com/todos')
let arrayOfTodos = []
let ol = document.getElementById('todo-list')

const fetchTodos = () => {
    fetch(url)
        .then((Response) => {
            return Response.json()
        })
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = (array) => {
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        li.innerText = array[i].title;
        ol.appendChild(li)
    }
}

const populateEverthing = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let li = document.createElement("li");
        li.innerText = arrayOfTodos[i].title;
        ol.appendChild(li)
    }
}

const filteredTodos = () => {
    ol.innerText = "";
    let numUser = document.getElementById("numUser").value;
    let filteredArray = arrayOfTodos.filter
        (todo => todo.userId == numUser)
    populateTodos(filteredArray)
}

const filterIncomplete = () => {
    ol.innerText = "";
    let numUser = document.getElementById("numUser").value;
    let filteredArray = arrayOfTodos.filter
        (todo => todo.userId == numUser) 
    let incompleteArray = filteredArray.filter 
        (todo => todo.completed == false)
        console.log(incompleteArray)  
    populateTodos(incompleteArray)
}

const filterComplete = () => {
    ol.innerText = "";
    let numUser = document.getElementById("numUser").value;
    let filteredArray = arrayOfTodos.filter
        (todo => todo.userId == numUser) 
    let completeArray = filteredArray.filter 
        (todo => todo.completed == true)
        console.log(completeArray)  
    populateTodos(completeArray)
}

const clearTodos = () => {
    ol.innerText = ""; 
}

