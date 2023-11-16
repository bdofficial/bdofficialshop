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
    const name = item.name;
    const quantity = item.quantity;
    const total = parseInt(calculateItemTotal(quantity, item.price)) + "TK";
    roomInput.value +=  "Name: " + name + ", Quantity: " + quantity + ", Price: " + total + ".\n";
  });
  
  if (cart.length > 0) {
  roomInput.value += "TOTAL: " + cartTotal.textContent + "TK.";
  }
  ////////////////////////////////////////
  var input = document.getElementById("room").value;
  document.getElementById("my-input").value += input;
  ///////////////submit
  const iframe = document.getElementById('chatiframe');
  const nam = document.getElementById("name").value;
  const mes = document.getElementById('my-input').value;
  if (mes === ' ' || mes === '') {
    return;
  }
  const message = "✓" + mes;
  iframe.contentWindow.postMessage({ message }, '*');
  document.getElementById('my-input').value = "";
   /////////////submit
  document.getElementById("cartItems").innerHTML = "";
   //////////////////
  roomInput.value = "";
  ////////
  document.getElementById("cartTotal").innerHTML = "00.00";
  cart.length = 0;
  roomDetails.length = 0;
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

