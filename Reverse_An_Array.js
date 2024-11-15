function reverseArray(arr){
  let reverse =[]
  
for(let i=arr.length-1;i>=0;i--){
  reverse.push(arr[i])
}  
console.log(reverse)
}
reverseArray([12,34,56,78,98])