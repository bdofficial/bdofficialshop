        // JavaScript functions
        let cart = [];
        let roomDetails = [];

        function addToCart(event, form) {
            event.preventDefault(); // Prevent form submission

            // Extract details from the form
            const detailsInput = form.querySelector('.details');
            const detailsValue = detailsInput.value;
            const parts = detailsValue.split(" ");
            const item = parts[0];
            const price = parseFloat(parts[parts.length - 1]);

            // Use product details to identify each product
            const productDetails = form.closest('.products').getAttribute('data-product-details');

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.details === productDetails);
            if (existingProduct) {
                existingProduct.quantity;
            } else {
                cart.push({
                    name: detailsValue,
                    price: price,
                    details: productDetails,
                    quantity: 1
                });
            }
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById("cartItems");
            const cartTotal = document.getElementById("cartTotal");
            let total = 0;

            cartItems.innerHTML = "";

            cart.forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.className = "products";
                const productDiv = document.querySelector(`[data-product-details="${item.details}"]`);
                const productClone = productDiv.cloneNode(true);
                productClone.className = "cloned-product";

                const buttons = productClone.getElementsByTagName('button');
                if (buttons.length > 0) {
                    buttons[0].remove();
                }

                const quantityGrid = document.createElement("div");
                quantityGrid.className = "quantity-grid";

                const minusButton = document.createElement("button");
                minusButton.textContent = "–";
                minusButton.className = "minus";
                minusButton.onclick = () => updateQuantity(index, item.quantity - 1);

                const quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.className = "quantityadd";
                quantityInput.value = item.quantity;
                quantityInput.oninput = (event) => updateQuantity(index, event.target.value);

                const plusButton = document.createElement("button");
                plusButton.textContent = "+";
                plusButton.className = "plus";
                plusButton.onclick = () => updateQuantity(index, item.quantity + 1);

                quantityGrid.appendChild(minusButton);
                quantityGrid.appendChild(quantityInput);
                quantityGrid.appendChild(plusButton);
quantityGrid.className = "flex";
                productClone.appendChild(quantityGrid);

                listItem.appendChild(productClone);
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove from Cart";
                removeButton.className = "remove";
                removeButton.onclick = () => removeFromCart(index);
                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
                total += item.price * item.quantity;
            });

          cartTotal.textContent = parseInt(total);
            updateCartDetails();
        }

        function updateQuantity(index, newQuantity) {
            const parsedQuantity = parseInt(newQuantity);
            if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
                cart[index].quantity = parsedQuantity;
                updateCart();
            }
        }

        function updateCartDetails() {
            roomDetails = cart.map(item => {
                return {
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                };
            });
        }


