var squareRootSum = function(num){
  var result = 0;
  while(num >=1){
    result += Math.sqrt(num);
    num -= 1;
  }
  return Number(result.toFixed(2));
}