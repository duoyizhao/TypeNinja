Things I've tried.
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text_background

<!DOCTYPE html>
<html>
<head>
<style>
span.highlight {
    background-color: #bafcb0;
}
</style>
</head>
<body>

<p id="text">
This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text. This is a text.
</p>

<script>
var text = document.getElementById("text");

function myKeyPress(e) {
  for (i = 0; i < text.length; i++) {
      if (String.fromCharCode(e.keyCode) === text[i]) {
      text = "<span class="highlight">" + text.substr(0, i) + "</span>" + text.substr(i+1); 
      document.getElementById("text").innerHTML = text;
  }
</script>

<form>
  <input type="text" onkeypress="return myKeyPress(event)" />
</form>

</body>
</html>
