const marvel=["thor","spiderman","ironman"]
const dc=["superman","flash","batman"]

marvel.push(dc)     //[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', '+batman' ] ]
// console.log(marvel);   // take arraydc  a single data 
// console.log(marvel[1]);     // spiderman
// console.log(marvel[2][2]);  // gives o from iron man 2nd index from 2nd index element of marvel
const allhero=  marvel.concat(dc)
//console.log(allhero);// print both array hereoes 


const allnewheroes=[...dc,...marvel]
//console.log(allnewheroes); // concate spread opertor ...  


const otherarray=[1,2,3,[11,33,[67,[99,98],68]]]
 const realarray=otherarray.flat(1) // [ 1, 2, 3, 11, 33, [ 67, [ 99, 98 ], 68 ] ]
// here flat parameter represent the nested depth in array 
 const realarray=otherarray.flat(2)  //[ 1, 2, 3, 11, 33, 67, [ 99, 98 ], 68 ]
const realarray=otherarray.flat(Infinity)

console.log(realarray);    // [1,  2,  3, 11, 33,67, 99, 98, 68]

console.log(Array.from("gajanan"));  // makes the string into array

console.log(Array.isArray("gajanan"));   //false check array or not

console.log(Array.from({naam:"gajanan"}));   //interesting 

let s1=100
let s2=200
let s3=454

console.log(Array.of(s1,s2,s3,s2,s2))