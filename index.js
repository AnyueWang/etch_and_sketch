let nGridPerSide = 16;
const paintArea = document.querySelector(".paint-area");

for (let row = 0; row < nGridPerSide; row++) {
    for (let col = 0; col < nGridPerSide; col++) {
        const aPixel = document.createElement("div");
        const widthInPercentage = 1 / nGridPerSide;

        aPixel.classList.add("grid");
        aPixel.style.width = `${widthInPercentage * 100}%`;
        aPixel.style.height = `${widthInPercentage * 100}%`;

        paintArea.appendChild(aPixel);
    }
}

const btnClear = document.querySelector("#btn-clear");
const grids = document.querySelectorAll(".grid");
btnClear.addEventListener("click", () => {
    grids.forEach((eachGrid) => { eachGrid.style.backgroundColor = "white"; });
});

grids.forEach((eachGrid) => {
    eachGrid.addEventListener("mouseover", () => { eachGrid.style.backgroundColor = "black"; });
})