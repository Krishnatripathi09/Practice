const obj={
        a:10,
        x: function (){
            console.log(this.a)
        }
}
obj.x()

/* To Access properties of an object from within its 
own method using this keyword we can call it like in above code so it will print 10 to the console.*/ 