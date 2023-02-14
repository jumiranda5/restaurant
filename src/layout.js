import home from "./home";

function initLayout() {

    const content = document.getElementById('content');

    // header
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "The Cafe";

    // Nav
    const nav = document.createElement("ul");
    createNavItem("Home", nav);
    createNavItem("Menu", nav);
    createNavItem("Contact", nav);

    header.appendChild(title);
    header.appendChild(nav);
    content.appendChild(header);

    content.appendChild(home());

}

function createNavItem(name, nav_container) {
    const item = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.setAttribute("type", "button");
    item.appendChild(btn);
    nav_container.appendChild(item);
}

export default initLayout