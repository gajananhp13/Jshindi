// immediately invoked function expression (iffE)
// 

(function chai(){
console.log("DB Connected");
})   ();  // javascript doest know how to stop invoke
// so we use ";" is used to make sure that code should end it invoking


// can also be written as arrow function

 (
 (name)  => {console.log(` db test by ${name}`);}
 )
 ('gajanan')