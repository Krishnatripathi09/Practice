function mergeSortedArray(arr1,arr2){
  let merged =[];
  
  let i=0;
  let j=0;
  
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      
      merged.push(arr1[i])
      i++;
    } else {
      merged.push(arr2[j])
      j++;
    }
  }
  
  while(i<arr1.length){
    merged.push(arr1[i])
    i++;
  }
  
  while(j<arr2.length){
    merged.push(arr2[j])
    j++
  }
  
  return merged;
}
let arr12 =[1,2,3,4,5,6]
let arr23 =[7,8,9,10]

let result =mergeSortedArray(arr12,arr23)

console.log(result)