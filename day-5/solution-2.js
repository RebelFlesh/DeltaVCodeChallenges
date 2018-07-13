function capitalize(s){
  sArr=s.split('');
  cap1=[];
  cap2=[];
  for(let i=0;i<s.length;i++){
    if(i%2===0){
      cap1.push(sArr[i].toUpperCase());
      cap2.push(sArr[i]);
    }
    else{
      cap1.push(sArr[i]);
      cap2.push(sArr[i].toUpperCase());
    }
  }
  return [cap1.join(''),cap2.join('')];
};