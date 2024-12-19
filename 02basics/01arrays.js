// node 02basics/01arrays.js

// array is object that stores multiples elemnents in one variable 
// size is not fixed they are dynamic

const arr=[43,87,4,97 ,52]
const myhero=["ironman","spiderman"]

const myarr=new Array(21,322,52,62)
 console.log(myarr[0]);   // 21 Output 



// ______________________________________________________________________________
// arrays Method

myarr.push(69)
myarr.push(78)
console.log(myarr) //[ 21, 322, 52, 62, 69, 78 

// myarr.pop() // deletes 78 from last 

myarr.unshift(9,90,8)  
console.log(myarr);
//    [
//     9, 90,  8, 21, 322,
//    52, 62, 69, 78
//  ]


// myarr.shift()
console.log(myarr);

// [
//     90,  8, 21, 322,
//     52, 62, 69,  78
//   ]       one is shifted from unshifted attribute and follow shift


// console.log(myarr.indexOf(78)); // 5  :> 21 322 52 62 69 78

// const newarr= myarr.join()   // gives array in string form
// console.log(myarr);   //[ 21, 322, 52, 62, 69, 78 ]
console.log(newarr);        //21,322,52,62,69,78  in string form

//slice
console.log("A",myarr)

const myn1=myarr.slice(1,4)
console.log(myn1) // [ 322, 52, 62 ]
console.log("B",myarr);


const myn2=myarr.splice(1,4)
console.log(myn2)    //  [ 322, 52, 62, 69 ]
console.log("c",myarr);  //[ 21, 78 ]

// * the main differnce in slice and splice is that in splice we originally cut the array and outputs the remaining array


