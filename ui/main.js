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

var button = document.getElementById('counter');
var counter=0;

button.onclick = function() {
  
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the responce and store it on variable
  
  request.onreadystatechange = function() {
      if(request.readyState == XMLHttpRequest.DONE){
          //take some action
          if(request.status==200){
              var counter=request.responseText;
              var span = document.getElementById('count');
              span.innetHTML = counter.toString();
              
          }
          
      }
      // not done yet
      
  };
  //render the variable in correct span
  request.open('GET','http://hk076262.imad.hasura-app.io/counter',true);
  request.send(null);
};