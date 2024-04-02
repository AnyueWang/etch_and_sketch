const nGridShow = document.querySelector("#nGrids-show");
const nGridInput = document.querySelector("#nGrids");
const paintArea = document.querySelector(".paint-area");
let nGridPerSide = nGridInput.value;
let drawToggle = false;
let paintColor = "black";
let randomColorToggle = false;

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

document.querySelector("#paint-color").addEventListener("input", (e) => {
    paintColor = e.target.value;
    console.log(paintColor);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
        drawToggle = !drawToggle;
        updateInstruction();
        document.querySelectorAll(".grid").forEach((eachGrid) => {
            eachGrid.addEventListener("mouseover", () => {
                if (drawToggle) {
                    eachGrid.style.backgroundColor = randomColorToggle ? randomColorGenerator() : paintColor;
                }
            });
        });
    }
});

document.querySelector("#random-color").addEventListener("click", () => {
    randomColorToggle = !randomColorToggle;
    const btnRandomColor = document.querySelector("#random-color");
    const inputPaintColor = document.querySelector("#paint-color");
    if (randomColorToggle) {
        btnRandomColor.style.backgroundColor = "#A391A5";
        inputPaintColor.setAttribute("disabled", "");
    } else {
        btnRandomColor.style.backgroundColor = "#577A71";
        inputPaintColor.removeAttribute("disabled");
    }
})

function updateInstruction() {
    document.querySelector("#instruction").textContent = drawToggle ? "stop" : "start";
}

function randomColorGenerator() {
    const colorDict = "0123456789ABCDEF";
    let randomColor = "";
    for (let i = 0; i < 6; i++) {
        randomColor += colorDict[Math.floor(Math.random() * 16)];
    }
    return "#" + randomColor;
}

