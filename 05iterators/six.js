const coding=["js","py","java","c"]

const values =coding.forEach( (item)=>{
// console.log(item);
return item


}
)

// console.log(values)

const mynum=[1,2,3,4,5,6,7,8,8,9,10]
const newnum=mynum.filter(    (num)=> num>4  )  // if curly braces are used then return must be used because it defines a scope and need to be returned
console.log(newnum)