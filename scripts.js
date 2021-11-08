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

    const filteredTodos = () => {
        ol.innerText = "";
        for(let i = 0; i<arrayOfTodos.length; i++) {
            if (arrayOfTodos[i].completed = true){
                let li = document.createElement("li");
                
            }
        }
    }