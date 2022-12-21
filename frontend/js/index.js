import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const heroBanner = document.querySelector(".hero-banner");
const productsUrl = baseUrl + "products";

(async function () {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        heroBanner.innerHTML = "";

        json.forEach(function (product) {
            heroBanner.innerHTML += `<img src="${product.image.formats.large.url}" height="300px" length="100px"/>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".hero-banner");
    }
})();

const arrows = document.getElementsByClassName("arrowhead");
const featuredProducts = document.getElementsByClassName("featured-products");
var l = 0;

console.log(featuredProducts);
console.log(arrows);


arrows[1].onclick = () => {
  l++;
  for(var i of featuredProducts) {
    if (l==0) {
      i.style.left = "0px";
    }
    if (l==1) {
      i.style.left = "-100%";
    }
    if (l==2) {
      i.style.left = "-200%";
    }
    if (l==3) {
      i.style.left = "-300%";
    }
    if (l==4) {
      i.style.left = "-400%";
    }
    if (l>4) {
      break;
    }
  }
}

arrows[0].onclick = function () {
  l--;
  for(var i of featuredProducts) {
    if (l==0) {
      i.style.left = "0px";
    }
    if (l==1) {
      i.style.left = "-100%";
    }
    if (l==2) {
      i.style.left = "-200%";
    }
    if (l==3) {
      i.style.left = "-300%";
    }
    if (l==4) {
      i.style.left = "-400%";
    }
    if (l>4) {
      break;
    }
  }
}