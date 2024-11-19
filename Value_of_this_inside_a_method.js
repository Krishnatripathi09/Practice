const obj={
        a:10,
        x: function (){
            console.log(this)
        }
}
obj.x()

/* when we call the this keyword which is inside a method(a function inside an object) then the this 
keyword points to the object inside which it is present so the above code prints
{a:10,x:[Function:x]} to the console as that is what present inside the Object*/ 