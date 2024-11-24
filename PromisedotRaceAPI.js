const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Successful"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 Fail"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Successful"),2000)
})
Promise.race([p1,p2,p3])
.then(res=>{console.log(res);
})
.catch((err)=>{
console.error(err)
});
/*  Promise.race is a promise Api which takes an array of promises and returns the result as soon as 
the first promise is successful or failed . It returns the result of first successful promise whether
fulfilled or rejected */




