const body = document.querySelector("body");

// Create empty container with specific class
const createContainerRow = (index) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(`number${index}`);
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
let addContainerRow = (index, numberOfColumns) => {
    const container = createContainerRow(index);
    addDivsToContainer(container, numberOfColumns);
    body.appendChild(container);
};

// Create canvas NxN size
let createCanvas = (rowsLength) => {
    for (j = 0; j < rowsLength; j++) {
        addContainerRow(j, rowsLength);
    }
};

createCanvas(16);
