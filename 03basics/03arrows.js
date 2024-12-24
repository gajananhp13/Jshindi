const user={
    username:"gajanan",
    price:999,
    welcomemsg: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
        
    }

// user.welcomemsg();
// user.username="sam"
// user.welcomemsg();  // 
// console.log(this)    // {}   gives no context

// function chai(){
//     console.log(this);   // indicates an object representing the global scope of your JavaScript environment
// //  In a browser, this is typically the window object.
// // In Node.js, it's the global objec
// }
// chai();
 

const chai2 = () => {   //this explicit return because we use arrow keyword
let name="gajanan"
console.log(this);   

}
// chai2()


// const addtwo=(num1,num2)=>num1+num2     //implicit return we donot use any { braces}

const addtwo=(num1,num2)=>( {username:"gaju"})

// console.log(addtwo(1,2));

