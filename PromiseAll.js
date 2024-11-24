const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Successful"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 Fail"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Successful"),2000)
})
Promise.all([p1,p2,p3])
.then(res=>{console.log(res);
})
.catch((err)=>{
console.error(err)
});
/*  Promise.all is a promise Api which takes an array of promises and returns the result if all 
the promises are fulfilled Even if a single promise is rejected it will quickly log the error 
to the console for that failed promise. In this case it returns p1,p2,p3 successfull after 3 seconds 
as the setTimeOut value we have set is 3 seconds for highest so it waits for all the promises to get 
fulfilled and then returns the result*/
//In Above Example we have set promise p2 to fail after 1 sec so it will fail after 1 sec and 
//promise.all will return an error and catch will catch that error and log it to the console.



