const usermail="gajubhai"
if(usermail){
    // console.log("yes got mail");  // this will execute unless empty string
    
}
else{
    // console.log("dont have a user name ");
    
}


const emptyobj={}

if(Object.keys(emptyobj))   // true and console will get executed
    {
    // console.log("yes object is empty ");   
    
}


// nullish coalescing operator (??):  null ,undefined
// this are callbacks like to handle failures

let val1;
// val1=5??10   // outputs 5 if only this is getting executed
// val1=null??10 //outputs 10 if only this is getting executed
val1=undefined??10 ?? 20  //  10 will print due to first it sees 10 then 20
// console.log(val1);


//ternairy operator 
// condition ? true : false

const teaprice= 10
 teaprice <=80 ? console.log("less than 80") : console.log("more than 80")







// _______________________________________________________________
// falsy values : false,0,-0, Bigint ,0n,"",undefined,Nan

//truthy values  : "0",'false', " ",{},[],function(){}


