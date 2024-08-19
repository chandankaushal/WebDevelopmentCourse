let form = document.querySelector('form');


form.addEventListener("submit",function addTask(e)
{
    e.preventDefault();
    let deleteButton = document.createElement('button');

    let newTask = document.createElement('li');
    newTask.textContent = form.elements[0].value;

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.style.marginLeft = "16px"

    let ulist = document.querySelector('ul')
    ulist.appendChild(newTask)
    newTask.appendChild(deleteButton);
    form.reset();


})

let ulist = document.querySelector('ul');

ulist.addEventListener("click",function(event)
{
    if(event.target.tagName == 'BUTTON')
    {
       let pli = event.target.parentElement;
        pli.remove();
      

    }
    
})

