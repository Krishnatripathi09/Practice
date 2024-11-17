function fibonacci(num){
  if(num<=0) return "Invalid Number";
  if(num===1)  return 0
  if(num===2)  return 1;
  
  let fn1=0,fn2=1,fibo;
  
  for(let i=3;i<=num;i++){
    fibo=fn1+fn2;
    fn1=fn2;
    fn2=fibo
  }
  return fibo;
  
}

console.log(fibonacci(8))