function numToString(num) {
  var string = '' + num;
	return string; //removed .split
}

function TripleDouble(num1,num2) {
  var num1 = numToString(num1);
  var num2 = numToString(num2);
  for(i=0; i<num1.length; i++) {
    if(num1[i] === num1[i+1] && num1[i] === num1[i+2]) {
      var searchNum = num1[i]+num1[i]
      if(num2.indexOf(searchNum) !== -1) {
        console.log(1);
      }
      else {
        console.log(0);
      }
    }
  }
}
TripleDouble(1234555678, 1235567);
TripleDouble(123455567, 12234678);
TripleDouble(1233211233345, 54332233555);
