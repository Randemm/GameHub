const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const checkoutButton = document
  .querySelector(".checkout")
  .addEventListener("click", deleteCartList);

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartContainer.innerHTML += `<div class="cart-item">
        <img src ="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
        <h4>${cartElement.name}</h4>
        <p class="cartprice">$${cartElement.price}</p>
    </div>
`;
});
totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;

function deleteCartList() {
  window.localStorage.removeItem("cartList");
  window.location.replace("complete.html");
}
