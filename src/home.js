const home = () => {

    // elements
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const opening_hours = document.createElement("p");
    const address = document.createElement("p");

    title.textContent = "Cafe and espresso bar.";
    description.textContent = "A great place to start your day, have a break or have a conversation.";
    opening_hours.innerHTML = "Open from <span>Monday</span> to <span>Saturday</span>,<br>from <span>6am</span> to <span>20pm</span>.";
    address.textContent = "Cafeteria Street, 404 - Nowhere"; 

    container.setAttribute("id", "tab-content");
    container.classList.add("home-container");
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(opening_hours);
    container.appendChild(address);

    return container;
}

export default home;