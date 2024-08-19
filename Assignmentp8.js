
//Q1
// let arr = [1,2];

// let SquareArr = arr.map((el) =>{return el*el});

// let SumArr = arr.reduce((res,el)=> {return res+el})

// let avgArray = SumArr/arr.length;


//Q2

// let orgArray = [1,2,3,4,5];

// let result = orgArray.map((el)=> {return (el+5)})   //[6,7,8,9,10]


//Q3

// let arr = ["aman"];

// let newArr = arr.map((el)=> el.toUpperCase())

// Q4

// function doubleAndReturnArgs (arr,...args)
// {   
//     let finalvalue = [...arr,args.map((el)=>el*2)]
//     return finalvalue;

// }

//Q5

const obj1 ={
    name:"Chandan",
    phone: 1111
};

const obj2 = {
    id: 1,
    gender: "male"
};


let dataCopy = {...obj1,...obj2};






