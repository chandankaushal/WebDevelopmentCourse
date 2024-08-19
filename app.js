function saveToDb(data)
{
    return new Promise ((resolve,reject) =>
    
    {
        let internetSpeed = Math.floor(Math.random()*10) + 1;

        if(internetSpeed > 4)
        {
            resolve("Resolved, data saved")
        }
        else
        {
            reject("Reject, Data was not saved")
        }
    });
}


saveToDb("apna college")
.then((result)=>{console.log("data1 saved")
    console.log(result);
    return saveToDb("hello World");
})
.then((result)=>{console.log("data 2 saved")
    console.log(result);
    return saveToDb("Chandan");
})
.then((result)=>{console.log("data 3 saved");console.log(result);})
.catch((error)=>{ console.log("Promise was rejected");
    console.log(error);
})