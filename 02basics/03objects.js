//object can be declared 1 singleton from constructor 
// Object.create (constructor)


//  object can be declared  2. object literals
// objects are accessed by  dot . notation objectname.parameter 


const mysym= Symbol ("key1")

const jsuser={
    name:"gajanan",  // can use number instead o string to declare
    // name is stored as string in array
    "fullname":"gajanan patnage",       
    [mysym]:"mykey1",
    age:19,
email:"gajanan13@mail.com",
islog:false,
holiday:["sun","mod"]

}

// console.log(jsuser.name);

// console.log(jsuser["fullname"]);

// console.log(typeof jsuser.mysym);  // the symbol we created is actually used as string

// console.log(jsuser[mysym]);//mykey1
// console.log(typeof mysym);    // symbol 

// jsuser.email="gajanan02gpt.com"
// Object.freeze(jsuser)   // freezed and cannot change after values in object
// jsuser.email="gaj003mail.com"  

// console.log(jsuser.email);  //gajanan02gpt.com

jsuser.greet= function ()
{
    console.log(`hello user js   ${this.name}`);
    
}
// console.log(jsuser.greet());   //undefined











