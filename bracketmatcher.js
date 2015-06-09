function BracketMatcher(str) {
  var array = str.split('');
  var forward = 0;
  var backward = 0;
  for (i=0; i<array.length; i++) {
    if (array[i]==='('){
      forward += 1;
    }
    if (array[i]===')') {
      backward += 1
    }
    if (backward > forward) {
      return 0;
    }
  }
  if (forward === backward) {
    return 1;
  }
  else {
    return 0;
  }
}

BracketMatcher(')()(hello world)');
BracketMatcher('()Hello World()');
