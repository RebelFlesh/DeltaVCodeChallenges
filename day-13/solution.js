function mutateMyStrings(stringOne, stringTwo){
  let arrOne=stringOne.split('');
  let arrTwo=stringTwo.split('');
  let answer=stringOne+"\n";
  for(let i=0;i<arrOne.length;i++){
    if(arrOne[i]!==arrTwo[i]){
      arrOne[i]=arrTwo[i];
      answer=answer+arrOne.join("")+"\n";
    }
  }
  return answer;
}