const cart = [];
const cartCount = document.getElementById('cart-count');

// Agrega un evento de clic a cada botón "Agregar al carrito"
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function () {
        // Obtiene el producto al que pertenece el botón
        const product = this.parentElement;
        const productName = product.querySelector('h3').innerText; // Nombre del producto
        const productPrice = product.querySelector('p').innerText; // Precio del producto
        const productImage = product.querySelector('img').src; // Imagen del producto

        // Agrega el producto al carrito
        cart.push({ name: productName, price: productPrice, image: productImage });

        // Actualiza el contador de artículos en el carrito
        cartCount.innerText = cart.length;

        // Almacena el carrito en el almacenamiento local
        localStorage.setItem('cart', JSON.stringify(cart));

        // Muestra un mensaje de alerta
        alert(`${productName} ha sido agregado al carrito.`);
    });
});

// Agrega un evento de clic al ícono del carrito
document.getElementById('cart-icon').addEventListener('click', function () {
    // Redirige a la página del carrito
    window.location.href = 'carrito.html';
});