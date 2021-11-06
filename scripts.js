// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
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
    
    const populateTodos = () => {
        for(let i = 0; i < arrayOfTodos.length; i++) {
            let li = document.createElement("li");
            li.innerText = arrayOfTodos[i].title;
            ol.appendChild(li) 
        }


    }