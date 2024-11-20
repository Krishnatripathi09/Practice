/* We can also pass the different parameters inside a funciton 
using call*/
// Object  1
let name ={
    firstName:"Krishna",
    lastName:"Tripathi"
};

// Object 2

let name2 ={
    firstName:"Dev",
    lastName:"Tripathi"
}

let printFullName = function (hometown,State)
{
    console.log(`${this.firstName} ${this.lastName} is from ${hometown} ${State}`)
}

//printFullName.call(name2,"Ayodhya","UP") // here we pass 2 Arguments associated with name2 

/* so the only difference between call and apply is how we pass arguments into the function 
so to pass arguments into printFullName using apply we have to pass it as array of arguments.
*/
printFullName.apply(name2,["Ayodhya","UP"]) // here we pass 2 Arguments as in array

