// program to find Vowel's
function findVowels(str){
  const vowels='aeiou'
  str=str.toLowerCase();
  
  let vowelCount=0;
  let foundVowel='';
  
  for(let i=0;i<str.length;i++){
    let char=str[i]
    
    if(vowels.includes(char)){
      vowelCount++
      foundVowel+=char;
    }
  }
  console.log(foundVowel)
}

findVowels("Krishna is Awesome")