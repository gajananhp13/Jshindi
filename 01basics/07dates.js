// node 01basics/07dates.js

let mydate=new Date;

 console.log(mydate.toString()); // Thu Dec 19 2024 18:03:32 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toJSON()); //2024-12-19T18:03:32.927Z
console.log(mydate.toDateString());  //Thu Dec 19 2024

console.log(typeof mydate);  //date =function & mydate object

let mycreatedDate=new Date(2023,11,25)   //mont start with 0 in Js

let mycreatedDate=new Date("11-13-24")
console.log(mycreatedDate.toLocaleDateString());//Tue Jan 24 2023 

let myTime=Date.now();
console.log(myTime);  /// generated millisecnos count from jan 1970 1734632040721

 console.log(Math.floor(myTime/10000));

let newdate=new Date()

console.log(newdate.getMonth());

