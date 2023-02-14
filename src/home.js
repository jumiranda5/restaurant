const home = () => {

    // elements
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const opening_hours = document.createElement("p");
    const address = document.createElement("p");

    title.textContent = "Cafe and espresso bar.";
    description.textContent = "A great place to start your day, have a break or have a conversation.";
    opening_hours.innerHTML = "Open from Monday to Saturday,<br>from 6am to 20pm.";
    address.textContent = "Cafeteria Street, 404 - Nowhere"; 

    container.setAttribute("id", "tab-content");
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(opening_hours);
    container.appendChild(address);

    return container;
}

export default home;