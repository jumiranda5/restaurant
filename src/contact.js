const contact = () => {

    // elements
    const container = document.createElement("div");
    const description = document.createElement("p");
    description.textContent = "Well, this is a fake restaurant, so you can't contact it. But you can see the images sources:";

    container.setAttribute("id", "tab-content");
    container.classList.add("contact-container");

    container.appendChild(description);
    addSource(
        container, 
        "Background", 
        "Mihai Moisa", 
        "https://unsplash.com/pt-br/fotografias/Djtc1T38-GY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/@moisamihai092?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Coffee", 
        "Jeremy Yap", 
        "https://unsplash.com/pt-br/fotografias/jn-HaGWe4yw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/es/@jeremyyappy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Croissant", 
        "Kobby Mendez", 
        "https://unsplash.com/pt-br/fotografias/iyM-XTsTiek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/@kobbymendez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Pancake", 
        "Joshua Ryder", 
        "https://unsplash.com/pt-br/fotografias/y4K7Ydp2z3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/@photos_by_ryder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Sandwich",
        "Eiliv Aceron",
        "https://unsplash.com/pt-br/fotografias/mAQZ3X_8_l0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "https://unsplash.com/pt-br/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Bread with egg", 
        "Ben Kolde", 
        "https://unsplash.com/pt-br/fotografias/FFqNATH27EM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/ja/@benkolde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );
    addSource(
        container, 
        "Milkshake", 
        "Jonathan Borba", 
        "https://unsplash.com/pt-br/fotografias/7TeR1A1MUpM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    );

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