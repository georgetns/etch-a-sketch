const body = document.querySelector("body");

// Create empty container with specific class
let createContainer = () => {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
};

// Add requested number of divs to the container
let addDivsToContainer = (container, numberOfDivs) => {
    for (i = 0; i < numberOfDivs; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        container.appendChild(gridElement);
    }
};

//  Create container and append to body
let addContainer = (numberRows) => {
    const container = createContainer();
    addDivsToContainer(container, 16);
    body.appendChild(container);
};

addContainer();
