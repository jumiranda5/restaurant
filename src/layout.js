import home from "./home";
import menu from "./menu";
import contact from "./contact";

function initLayout() {

    const content = document.getElementById('content');

    // header
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "The Cafe";

    // Nav
    const nav = document.createElement("ul");
    const homeBtn = createNavItem("Home", nav);
    const menuBtn = createNavItem("Menu", nav);
    const contactBtn = createNavItem("Contact", nav);

    // Handle page content display on button click
    homeBtn.addEventListener("click", () => {
        updateContent(homeBtn, home(), content);
        setActive(homeBtn);
    });

    menuBtn.addEventListener("click", () => {
        updateContent(menuBtn, menu(), content);
        setActive(menuBtn);
    });

    contactBtn.addEventListener("click", () => {
        updateContent(contactBtn, contact(), content);
        setActive(contactBtn);
    });

    // Fixed content
    header.appendChild(title);
    header.appendChild(nav);
    content.appendChild(header);

    // Init home page as active
    content.appendChild(home());
    homeBtn.classList.add("active");
}

function createNavItem(name, nav_container) {

    // Create list item and button
    const item = document.createElement("li");
    const btn = document.createElement("button");

    // Set button
    btn.textContent = name;
    btn.setAttribute("type", "button");
    btn.classList.add("nav-btn");

    // Append
    item.appendChild(btn);
    nav_container.appendChild(item);

    return btn;

}

function updateContent(btn, page, content) {

    if (!btn.classList.contains("active")) {
        const container = document.getElementById("tab-content");
        container.remove();
        content.appendChild(page);
    }

}

function setActive(btn) {
    const navButtons = document.querySelectorAll(".nav-btn");

    for (let i = 0; i < navButtons.length; i++) {
        if (navButtons[i] !== btn) {
            navButtons[i].classList.remove("active");
        } 
    }

    btn.classList.add("active");
}

export default initLayout