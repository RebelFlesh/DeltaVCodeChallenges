function cubeOdd(arr) {
  let answer = arr
    .map(x=>Math.pow(x,3))
    .filter(x=> x % 2 !== 0)
    .reduce((sum,current)=>{return sum+current},0);
  return isNaN(answer) ? undefined : answer
  }