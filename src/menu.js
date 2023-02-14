import coffee from "./img/coffee.jpg";
import croissant from "./img/croissant.jpg";
import pancake from "./img/pancake.jpg";
import sandwich from "./img/sandwich.jpg";
import egg from "./img/egg.jpg";
import milkshake from "./img/milkshake.jpg";

const menu = () => {

    // elements
    const menu_list = document.createElement("ul");
    addItem(coffee, "Coffee", menu_list);
    addItem(croissant, "Croissant", menu_list);
    addItem(pancake, "Pancake", menu_list);
    addItem(sandwich, "Sandwich", menu_list);
    addItem(egg, "Bread with egg", menu_list);
    addItem(milkshake, "Milkshake", menu_list);

    menu_list.setAttribute("id", "tab-content");
    menu_list.classList.add("menu");

    return menu_list;

}

function addItem(source, alt, container) {
    const item = document.createElement("li");
    
    const img = new Image();
    img.src = source;
    img.alt = alt;

    item.appendChild(img);
    container.appendChild(item);
}

export default menu;