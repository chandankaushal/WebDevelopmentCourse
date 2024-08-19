let btn = document.querySelector('button');

btn.addEventListener("click",changeColor)


function changeColor()
{
    let div = document.querySelector('div');
    let h3 = document.querySelector('h3')
    let randomColor = getRandomColor();


    div.style.backgroundColor = randomColor;
    h3.innerText = randomColor;
    h3.style.color = randomColor;

}

function getRandomColor()
{
    let r = Math.floor(Math.random()*(255))
    let g = Math.floor(Math.random()*(255))
    let b = Math.floor(Math.random()*(255))
    let color = `rgb(${r},${g},${b})`

    

    return color;
}