let cart = [];

function addToCart(name, price) {
    const item = { name, price, quantity: 1 };
    cart.push(item);
    alert(`${name} added to cart!`);
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    let cartTotal = document.getElementById('cartTotal');
    if (cartItems) cartItems.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    if (cartTotal) cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
