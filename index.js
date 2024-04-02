const nGridShow = document.querySelector("#nGrids-show");
const nGridInput = document.querySelector("#nGrids");
const paintArea = document.querySelector(".paint-area");
const btnClear = document.querySelector("#btn-clear");
const btnRandomColor = document.querySelector("#random-color");
const inputPaintColor = document.querySelector("#paint-color");
const btnProDarken = document.querySelector("#pro-darken");
let nGridPerSide = nGridInput.value;
let drawToggle = false;
let paintColor = "black";
let randomColorToggle = false;
let proDarkenToggle = false;

initilizeGridArea();

nGridInput.addEventListener("input", (e) => {
    nGridShow.textContent = e.target.value;
    nGridPerSide = nGridInput.value;
    paintArea.replaceChildren();
    initilizeGridArea();
    drawToggle = false;
    updateInstruction();
});

btnClear.addEventListener("click", () => {
    document.querySelectorAll(".grid").forEach((eachGrid) => { eachGrid.style.backgroundColor = "white"; });
    drawToggle = false;
    updateInstruction();
});

inputPaintColor.addEventListener("input", (e) => {
    paintColor = e.target.value;
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
                if (proDarkenToggle && eachGrid.style.opacity !== 1) {
                    eachGrid.style.opacity = Math.min(eachGrid.style.opacity * 1.1, 1);
                } else {
                    eachGrid.style.opacity = 1;
                }
            });
        });
    }
});

btnRandomColor.addEventListener("click", () => {
    randomColorToggle = !randomColorToggle;
    if (randomColorToggle) {
        btnRandomColor.style.backgroundColor = "#A391A5";
        inputPaintColor.setAttribute("disabled", "");
    } else {
        btnRandomColor.style.backgroundColor = "#577A71";
        inputPaintColor.removeAttribute("disabled");
    }
})

btnProDarken.addEventListener("click", () => {
    proDarkenToggle = !proDarkenToggle;
    if (proDarkenToggle) {
        btnProDarken.style.backgroundColor = "#A391A5";
    } else {
        btnProDarken.style.backgroundColor = "#577A71";
    }
})

function initilizeGridArea() {
    for (let row = 0; row < nGridPerSide; row++) {
        for (let col = 0; col < nGridPerSide; col++) {
            const aPixel = document.createElement("div");
            const widthInPercentage = 1 / nGridPerSide;
            aPixel.classList.add("grid");
            aPixel.style.width = `${widthInPercentage * 100}%`;
            aPixel.style.height = `${widthInPercentage * 100}%`;
            aPixel.style.opacity = 0.3855;
            paintArea.appendChild(aPixel);
        }
    }
}

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

