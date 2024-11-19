    const obj={
            a:10,
            x:  function () {
                const y =() =>{
                console.log(this)
            }
            y();
            }
            
    }
    obj.x()

    /* value of this keyword inside nested arrow function will be the value of its object in 
    which it is nested so here it will print { a: 10, x: [Function: x] }*/ 