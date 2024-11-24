const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P1 failed"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 Failed"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P3 failed"),2000)
})
Promise.any([p1,p2,p3])
.then(res=>{console.log(res);
})
.catch((err)=>{
console.error(err)
console.log(err.errors)
});
/*  Promise.race is a promise Api which takes an array of promises and returns the result as soon as 
the first promise is successful. It returns the result of first successful promise even if the 
first promise in Stack might fail but it will return the result of first successful promise only.If all
the promises return an error then we will get an array of errors for all 3 errors or if we 
do console.log only err then it will show only aggregiate for all errors like(All promises were rejected). */