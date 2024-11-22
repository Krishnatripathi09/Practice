const student ={
    name: "John",
    printName: function (){
        console.log(this.name);
    }
};


/* we have a object student here which has method(a function which is a part of the object ) 
inside it. So when we call that method inside the object it prints the name of the student
which is inside the object.(method is using this keyword to print the name of the student)  */

/* Now suppose we have another object student2*/

const student2 ={
    name: "Rohn",

}

/* but the object student2 does not have any method inside it to print the name of the
student so it can borrow the method of inisde student1 object to print the name of the 
student using **Call**
call is used to explicitly bind this to a specific object 
(student2 in this case) while invoking a function.*/
student.printName.call(student2);

