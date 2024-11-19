    const obj={
            a:10,
            x:  ()=>{
                console.log(this)
            }
    }
    obj.x()

    /* value of this keyword in an arrow function will be the value of its enclosing
    lexical context (In this case it will be Globalscope because the enclosing lexical context here
    is Globalscope*/ 