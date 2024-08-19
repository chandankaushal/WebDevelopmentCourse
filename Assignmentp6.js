// Q1
// let arr = [1,2,3,4,5,6,7,8];

// let num =1; 

// let newArr = [];


// function ArrayLargerThanNumber (arr,num)
// {
//     let newArr = [];
//     for(let i =0 ; i <arr.length; i++)
//     {
        
//         if(arr[i] >= num)
//         {
//             newArr[i] = arr[i];
//         }
//     }

//     return newArr;
// }

// newArr = ArrayLargerThanNumber(arr,num);
// for(element of newArr)
// {
//     console.log(newArr[element]);
// }
//Q2
// let normalstring = "abcdabcdefgggh";

// function getUnique(str)
// {
// let ans = "";

// for(let i = 0; i < normalstring.length; i++)
// {
//     let unique = normalstring[i];

//     if(ans.indexOf(unique) == -1)
//     {
//     ans = ans + unique;
//     }
// }

// return ans;
// }

// let fanswer = getUnique(normalstring);
// console.log(`The Unique string is ${fanswer}`);


//Q3

// let country = ["Australia","Germany","United States of America","Scotland"];

// function longestCountry(str)
// {

// let maxCount = 0;
// let maxCountry = "";

// for(let i = 0; i<country.length; i++)
// {
//     let longest = country[i];
//     let count = 0;

//     for(let j = 0; j < country[i].length; j++)
//     {
//         count = count + j;
//     }

//    // console.log(count);
//     if(count > maxCount)
//     {
//         maxCount = count;
//         maxCountry = country[i];

//     }

// }

// return maxCountry;

// }


// let largestCountry = longestCountry(country);
// console.log(largestCountry);


//Q4


// let input = "Chandan Kaushal";
// function countVowels(str)

// {

// let vowels = ['a','e','i','o','u'];

// let vowelCount = 0;

// // console.log(input[1]);
// for (let i = 0; i <input.length; i++)
// {
//     if(input[i] =='a'||input[i] =='e'||input[i] =='i'||input[i] =='o'||input[i] =='u')
//     {
//         vowelCount = vowelCount + 1;
//     }
// }

// return vowelCount;
// }

// let ans = countVowels(input);

// console.log(ans);

//Q5



// let start = parseInt(prompt("Enter start Range"));

// let end = parseInt(prompt("Enter End Range"));


// function randomNumbers(str,str1)
// {
//     let RandNum = Math.floor(Math.random() * (str1-str)) + str; 

//     return RandNum;
// }


// let ans = randomNumbers(start,end);
// console.log(ans);
