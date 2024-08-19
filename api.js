let url = "https://catfact.ninja/fact"
let url2 = "https://dog.ceo/api/breeds/image/random"

async function getFacts(){

    try{
    let res = await axios.get(url);
   // console.log(res.data.fact);
    return (res.data.fact);
    }

    catch(err)
    {
        console.log(err)
    }
    
}
async function getPicture()
{
    try{
    let photo = await axios.get(url2);
  //  console.log(photo.data.message);
    return (photo.data.message);
    }
    catch(err)
    {
        console.log(err);
    }
}

let factBtn = document.querySelector('#Facts');

factBtn.addEventListener('click',async ()=>{
    let response = await getFacts();
   
    let p = document.querySelector('p');
    p.innerHTML = response
})

let imgBtn = document.querySelector('#Image')

imgBtn.addEventListener("click", async()=>{
    let response = await getPicture();
    let img = document.querySelector('img');
    img.src = response;
})