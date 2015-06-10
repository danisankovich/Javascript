//given an array of numbers, how many numbers
//are missing from the range from the given low: high
function Consecutive(arr) {
  var total = 0;
  var diff = 0;
  var array = arr.sort(function(a, b){return a-b});
  for (i=0; i<array.length-1; i++) {
    diff = (array[i+1]-array[i])
    total += diff;
  }
  return total;
}
Consecutive([1, 3, 7, 100, 44])
