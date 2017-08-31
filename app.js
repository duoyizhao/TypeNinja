//import includes from 'lodash/includes';

var text;
var totalCharNum;
var charNum = 0;
var scrollAmount;
// var results;
// var result = {
// 	"datetime": null;
// 	"user": null;
// 	"accuracy": null;
// }

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
axios.get(`/lesson0.txt`)
   .then(function(response) {
   		text = response.data;
        totalCharNum = text.length;
        for (i = 0; i < totalCharNum; i ++) {
        	addElement(i);
        }
        scrollAmount = parseInt(window.getComputedStyle(document.getElementById("lesson")).height) / 2;
   });
 
var numKeysPressed = 0;
var whichCharacter = 0;
var numBackspace = 0;
var mistakes = 0;

document.onkeypress = function (e) {
	e.preventDefault();
	var keynum;
	numKeysPressed += 1;

	var charId = whichCharacter.toString();
	var lessonChar = document.getElementById(charId).innerText;
	var lessonCharCode = lessonChar.charCodeAt(0);
	var keys = ['a', 's', 'd', 'f'];

	if (_.includes(keys, lessonChar)) {
		document.getElementById(lessonChar).classList.add("highlighted");
		setTimeout(function(){
			document.getElementById(lessonChar).classList.remove("highlighted");
		}, 500);
	}

	if(window.event && e.keyCode != 8 && e.keyCode != 46) {
		whichCharacter += 1;
	} 

	if (e.keyCode === lessonCharCode) {
		document.getElementById(charId).style.backgroundColor = "#99f7dc";
	} else {
		mistakes += 1;
		document.getElementById(charId).style.backgroundColor = "#f2df35";
	}

	document.getElementById(charId).scrollIntoView();
	document.getElementById("lesson").scrollTop -= scrollAmount;
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
		if (mistakes > 0) {
			mistakes -= 1;
		}
		document.getElementById(charId).style.backgroundColor = "#2196f3";
	}
};

//accuracy calculation to keep tap of the wrongly typed 
function replyClick() {
	var accuracy = Math.round((1 - (mistakes + numBackspace) / numKeysPressed) * 100);
	alert("Your accuracy rate is: " + accuracy + "%; with " + numKeysPressed + " keys pressed & " + mistakes + " existing mistakes.");
};

//keyboard - CSS, use vw unit
//look into SVG a little too, it's an image. transform translate; transform scale

//store results in localstorage


