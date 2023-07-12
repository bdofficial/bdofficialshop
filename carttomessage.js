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