//Anagram or Not 
function anaGram(str1,str2){
  str1=str1.toLowerCase().replace(/\s/g, '')
  str2=str2.toLowerCase().replace(/\s/g, '')
  
  if(str1.length!==str2.length)
{
  return false;
}  

const sortedStr1=str1.split('').sort().join('')
const sortedStr2=str2.split('').sort().join('')

return sortedStr1===sortedStr1
}
let str1w="silent"
let str2s="listen"

let result=anaGram(str1w,str2s)
console.log(result)//true

