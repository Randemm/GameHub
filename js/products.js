import { productArray } from "./constants/productList.js";

const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");

let cartArray = [];

const preorderWrap = document.querySelector(".preorders");
const nearlynewWrap = document.querySelector(".nearlyNew");
const bestWrap = document.querySelector(".bestSellers");

var trendingProducts = productArray.filter(
  (product) => product.tag == "Trending"
);

trendingProducts.forEach(function (product) {
  productsContainer.innerHTML += `
    <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <p class="prodname">${product.name}</p>
        <p class="plusprice">with plus</p>
        <div class="product-price">$${product.price}</div>
        <button class="addcart-button" data-product="${product.id}">Add to cart</button>
    </div>
    `;
});

var preorderProducts = productArray.filter(
  (product) => product.tag == "pre-order"
);
preorderProducts.forEach(function (product) {
  preorderWrap.innerHTML += `
  <div class="productwrap">
    <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="phototag">
      <div class="prelabel">PRE-ORDER</div>
      <img src="${product.image}" alt="${product.name}">
    </div>
    <p class="prodname">${product.name}</p>
    <div class="textwrap">
      <span>from</span>
      <div class="arialprice">
        <p>$${product.price}</p>
      <div class="divider"></div>
      </div>
    </div>
  </div>
  `;
});

var nearlyNewProducts = productArray.filter(
  (product) => product.tag == "near-new"
);
nearlyNewProducts.forEach(function (product) {
  nearlynewWrap.innerHTML += `
  <div class="productwrap">
  <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="phototag">
      <img src="${product.image}" alt="${product.name}">
    </div>
  <p class="prodname">${product.name}</p>
    <div class="textwrap">
      <span>from</span>
      <div class="arialprice">
        <p>$${product.price}</p>
      </div>
      <div class="discount">
    <p class="oldprice">$${product.oldPrice}</p>
    <div class="percenttag">${product.decrease}</div>
    </div>
  </div>
  `;
});

var bestProducts = productArray.filter((product) => product.tag == "best");

bestProducts.forEach(function (product) {
  bestWrap.innerHTML += `
  <div class="productwrap">
  <button class="addcart-button2" data-product="${product.id}">Add to cart</button>
    <div class="phototag">
      <img src="${product.image}" alt="${product.name}">
    </div>
  <p class="prodname">${product.name}</p>
    <div class="textwrap">
      <span>from</span>
      <div class="arialprice">
        <p>$${product.price}</p>
    <div class="divider"></div>
  </div>
</div>
  `;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    cartArray.push(event.target.dataset.product);
    const itemToAdd = productArray.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCart(cartArray);
  };
});

function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  cartItems.forEach(function (cartElement) {
    console.log(cartElement);
    cartList.innerHTML += `<div class="cart-item">
          <h4>${cartElement.name}</h4>
        </div>
    `;
  });
}
