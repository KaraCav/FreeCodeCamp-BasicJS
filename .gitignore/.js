// 1. Nesting For Loops: Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
function multiplyAll(arr) {
  var product = 1;
  for(var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
product = product * arr[i][j];
  }
}
  return product;
}
