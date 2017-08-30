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
 
var numKeysPressed = 0;
var whichCharacter = 0;
var numBackspace = 0;

document.onkeypress = function (e) {
	e.preventDefault();
	var keynum;
	numKeysPressed += 1;

	var charId = whichCharacter.toString();
	var lessonChar = document.getElementById(charId).innerText;
	var lessonCharCode = lessonChar.charCodeAt(0);

	if(window.event && e.keyCode != 8 && e.keyCode != 46) {
		whichCharacter += 1;
	} else if(window.event && e.keyCode === 8 || e.keyCode === 46) {
		if (whichCharacter !== 0) {
			whichCharacter -= 1;
			numBackspace += 1;
		}
	}

	if (e.keyCode === lessonCharCode) {
		document.getElementById(charId).style.backgroundColor = "#99f7dc";
	} else if (e.keyCode === 8 || e.keyCode === 46) {
		document.getElementById(charId).style.backgroundColor = "#2196f3";
	} else {
		document.getElementById(charId).style.backgroundColor = "#f2df35";
	}
};

//backspace & delete
document.onkeyup = function (e) {
	e.preventDefault();
	var keynum;
	//numKeysPressed += 1;

	if(window.event && e.keyCode === 8 || e.keyCode === 46) {
		if (whichCharacter !== 0) {
			whichCharacter -= 1;
			numBackspace += 1;
		}
	}

	var charId = whichCharacter.toString();

	if (e.keyCode === 8 || e.keyCode === 46) {
		document.getElementById(charId).style.backgroundColor = "#2196f3";
	}
};

function replyClick() {
	var accuracy = Math.round((whichCharacter / numKeysPressed) * 100);
	alert("Your accuracy rate is: " + accuracy + "%");
}

//character's like quotation marks are not correctly being interpreted...
//Keep the scrollbar still until it hits the end of displayed text 
// >> scroll doesn't automatically move yet!


