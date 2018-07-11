function insertDash(num) {
  const numString=num.toString();
  const odd=['1','3','5','7','9'];
  let productString=""
  for(let i=0;i<numString.length;i++){
    if(odd.includes(numString.charAt(i))&&odd.includes(numString.charAt(i+1))){
      productString=productString+numString.charAt(i)+"-";
    }
    else{
      productString=productString+numString.charAt(i);
    }
  }
  return productString;
}