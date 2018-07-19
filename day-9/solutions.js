function solution(str){
  let arr= str.split("").reverse();
  let ans=arr.toString().replace(/[,]/gm,'');
  return ans;
}

function solution2(str){
  let arr= str.split("").reverse();
  let ans=arr.join();
  return ans;
}