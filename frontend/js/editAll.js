import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";

createMenu(); 


const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product" href="edit-product.html?id=${product.id}">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        <img src="${product.image.formats.large.url}" />
                                    </a>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();