function BracketMatcher(str) {
  var array = str.split('');
  var forwardparen = 0;
  var backwardparen = 0;
  var forwardbrack =0;
  var backwardbrack=0;
  for (i=0; i<array.length; i++) {
    if (array[i]==='('){
      forwardparen += 1;
    }
    if (array[i]===')') {
      backwardparen += 1
    }
    if (array[i]==='['){
      forwardbrack += 1;
    }
    if (array[i]===']') {
      backwardbrack += 1
    }
    if ((backwardparen > forwardparen)||(backwardbrack > forwardbrack)) {
      return 0;
    }
  }
  if ((forwardparen === backwardparen) && (forwardbrack===backwardbrack)){
    return 1;
  }
  else {
    return 0;
  }
}

BracketMatcher('(coder)[byte)]');
