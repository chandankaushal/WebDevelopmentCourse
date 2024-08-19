// TO Do App

//List
//Add
//DELETE
//Quit

let todo = [];

let req = prompt("Please enter your request");
 
console.log(req);


while(true)
{
    if(req == "quit")
    {
        console.log("Quitting App");
        break;
    } else if(req == "list")
    {
        console.log("Listing Tasks");
        for(task of todo)
        {
            console.log(task);
        }
        console.log("=================");
    } else if(req == "add")
    {
        let task = prompt("Please enter a task you want to add");
        todo.push(task);
        console.log("Task Added");
    } else if(req == "delete")
    {   
        let task = prompt("Please enter the task you want to delete");
        if(todo.indexOf(task) != -1)
        {   
            //let deleteIndex = todo.indexOf(task); 
            todo.splice(todo.indexOf(task),1);
            console.log("Task Deleted");
        }

    }
    req = prompt("Please enter your request");
}