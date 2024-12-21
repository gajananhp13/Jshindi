const tinderuser= new Object() //gives same output 
const tinderuser={}    
tinderuser.id="123abds"
tinderuser.name="gajanan"
tinderuser.islog=false

// console.log(tinderuser);

const regularuser={
    email:"some@mail.com",
    fullname :{
       username: { firstname:"gaju",
                     lastname:"patange"}
    }
}

console.log(regularuser.fullname.username.firstname);  //this is how we access nested objects 


const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}
console.log(ob1,ob2);


const obj3 = Object.assign({},ob1,ob2)  //{} tell that its a target object  all objects so  assigned in {}
console.log(obj3);

// or you can use ... operator 
const obj3={...ob1,...ob2}
console.log(obj3);


const users=[
{
    id:1,
    nam:"gajanan"
},
{
    id:2,
    nam:"gajanan"
}
]

console.log(users[1].id)

console.log(tinderuser);

console.log(Object.keys(tinderuser)) //[ 'id', 'name', 'islog' ]
console.log(Object.values(tinderuser))  //[ '123abds', 'gajanan', false ]
console.log(Object.entries(tinderuser)) //[ [ 'id', '123abds' ], [ 'name', 'gajanan' ], [ 'islog', false ] ]

console.log((tinderuser.hasOwnProperty("islog")));   // true


const course={
couresname:"gajan DSA and DEV ",
price:"10",
coursementor:"gajanan"
}
// console.log(course.coursementor);

const {coursementor}=course
console.log(coursementor);


{
    "name":"arya",
    "id":"12313"
}













