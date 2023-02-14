const contact = () => {

    // elements
    const container = document.createElement("div");
    const description = document.createElement("p");
    description.textContent = "Well, this is a fake restaurant, so you can't contact it. But you can see the images sources:";

    container.setAttribute("id", "tab-content");
    container.classList.add("contact-container");

    container.appendChild(description);
    addSource(container, "background", "author", "#", "#");
    addSource(container, "img1", "author", "#", "#");
    addSource(container, "img2", "author", "#", "#");
    addSource(container, "img3", "author", "#", "#");
    addSource(container, "img4", "author", "#", "#");
    addSource(container, "img5", "author", "#", "#");
    addSource(container, "img6", "author", "#", "#");

    return container;
    
}

function addSource(container, title, author, link, authorLink) {

    const imgTitle = document.createElement("p");
    imgTitle.textContent = title;

    const linkContainer = document.createElement("p");
    linkContainer.innerHTML = `Photo by <a href="${authorLink}">${author}</a> from <a href="${link}">Unsplash</a>`;

    container.appendChild(imgTitle);
    container.appendChild(linkContainer);
}

export default contact;