//import includes from 'lodash/includes';

var text;
var totalCharNum;
var charNum = 0;
var scrollAmount;
var chosenLesson;
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
function getLesson(x) {
	axios.get(x)
	   .then(function(response) {
	   		text = response.data;
	        totalCharNum = text.length;
	        console.log(totalCharNum);

	   		if (totalCharNum === 0) {
	   			document.getElementById("lesson").innerHTML = "Lesson is empty";
	   		} else {
		        for (i = 0; i < totalCharNum; i ++) {
		        	addElement(i);
		        }
	    	} 

	        scrollAmount = parseInt(window.getComputedStyle(document.getElementById("lesson")).height) / 2;
	   }).catch(function(response) {
		   document.getElementById("lesson").innerHTML = "An error occured.";
		   return Promise.reject(response);
	   })
}

chosenLesson = `/lesson0.txt`;
getLesson(chosenLesson);
 
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

	document.getElementById(lessonChar).classList.add("highlighted");
	setTimeout(function(){
		document.getElementById(lessonChar).classList.remove("highlighted");
	}, 500);

	// var keys = ['a', 's', 'd', 'f'];

	// if (_.includes(keys, lessonChar)) {
	// 	document.getElementById(lessonChar).classList.add("highlighted");
	// 	setTimeout(function(){
	// 		document.getElementById(lessonChar).classList.remove("highlighted");
	// 	}, 500);
	// }

	if(window.event && e.keyCode != 8 && e.keyCode != 127) {
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

	if(window.event && e.keyCode === 8 || e.keyCode === 127) {
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

//Think about how to have the keyboard highlights appear before there is any kepress
//how to singal the start of typing?

//Write a script to run curl tests 

//Host the server in a dev machine and figure it out with a link etc


