var die = 6;
var dice = 3;
function diceRoll(die, dice) {
  var roll = 0;
  for (loop=0; loop < dice; loop++) {
    roll = roll + Math.round(Math.random()*(die - 1))+1;
  }
document.form.text.value = roll;
}
