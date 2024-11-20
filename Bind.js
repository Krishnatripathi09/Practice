//Object 1
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

// Bind Method gives us copy of the method which we call using bind and later we can call 
// that method using that copy. It does not change the original method.
let printName = printFullName.bind(name2,"Ayodhya","UP") 

printName();