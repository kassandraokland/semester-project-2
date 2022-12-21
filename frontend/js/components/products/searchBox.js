import { baseUrl } from "../../settings/api.js";

const productContainer = document.querySelector(".product-container");
const search = document.querySelector(".search");

let productsToRender = baseUrl + "products";

function renderProducts() {
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                    </div>`;
    });
}

renderProducts();


search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
        if (product.title.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });

    productsToRender = filteredProducts;

    renderProducts();
};