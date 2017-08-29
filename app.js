var text;
var totalCharNum;
var charNum = 0;

//document.body.onload = addElement;

function addElement (charNum) { 
  // create a new inline element 
  // and give it some content 
  var prevCharNum = charNum - 1;
  var newSpan = document.createElement("span"); 
  newSpan.setAttribute("id", charNum);
  var newContent = document.createTextNode(text[charNum]); 
  newSpan.appendChild(newContent); //add the text node to the newly created div. 

  if (charNum === 0) {
  	document.getElementByid("lesson").appendChild(newSpan);
  }
  // add the newly created element and its content into the DOM 
  var currentSpan = document.getElementById(prevCharNum); 
  document.body.insertAfter(newSpan, currentSpan); 
}

//turn lesson string's each character into HTML's inline elements
//div element 'lesson' will be the container for all the characters
axios.get(`/lesson1.txt`)
   .then(function(response) {
   		text = response.data;
        totalCharNum = text.length;
        for (i = 0; i < totalCharNum; i ++) {
        	addElement(i);
        }
   });
 
document.onkeypress = function (event) {
	console.log(event);
};





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
