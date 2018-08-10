function chessboard(bindingSize){
  answer="";
  for(let i=0;i<bindingSize;i++){
    if(i%2===0){
      answer +=" "
    }
    for(let j=0;j<bindingSize;j++){
      if(j%2){
        answer +="#";
      }
      else{
        answer +=" ";
      }
    }
    answer += "\n";
  }
  console.log(answer);
}

//Change the bindingSize here as an argument.
chessboard(8);