// node 01basics/05strings.js

const name="gajanan"
let surname="patange"
const repocount=50

console.log(name +repocount+"value"); old method dont use (inconsistent in changes )

console.log(`hello im ${name} and my repo count is ${repocount}`); //string interpolation

const game=new String('hi its gajanan')  // we Declared string by object using constructor 

console.log(game[0]);

console.log(game.__proto__);        //  tells it an object 

console.log(game.length);       //returns the length of string 

console.log(game.toUpperCase() + " " + surname.toUpperCase());   // returns the string into UPPERCASES

console.log(game.charAt(4-1))           // tells about the character at parameterised position

console.log(game.indexOf('g'));     //tells about index of that character present in it 

var newstring=game.substring(0,6)

// console.log(newstring);

const newstr="    bohot jagah hai   "
console.log(newstr.trim());  // trim removes the extra space


console.log(game.slice(0,6))        // cut string into substring

const url="https://gajubhai.com@20/gajanan"

console.log(url.replace('@20','-'));        // replace the value in the given string

console.log(url.includes('gajubhai')); // checks whether the substring is present or not 

console.log(game.split(' ')); // the string is splited on basis of space

// __________________________________________________________________________________________________________________________
// STRING FUNCTION from inspect elements
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
