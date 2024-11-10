function printt(num){
    for (let i=1;i<=num;i++)
    {
      let row=''
      
      for(let j=1;j<=num-i;j++){
        
        row+=' '
        
      }
        for(let k=1;k<=2*i-1;k++){
        if(k==1||k===2*i-1||i===num){
        row+='*'
      } else{
        row+=" "
      }
      }
      
       console.log(row)
     
    }
    
   }
   printt(6)
   
   
   