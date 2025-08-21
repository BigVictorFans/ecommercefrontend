export function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item._id === product._id);

    if (existingItem) {
        // increment quantity
        existingItem.quantity += 1;
    } else {
        // add new product with quantity = 1
        cart.push({ ...product, quantity: 1 });
    }
    updateCart(cart);
    return true;
}

export function updateCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}