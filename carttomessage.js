//////////////cart to message 
function copyTextarea() {
  var input = document.getElementById("cart").value;
  document.getElementById("my-input").value += input;
  submitMessage();
 document.getElementById("cart").value= "\n\n\n\n\n\nCHACK-MESSAGE";
}
/////