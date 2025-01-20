const promise1 = new Promise(function(resolve,reject)

{
    setTimeout(() => {
        console.log('asyn taks is complete');
         resolve()
    }, 1000);
})

promise1.then(()=>{

    console.log('promise consumed'); 
})


new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log('asyn 2 task');
        resolve()
    }, 1000);

}).then( ()=>{

console.log('promise 2 consumed');

}
)


const promise3=new Promise(function(resolve,reject){
setTimeout(() => {
    resolve({username:'chai',email:"elvishbhai@"})
}, 1000);
})

promise3.then(((user) => {
    console.log(user);
    
})
)