let h1 = document.querySelector('h1');

function changeColor(color,delay)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{h1.style.color = color;
            resolve("Color Changed")
        },delay);
        
    })
}

// let delay = 1000;

// changeColor("blue",delay)
// .then(()=>
// {
//     console.log("BLUE");
//     return changeColor("red",delay)
// })
// .then(()=>{
//     console.log("RED");
//     return changeColor("yellow",delay)
// })
// .then(()=>
// {
//     console.log("YELLOW")
// })

async function demo()
{
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
          changeColor("blue",1000);
    
}