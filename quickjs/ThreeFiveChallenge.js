//for all numbers less than num. Add together all numbers that are multiples of 3 or 5 and return that sum.

function ThreeFiveMultiples(num) {
  console.log(num)
  var sum = 0
  for (i=1; i<num; i++) {
    if ((i%3===0) || (i%5===0)) {
      sum += i;
    }
  }
  return sum
}
ThreeFiveMultiples(10)
