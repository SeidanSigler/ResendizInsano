
const cartItemsContainer = document.getElementById('cart-items');


const cart = JSON.parse(localStorage.getItem('cart')) || [];


if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
} else {
    // Muestra los artículos en el carrito
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        // Aquí puedes añadir la imagen del producto si la tienes
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
        `;
        
        cartItemsContainer.appendChild(itemDiv);
    });
}

// Manejo del botón de proceder al pago
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Procediendo al pago...');
});