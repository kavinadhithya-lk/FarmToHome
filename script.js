// Function to add a product to cart
function addToCart(name, price, image) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cartItems.find((item) => item.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cartItems.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${name} added to cart`);
}

// Display items in cart with image
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
                <input type="number" value="${item.quantity}" readonly>
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Update quantity in cart
function updateQuantity(name, change) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const item = cartItems.find((item) => item.name === name);

    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        displayCartItems();
    }
}

// Remove item from cart
function removeFromCart(name) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems = cartItems.filter((item) => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}

// Load cart items on cart page
if (window.location.pathname.endsWith('cart.html')) {
    document.addEventListener('DOMContentLoaded', displayCartItems);
}





