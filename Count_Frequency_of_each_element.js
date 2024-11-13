function countFrequency(arr){
  let frequency ={};
  
  for (let i=0;i<arr.length;i++){
    let element = arr[i];
    
    if(frequency[element]){
      frequency[element]++;
    } else {
      frequency[element]=1;
    }
    
    
  }
  return frequency;
} 

console.log(countFrequency([1,2,2,1,3,4,5,6,6,7,7,7]))