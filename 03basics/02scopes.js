// node 03basics/02scopes.js


var c=300

let a =100
if (true)
{
    let a= 10
console.log("inner val ",a)

    const b=20
    var c =30
scope of a  b c is defined till here only 
}
console.log(a)  not defined
console.log(b);   not defind
console.log(c); // but will print 3 by var

console.log(a);
// inner val  10
// 100

function one()
{
    const username="hitesh"
}



if (true)
{
    const username ="gajanan"
    if(username==="gajanan")
    {
        const website ="youtube"
        console.log(username+website)

    }
    console.log(website)   //scope undefined
}
console.log(username) scope undefined



// ___________________-interesting________________________________________________________


console.log(addone(5));


function addone(num){
    return num+1
}

add_two(5)
const add_two=function(num){   //hoisting function is hold in functionn

    return num+2
}

