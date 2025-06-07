const gridContainer = document.querySelector("#grid-container");

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        r().toFixed(1) +
        ")"
    );
}
// Create empty container with specific class
const createContainerRow = (index) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(`number${index}`);
    return container;
};

// Add requested number of divs to the container
const addDivsToContainer = (container, numberOfColumns) => {
    for (let j = 0; j < numberOfColumns; j++) {
        // Changed 'i' to 'j' to avoid conflict with global 'i'
        const gridElement = document.createElement("div");
        gridElement.addEventListener(
            "mouseenter",
            (e) => {
                e.preventDefault();
                gridElement.style.backgroundColor = random_rgba();
            },
            { once: true }
        );
        // gridElement.addEventListener("mouseleave", (e) => {
        //     gridElement.classList.remove("background-on");
        // });
        gridElement.classList.add("grid-element");
        container.appendChild(gridElement);
    }
};

//  Construct container and append to body
const addContainerRow = (index, numberOfColumns) => {
    const container = createContainerRow(index);
    addDivsToContainer(container, numberOfColumns);
    gridContainer.appendChild(container);
};

// Create canvas NxN size
const createCanvas = (rowsLength) => {
    for (j = 0; j < rowsLength; j++) {
        addContainerRow(j, rowsLength);
    }
};

const clearCanvas = () => {
    gridContainer.innerHTML = "";
    console.log(`gridContainer inner html is: ${gridContainer.innerHTML} `);
};

document.querySelector(".btn").addEventListener("click", () => {
    const size = prompt("Enter number of rows and columns - max 100");
    console.log(`size is: ${size}`);
    if (Number.isInteger(Number(size)) && size <= 100) {
        console.log(`size passed`);
        clearCanvas();
        createCanvas(size);
    }
});
