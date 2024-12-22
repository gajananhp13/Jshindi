function addtwo(num1 ,num2)
{
    console.log( num1+num2);
    }
    
addtwo(2,3)   //5

addtwo(2,"3")   //23
addtwo("2",3) //23
addtwo(3,null)   ///3
const result = addtwo(3,4) 
console.log(result);   // undefined not 7

function returnsum(n1,n2){
  let   result=n1+n2
    return result
    // nothing is printed after return statement
}

console.log( returnsum(4,3));   //7 

 function loginmessage(username){
    if(username===undefined /* or !username */){
        console.log("enter a username")
        return null
    }
return `${username} just logged in`

 }

 console.log(loginmessage());  // undefined if no input
 

function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500));  //[ 200, 400, 500 ] converts to array by  ...

 
function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500)); //val1 ==200  val2=400 remaining in  num1 => [500]

const user={
    username:"gajanan",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}
// handleobject(user)  //username is gajanan and price is 199

// direct object passing in function & arrays also 

handleobject({
username:"arya",
price:80000
})   //username is arya and price is 80000



const myarray=[20,52,715,64]
function returnarray(getarray)
{
    
return getarray[1]
}
// console.log(returnarray(myarray));  //52 first index element

console.log(returnarray([1,9,34,5,6,7]));  //9 first index element 



















