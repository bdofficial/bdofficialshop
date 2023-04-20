var items = [];
var total = 0;

const forms = document.querySelectorAll('form');
  
  forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission
    // Get the item, price and quantity from the input fields
    const details = form.elements.namedItem('details').value;
    var parts = details.split(" ");
    var item = parts[0];
    var price = parseInt(parts[1]);
    const quantity = form.elements.namedItem('quantity').value;

    // Calculate the total price for this item
    var itemTotal = price * quantity;

    // Add the item and price to the array
    items.push({ item: quantity + "-" + item, price: itemTotal });

    // Calculate the total price
    total = 0;
    for (var i = 0; i < items.length; i++) {
      total += items[i].price;
    }

    // Refresh the textarea to display all the items and the total price
    var textarea = document.getElementById("cart");
    textarea.value = "";
    for (var i = 0; i < items.length; i++) {
      textarea.value += items[i].item + ":" + items[i].price + "TK\n";
    }
    textarea.value += "TOTAL:" + total + "TK";

    // Clear the quantity field
    form.elements.namedItem('quantity').value = "";
  });
});
