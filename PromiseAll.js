const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Successful"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 Successful"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Successful"),2000)
})
Promise.all([p1,p2,p3])
.then(res=>{console.log(res)}); 
/*  Promise.all is a promise Api which takes an array of promises and returns the result if all 
the promises are fulfilled Even if a single promise is rejected is will quickly log the error 
to the console for that failed promise. In this case it returns p1,p2,p3 successfull after 3 seconds 
as the setTimeOut value we have set is 3 seconds for highest so it waits for all the promises to get 
fulfilled and then returns the result*/