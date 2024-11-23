function X(){
    var i=1;

    setTimeout(function(){
        console.log(i);
    },3000)
    console.log("Hi Krish")
}
X();

/* So in Above example the function x forms a closure with inner function which we have passed inside
a setTimeOut which would be executed after 3 seconds. so here when the function x() is called this 
does not wait for setTimeOut function to complete 3 seconds and  then to print the value of i but
what it does is it wraps the function of SETTIMEOUT and keeps it somewhere in the call stack 
and it continues to execute the next line of program so once the next line of code is executed, 
the function of SETTIMEOUT is still waiting in the call stack to be executed after 3 seconds and once
the next line is executed the callstack resumes the SetTimeOut function execution and it prints 
the value of i to the console which is 1.  
*/ 