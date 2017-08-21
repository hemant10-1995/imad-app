/*// change the text of the main-text div
var element = document.getElementById('main-text'
);

element.innerHTML = 'New Value';
//Mov the image
var img = document.getElementById('madi');
var marginLeft= 0;
function moveRight () {
    marginLeft=marginLeft + 1;
    img.style.marginLeft =marginLeft + 'px';
}
img.onclick= function(){
       var interval =setInterval(moveRight,50);
};*/


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