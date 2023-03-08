// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// Display products in grid format
const productsContainer = document.getElementById("products-container");
for (const product of products) {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price} USD</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
    <button onclick="removeToCart(${product.id})">Remove From Cart</button>

  `;
  productsContainer.appendChild(productDiv);
}

// Add product to cart and store in local storage
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const productInCart = cartItems.find(product => product.id === productId);
  if (productInCart) {
    alert('Product already in cart!');
    return;
  }
  else{
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
 
}

// Display cart summary in console
function displayCartSummary() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log("Cart Summary:");
  for (const item of cartItems) {
    console.log(`${item.name} - ${item.price} USD`);
  }
}

function removeToCart(productId){

  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const productInCart = cartItems.find(product => product.id === productId);
  localStorage.removeItem("cartItems");
  alert("remove succesfully");

}