// node 01basics/datatype_summary.js

// primitive - call by value

// 7 types -String , Number, Boolean, null, undefined, symbol, BigInt 



const score =100
const scorevalue=100.3

const isLoggedin=true
let email;

const id =Symbol('999')
const anotherid=Symbol('999')

// console.log(id===anotherid); // false  creates a new, unique symbol, and no two symbols are ever considered equal, even if they have the same description.

const BigNumber=432478798787897897n // n  outputs bigint 
// console.log(BigNumber);


//reference (non primirive )

// types Arrays,Objects,Functions

const heroes=["superman","father","spiderman"]  //array


let myobj={
    name:"gajanan",
    age:21,
}

const myfun =function(){
    console.log("this is a function ");
    
}

console.log(typeof BigNumber);  //bigint
console.log(typeof heroes);   // object 
console.log(typeof id);  //symbol
