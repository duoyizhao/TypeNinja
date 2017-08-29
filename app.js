var text;
var totalCharNum;
var charNum = 0;

//document.body.onload = addElement;

function addElement (charNum) { 

  // create a new inline element 
  // and give it some content   
  var charId = charNum.toString();
  var newSpan = document.createElement("span"); 
  newSpan.setAttribute("id", charId);
  var newContent = document.createTextNode(text[charNum]); 
  newSpan.appendChild(newContent); 

  document.getElementById("lesson").appendChild(newSpan);
}

//div element 'lesson' will be the container for all the characters
axios.get(`/lesson1.txt`)
   .then(function(response) {
   		text = response.data;
        totalCharNum = text.length;
        for (i = 0; i < totalCharNum; i ++) {
        	addElement(i);
        }
   });
 
// document.onkeypress = function (event) {
// 	console.log(event);
// };


// var numKeysPressed = 0;
// var whichCharacter = 0;
// var numBackspace = 0;

// function myKeyPress(e){
// 	var keynum;
// 	numKeysPressed += 1;

// 	if(window.event && e.keyCode != 8) {
// 		whichCharacter += 1;
// 	} else if(window.event && e.keyCode === 8) {
// 		numBackspace += 1;
// 	}

// 	if(window.event) { // IE                    
// 	  keynum = e.keyCode;
// 	} else if(e.which){ // Netscape/Firefox/Opera                   
// 	  keynum = e.which;
// 	}

	// document.onkeydown = function(evt) {
 //    evt = evt || window.event;
 //    if (evt.ctrlKey && evt.keyCode == 90) {
 //        alert("Ctrl-Z");
 //    }
// };
