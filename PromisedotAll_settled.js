const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Successful"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 Fail"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Successful"),2000)
})
Promise.allSettled([p1,p2,p3])
.then(res=>{console.log(res);
})
.catch((err)=>{
console.error(err)
});
/*  Promise.allsettled is a promise Api which takes an array of promises and returns the result for all 
the promises in an array. Even if a single promise is rejected it will still wait  for other 
promises result and once all promises are settled it will log the result to the console for all promises.
 In this case it log p1,p2,p3 to the console after 3 seconds and result for pe will be rejected.
as the setTimeOut value we have set is 3 seconds for highest so it waits for all the promises to get 
settled and then returns the result*/




