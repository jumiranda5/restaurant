const menu = () => {

    // elements
    const menu_list = document.createElement("ul");
    addItem("Item 1", menu_list);
    addItem("Item 2", menu_list);
    addItem("Item 3", menu_list);
    addItem("Item 4", menu_list);
    addItem("Item 5", menu_list);
    addItem("Item 6", menu_list);

    menu_list.setAttribute("id", "tab-content");

    return menu_list;

}

function addItem(name, container) {
    const item = document.createElement("li");
    item.textContent = name;
    container.appendChild(item);
}

export default menu;