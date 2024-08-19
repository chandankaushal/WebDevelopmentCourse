let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')
ul.innerText = "" //list is empty after each iteration. 

let url = "http://universities.hipolabs.com/search?name="

btn.addEventListener("click",async (e)=>
{
    let country = inp.value;
    let results = await getColleges(country);
  //  console.log(results)

    for(let i = 0; i < results.length;i++)
    {
        let li = document.createElement('li')
        li.innerText = results[i].name
        ul.appendChild(li);
    }

    
})

async function getColleges(country)
{
    try{
    //console.log(url+country)
        let res = await axios.get(url+country);
       // console.log(res.data)
        return res.data;
        


    }
    catch(err)
    {
        console.log(err)
    }
}