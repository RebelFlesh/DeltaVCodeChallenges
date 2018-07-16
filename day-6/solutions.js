function isNice(arr){
  var happiness=0;
  arr.forEach(n=>{
    if(arr.includes(n+1)||arr.includes(n-1)){
    happiness++;
    }
  })
  return(happiness===arr.length && arr.length>0 ? true : false)
}