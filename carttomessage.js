//////////////cart to message 
function copyTextarea() {
  //////////
  var input = document.getElementById("room").value;
  document.getElementById("my-input").value += input;
  submitMessage();
  document.getElementById("room").value = "";
}
/////
///////////iframe chat submit & scrool
function submitMessage() {
  const iframe = document.getElementById('chatiframe');
  const nam = document.getElementById("name").value;
  const mes = document.getElementById('my-input').value;
  if (mes === ' ' || mes === '') {
    return;
  }
  const message = "𖦹 " + mes;
  iframe.contentWindow.postMessage({ message }, '*');
  document.getElementById('my-input').value = "";
}
///////

