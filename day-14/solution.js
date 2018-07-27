function capitalize(s,arr){
  let stArr=s.split("");
  stArr.forEach((x,i)=>{
    if(arr.includes(i)){
      stArr[i]=x.toUpperCase();
    }
  });
  return stArr.join("");
};