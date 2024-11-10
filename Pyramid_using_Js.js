function pyramid(num){
  for(let i=1;i<=num;i++){
    let row=''
      for(let j=1;j<=num-i;j++){
      row+=" "
      }
      for(let k=1;k<=2*i-1;k++){
        row+=i
      }
      console.log(row)
    }
    
  }
pyramid(5)



