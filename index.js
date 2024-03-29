const nGridShow = document.querySelector("#nGrids-show");
const nGridInput = document.querySelector("#nGrids");
let nGridPerSide = nGridInput.value;
const paintArea = document.querySelector(".paint-area");

initilizeGridArea();

nGridInput.addEventListener("input", (e) => {
    nGridShow.textContent = e.target.value;
    nGridPerSide = nGridInput.value;
    paintArea.replaceChildren();
    initilizeGridArea();
});

function initilizeGridArea() {
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
    });
}
