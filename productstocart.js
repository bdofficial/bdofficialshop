    const inputtt = document.querySelectorAll('.item-form input[name="quantity"]');
    inputtt.forEach(input => {
      input.addEventListener('input', function () {
        input.value = input.value.replace(/-/g, '');
      });
    });

    var items = []; 
    var total = 0; 

    const forms = document.querySelectorAll('.item-form');
    const inputsTable = document.getElementById('inputs');

    forms.forEach(form => {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent form submission

        const quantityInput = form.querySelector('input[name="quantity"]');
        const detailsInput = form.querySelector('input[name="details"]');
        const quantityValue = quantityInput.value;
        const detailsValue = detailsInput.value;

        if (quantityValue === '' || detailsValue === '') {
          return;
        }

        // Get the item, price, and quantity from the input fields
        const parts = detailsValue.split(" ");
        const item = parts[0];
        const price = parseFloat(parts[1]);

        // Create a new row for the input data
        const newRow = document.createElement('tr');

        // Create cells for details, quantity, and total
        const detailsCell = document.createElement('td');
        const detailsInputCell = document.createElement('input');
        detailsInputCell.type = 'text';
        detailsInputCell.value = detailsValue;
        detailsInputCell.readOnly = true;
        detailsCell.appendChild(detailsInputCell);

        const quantityCell = document.createElement('td');
        const quantityInputCell = document.createElement('input');
        quantityInputCell.type = 'number';
        quantityInputCell.value = quantityValue;
        quantityInputCell.min = 1;
        quantityInputCell.addEventListener('input', updateQuantity);
        quantityCell.appendChild(quantityInputCell);

        const totalCell = document.createElement('td');
        const totalInputCell = document.createElement('input');
        totalInputCell.type = 'text';
        totalInputCell.value = calculateItemTotal(quantityValue, price) + 'TK';
        totalInputCell.readOnly = true;
        totalCell.appendChild(totalInputCell);

        // Append cells to the new row
        newRow.appendChild(detailsCell);
        newRow.appendChild(quantityCell);
        newRow.appendChild(totalCell);

        // Append the new row to the inputsTable
        inputsTable.appendChild(newRow);

        // Add the item, price, and quantity to the items array
        items.push({
          item,
          price,
          quantity: parseInt(quantityValue),
          quantityInput: quantityInputCell,
          totalInput: totalInputCell
        });

        // Calculate the total price
        total = calculateTotalPrice();
        updateTotalPrice();

        // Clear the input fields
        quantityInput.value = "";

        // Show the cart container
        const cartContainer = document.getElementById('cart-container');
        cartContainer.style.display = 'block';
      });
    });

    function updateQuantity(event) {
      const input = event.target;
      const itemIndex = Array.from(inputsTable.children).indexOf(input.parentElement.parentElement);
      const item = items[itemIndex];
      item.quantity = parseInt(input.value);
      item.totalInput.value = calculateItemTotal(item.quantity, item.price) + 'TK';

      // Recalculate the total price
      total = calculateTotalPrice();
      updateTotalPrice();
    }

    function calculateItemTotal(quantity, price) {
      const parsedQuantity = parseFloat(quantity);
      if (isNaN(parsedQuantity) || parsedQuantity < 0) {
        return 0;
      }
      return parsedQuantity * price;
    }

    function calculateTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < items.length; i++) {
        totalPrice += calculateItemTotal(items[i].quantity, items[i].price);
      }
      return totalPrice;
    }

    function updateTotalPrice() {
      const cartInput = document.getElementById("cart");
      cartInput.value = "TOTAL: " + total + "TK";
    }