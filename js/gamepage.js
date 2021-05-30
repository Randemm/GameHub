import { productArray } from "./constants/productList.js";

const gameTitle = document.querySelector(".game-title");
const gameDescription = document.querySelector(".game-description");
const gameImage = document.querySelector(".image-container");
const gameVideo = document.querySelector(".youtube-embed");
const gamePrice = document.querySelector(".price-arial");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

console.log(productId);

productArray.forEach((product) => {
  if (product.id === productId) {
    gameTitle.innerHTML += `${product.name}`;
    gameDescription.innerHTML += `${product.description}`;
    gamePrice.innerHTML += `${product.price}`;
    gameImage.innerHTML += `<img src="${product.image}" alt="${product.name}" class="gamecover"/>`;
    gameVideo.innerHTML += `
    <iframe
        title="Cyberpunk 2077 Teaser trailer."
        src="${product.video}"
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
`;
  }
});
