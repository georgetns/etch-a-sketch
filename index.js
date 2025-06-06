const body = document.querySelector("body");
let i = 0;

// Create empty container with specific class
let createContainerRow = () => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(`number${i}`);
    i++;
    return container;
};

// Add requested number of divs to the container
let addDivsToContainer = (container, numberOfColumns) => {
    for (let j = 0; j < numberOfColumns; j++) {
        // Changed 'i' to 'j' to avoid conflict with global 'i'
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        container.appendChild(gridElement);
    }
};

//  Construct container and append to body
let addContainerRow = (numberOfColumns) => {
    const container = createContainerRow();
    addDivsToContainer(container, numberOfColumns);
    body.appendChild(container);
};

let createCanvas = (rowsLength) => {
    for (j = 0; j < rowsLength; j++) {
        addContainerRow(rowsLength);
    }
};

createCanvas(16);
