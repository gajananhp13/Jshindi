const marvel=["thor","spiderman","ironman"]
const dc=["superman","flash","batman"]

marvel.push(dc)     //[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', '+batman' ] ]
// console.log(marvel);   // take arraydc  a single data 
// console.log(marvel[1]);     // spiderman
// console.log(marvel[2][2]);  // gives o from iron man 2nd index from 2nd index element of marvel
const allhero=  marvel.concat(dc)
console.log(allhero);
