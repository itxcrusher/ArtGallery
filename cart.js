
// Declare
var cartImage, cartTitle, cartPrice, quantity, subtotal, total, checkout;


// Assign
cartImage = document.getElementById("cart-image").getAttribute('src')
console.log(cartImage)

cartTitle = document.getElementById("cart-title").innerHTML
console.log(cartTitle)

cartPrice = Number(document.getElementById("cart-price").innerHTML)
console.log(cartPrice)

quantity = Number(document.getElementById("quantity").innerHTML)
console.log(quantity)

subtotal = Number(document.getElementById("subtotal").innerHTML)
console.log(subtotal)

total = Number(document.getElementById("total").innerHTML)
console.log(total)


// Calculation
subtotal = quantity * cartPrice
console.log(subtotal)
total = subtotal
console.log(total)