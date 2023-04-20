			  var items = [];
			  var total = 0;

			  function addItem() {
			    // Get the item, price and quantity from the input fields
			    var input = document.getElementById("details").value;
			    var parts = input.split(" ");
			    var item = parts[0];
			    var price = parseInt(parts[1]);
			    var quantity = parseInt(document.getElementById("quantity").value);

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

			    // Clear the input fields
			    document.getElementById("quantity").value = "";
			  }