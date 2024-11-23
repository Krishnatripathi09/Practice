function x(){
var a=7;
function y(){
    console.log(a)
}
return y;

}
x()();

/* In JS A closure is formed a function inside a function has access to its parents lexical scope
for eg: In above case function y has access to its outer lexical scope so when we console the var x 
inside y it prints the value of var a to the console even if We print it inside y();
*/ 