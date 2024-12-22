// node 01basics/3conversionop.js

let score="33"

console.log(typeof score);
console.log(typeof(score));
let valinnum=Number(score)
console.log(typeof valinnum);
console.log( valinnum); // for null and undefiedn it nan
// 33 abc => Nan type which is also a num

let logined=1;//1>= true   0=false
let letlogin= Boolean(logined)
// console.log(letlogin);

let somenum=23;
let somestring=String(somenum)
console.log(somenum)
console.log(typeof somestring);


console.log("2">1)
console.log(null>=0);   //true     // null is converted to zero number by javascript
console.log(null>0);        //false
console.log(null==0);       //false

// console.log(undefined==0);      //all cases >= <= == gives as false

console.log(0=="0"===0)//  false  because === checks the datatype also 

// ***************so we should avoid these operations to avoid confusion***********