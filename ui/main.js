//counter code

var button = document.getElementById('count');
var counter=0;

button.onclick = function() {
  //make a request to counter end point
  //capture the responce and store it on variable
  //render the variable in correct span
  counter = counter +1;
  var span =document.getElementById('count');
  span.innerHTML = counter.toString();
};