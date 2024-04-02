const nGridShow = document.querySelector("#nGrids-show");
const nGridInput = document.querySelector("#nGrids");
let nGridPerSide = nGridInput.value;
const paintArea = document.querySelector(".paint-area");
let drawToggle = false;

initilizeGridArea();

nGridInput.addEventListener("input", (e) => {
    nGridShow.textContent = e.target.value;
    nGridPerSide = nGridInput.value;
    paintArea.replaceChildren();
    initilizeGridArea();
    drawToggle = false;
    updateInstruction();
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
}

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    document.querySelectorAll(".grid").forEach((eachGrid) => { eachGrid.style.backgroundColor = "white"; });
    drawToggle = false;
    updateInstruction();
});

let paintColor = "black";
document.querySelector("#paint-color").addEventListener("input", (e)=>{
    paintColor = e.target.value;
    console.log(paintColor);
})

document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
        drawToggle = !drawToggle;
        updateInstruction();
        document.querySelectorAll(".grid").forEach((eachGrid) => {
            eachGrid.addEventListener("mouseover", () => {if (drawToggle) { eachGrid.style.backgroundColor = paintColor; }});
        });
    }
})

function updateInstruction() {
    document.querySelector("#instruction").textContent = drawToggle ? "stop" : "start";
}
