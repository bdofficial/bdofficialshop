//////////////cart to message 
function copyTextarea() {
  const roomInput = document.getElementById("room");
  /////
  roomInput.value = ""; // Clear the room input
   ///
   function calculateItemTotal(quantity, price) {
     return (quantity * price);
   }
   ////
  roomDetails.forEach(item => {
    const details = item.details;
    const quantity = item.quantity;
    const total = parseInt(calculateItemTotal(quantity, item.price)) + "TK";
    roomInput.value += "Details: " + details + ", Quantity: " + quantity + ", Price: " + total + ".\n";
  });
  roomInput.value += "TOTAL: " + cartTotal.textContent + "TK";
  ////////////////////////////////////////
  var input = document.getElementById("room").value;
  document.getElementById("my-input").value += input;
  submitMessage();
   /////////////
  document.getElementById("cartItems").innerHTML = "";
   //////////////////
  document.getElementById("room").value = "";
  ////////
  document.getElementById("cartTotal").innerHTML = "00.00";
  cart.length = 0;
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

