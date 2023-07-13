//////////////cart to message 
function copyTextarea() {
  const roomInput = document.getElementById("room");

  items.forEach(function(item) {
    const details = item.item + " " + item.price + "TK";
    const quantity = item.quantity;
    const total = calculateItemTotal(quantity, item.price) + "TK";
    roomInput.value += "✓" + "Details" + details + "," + "Quantity: " + quantity + "," + "Price: " + total + ".";
  });

  if (items.length > 1) {
    roomInput.value += document.getElementById("cart").value;
  }
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
  setTimeout(function() {
    chatiframe.contentWindow.postMessage('scrollToBottom', '*');
  }, 3000);
}
///////


