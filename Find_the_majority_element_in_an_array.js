function majoRity(arr){
  let n=arr.length;
  
  for(let i=0;i<n;i++){
    let count=0;
    for(let j=0;j<n;j++){
      if(arr[i]===arr[j]){
        count++;
      }
    }
  if(count>n/2){
      return arr[i];
    }
      
  }
  return -1;
}
console.log(majoRity([1,2,2,2,2,3,4]))
