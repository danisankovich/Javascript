place a * between all pairs of positive numbers and a - between all pairs of negative numbers. 0 is neither positive nor negative

function DashInsertII(num) {
  var dashed = ''
  var array = num.toString(10).split("").map(function(t)
                                          {return parseInt(t)})
    for (i = 0; i<array.length; i++) {
        dashed += array[i]
        if (((array[i] !== 0) &&(array[i+1] !== 0)) && ((array[i]%2 === 0) && (array[i+1]%2 === 0))) {
          dashed +='*';
        }
        if (((array[i] !== 0) &&(array[i+1] !== 0)) && ((array[i]%2 !== 0) && (array[i+1]%2 !== 0))) {
          dashed +='-';
        }
    }
    return dashed
}
DashInsertII(12235344043004205034)
