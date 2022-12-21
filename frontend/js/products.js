import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        <img src="${product.image.formats.small.url}" />
                                    </a>`;
        });

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();