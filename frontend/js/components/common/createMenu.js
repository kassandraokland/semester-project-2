import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Product</a>
                    <a href="edit-all.html" class="${pathname === "/edit-all.html" ? "active" : ""}">Edit Products</a>
                    <button id="logout">Logout ${username}</button>`;
    }

    console.log(username);

    container.innerHTML = `<div class="menu">
                                <!--<a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Admin Panel</a>-->
                                ${authLink}
                        </div>`;

    logoutButton();
}