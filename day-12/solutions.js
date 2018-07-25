function high(sentence){
  const arrayOfWords=sentence.split(" ")
  
  let arrayOfScores = arrayOfWords.map(word=>word
    .split("")
    .reduce((total,letter)=>{return total=total+(letter.codePointAt()-96)},0)
  );
  
  let highest = arrayOfScores.reduce((max,currentScore)=> {return currentScore > max ? currentScore : max}, -Infinity);
  
  return arrayOfWords[arrayOfScores.indexOf(highest)];
 }