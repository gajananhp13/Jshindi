// node 05iterators/six.j
const coding=["js","py","java","c"]

const values =coding.forEach( (item)=>{
// console.log(item);
return item


}
)

// console.log(values)

const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter(    (num)=> num>4  )  // if curly braces are used then return must be used because it defines a scope and need to be returned this is explicit retur



mynum.forEach((N) => {
    if(N>4)
        { mynum.push(N) }       
    
});

// console.log(mynum)  



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => 
    
    bk.genre =="History" || bk.edition==2010


    // if braces are opened then use return key word because it is described in scope  {  return bk.genre =="History" || bk.edition==2010}  
  )

// console.log(userBooks);

