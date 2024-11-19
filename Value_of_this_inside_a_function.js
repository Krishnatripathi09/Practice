"use strict";
function printThis(){
    console.log(this)
}


/* if we use this key  word inside a function in Node.js environment it's value will be global object
but in browser environment it's value will be the window object when we run the code in non-strict mode
but if we run the code in strict-mode it's value will be un-defined*/

//But if we call the function in refernece to someObject then the value of this keyword wil be equal 
//to that object For Eg:
window.printThis(); //Here the value of this keyword will be equal to window object in browsers