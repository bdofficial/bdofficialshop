//////////////cart to message 
function copyTextarea() {
  const roomInput = document.getElementById("room");
  /////
  roomInput.value = ""; // Clear the room input
   ///
   function calculateItemTotal(quantity, price) {
     return (quantity * price);
   }
////////
if (cart.length > 1) {
let counter = 1;
roomDetails.forEach(item => {
      const name = item.name;
      const quantity = item.quantity;
      if (quantity == 1) {
roomInput.value += counter + "." + name + ",\n";
        counter++;
      }
      else {
      const total = parseInt(calculateItemTotal(quantity, item.price)) + "TK";
      roomInput.value += counter + "." + name + "~QUANTITY: " + quantity + "~PRICE: " + total + ",\n";
      counter++;
      }
  });
roomInput.value += "TOTAL: " + cartTotal.textContent + "TK.";
  }
//////
else {
      const name = roomDetails.map(item => item.name);
      const quantity = roomDetails.map(item => item.quantity);
      const price = roomDetails.map(item => item.price);
      const total = parseInt(calculateItemTotal(quantity, price)) + "TK";
  if (quantity == 1) {
    roomInput.value = name + ".";
  }
  else {
    roomInput.value = name + "~QUANTITY: " + quantity + "~TOTAL: " + total + ".";
  }
  }
////////////////////////////////////////////
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

