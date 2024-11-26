//Program to make first Letter of each word capital;

function firstLetterOfEachWord(str){
  let words=str.split(" ")
  
  for(let i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].substr(1)
  }
  
  let capitalizeStr=words.join(' ')
  console.log(capitalizeStr)
}

firstLetterOfEachWord("I am a boy who is awesome")