import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.name;

        const container = document.querySelector(".detail-container");

        container.innerHTML = `<h1>${details.title}</h1>
                            <p>${details.description}</p>
                            <img src="${details.image.formats.large.url}"/>
                            <button class="add-to-cart">Add to cart</button>`;

        console.log(details);
    } catch (error) {
        displayMessage("error", error, ".detail-container");
    }
})();