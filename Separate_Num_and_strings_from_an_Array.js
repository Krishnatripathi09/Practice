function separateNumArr(arr){
  let num=[];
  let str=[];
  
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==='number'){
      num.push(arr[i])
    } else if (typeof arr[i]==='string'){
      str.push(arr[i])
    }
  }
  return{str,num}
}

console.log(separateNumArr([1,2,3,"Hi","We are the Brave",8]))