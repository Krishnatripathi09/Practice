//Rest Operator is special syntax which is used to accept indefinite no of 
//arguments into a function and packs those arguments into an array and returns 
//that array. It is used when we are not sure how many arguments will be passed to a
//function.

function restp(a,b, ...rest){
console.log(a);
console.log(b);
console.log(rest)
}
restp(1,2,3,4,5,7,8,9)

