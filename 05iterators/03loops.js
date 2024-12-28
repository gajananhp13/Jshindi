const arr=[1,2,4,5,8]
for (const i  of arr) {
    // console.log(i,i);
    
}


const greeting="hello-world"
for (const i of greeting) {
    // console.log(`each char is ${i}`);
    
}

// map = object in javascript which is collection of unique key value pairs
const mp =new Map()
mp.set("a",1)
mp.set("b",3)
mp.set("cd",3)

mp.set("a","99")

// console.log(mp.get("a"));   // output 99

// console.log(mp.size);

// mp.delete('b'); // deletes b 

for (const [key,value] of mp) {     //Used to iterate over the values of an iterable object (e.g., arrays, strings, sets)
    // console.log(key+ " _ ",value);
    
}


const obj = {
    game1: "spiderman",
    game2: "forza"
  };
  
  for (const key in obj) {
    // console.log(key, obj[key]); 
  }

  for (const key in obj) {   // forin  Used to iterate over the properties of an object.
//   console.log(key) 
  }

//   ______________________________________________________________________________


const code=["jf","py","cpp"]

// code.forEach(function(val){
//     console.log(val);
// })


// or you can write an arrow function

code.forEach( (item,idx,arr) =>
{

                                    // jf 0 [ 'jf', 'py', 'cpp' ]
//   console.log(item,idx,arr);      // py 1 [ 'jf', 'py', 'cpp' ]
                                 // cpp 2 [ 'jf', 'py', 'cpp' ]
}
)

const coding=[
{ 
langname:"java",
file:"java"
},
{ 
    langname:"python",
    file:"py"
    },
    { 
        langname:"c++",
        file:"cpp"
        }
]


coding.forEach( (item) => {
console.log(item.langname,item.file);
} 
)