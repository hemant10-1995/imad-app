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
              var counter = request.response.Text;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
          
      }
      // not done yet
      
  };
  //render the variable in correct span
  request.open('GET','http://hk076262.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
};
//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server and send the name
    //create a request object
  var request = new XMLHttpRequest();
  
  //capture the responce and store it on variable
  
  request.onreadystatechange = function() {
      if(request.readyState == XMLHttpRequest.DONE){
          //take some action
          if(request.status==200){
             //Capture the list of name and render it as list 
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for(var i=0; i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
   }
          
     }
      // not done yet
      
  };
   //MAKE the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET','http://hk076262.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
   
};

