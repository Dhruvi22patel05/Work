
const products =[
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const productsContainer = document.getElementById("products-container");
for (const product of products) {
  

  const productDiv = document.createElement("div");
  productDiv.setAttribute("class","col-sm-12 col-md-6 col-lg-4");
  productDiv.innerHTML = `
 
  <div class="card ms-3" style="width: 25rem;">
  <img class="card-img-top" src="./images.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">`+product.name+`</h5>
    <h5 class="card-title">`+product.price+`Rs</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolores.</p>
    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    <button class="btn btn-primary" onclick="removeToCart(${product.id})">Remove From Cart</button>
  </div>
</div>`

  
  productsContainer.appendChild(productDiv);
}


function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  let cartItems = JSON.parse(localStorage.getItem(productId)) || [];
    cartItems.push(product);
    localStorage.setItem(productId, JSON.stringify(cartItems));
    alert("Added Succesfully");
 
}

function displayCartSummary() {
  console.log("Cart Summary:");
for (let i=0; i < localStorage.length; i++){
  var KeyName = window.localStorage.key(i);
  const cartItems = JSON.parse(localStorage.getItem(KeyName)) || [];
for (const item of cartItems) {
    console.log(`${item.name} - ${item.price} Rs`);
  }
}
}


function removeToCart(productId){

  localStorage.removeItem(productId);
  alert("remove succesfully");

}