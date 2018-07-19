var gimme = function (arr) {
  let z;
  arr.forEach(x=>{
    if(!(x<=arr[0]&&x<=arr[1]&&x<=arr[2])&&!(x>=arr[0]&&x>=arr[1]&&x>=arr[2])){
      z=(arr.indexOf(x));
    }
  });
  return z;
};