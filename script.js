

document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    const cartElement = document.getElementById("cart");

    function updateCart() {

        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        if (cart.length > 0) {
            cartElement.innerHTML = `
                <ul>
                    ${cart.map(item => `<li>${item.name} - ${item.quantity} x ${item.price} kr</li>`).join('')}
                </ul>
                <p>Total: ${totalPrice} kr</p>
            `;
        } else {
            cartElement.innerHTML = 'Cart is empty';
        }
    }

    function addItemToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
        
            existingItem.quantity++;
        } else {
    
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();
    }

    const buyButtons = document.querySelectorAll("button");
    buyButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {

            const productName = button.parentElement.querySelector("h2").innerText;
            const productPrice = parseFloat(button.parentElement.querySelector("p").innerText);
            addItemToCart(productName, productPrice);
        });
    });
});
