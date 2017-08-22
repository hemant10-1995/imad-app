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
              span.innerHTML = counter.toString();
              
          }
          
      }
      // not done yet
      
  };
  //render the variable in correct span
  request.open('GET','http://hk076262.imad.hasura-app.io/counter',true);
  request.send(null);
};
//submit name
var nameInput = document.getElementByID('name');  //capture the name
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to server and send name
    //capture a list of name and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0; i<names.lenght; i++) {
        list +='<li>' + names[i] + '</li'>;
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML =list;
};