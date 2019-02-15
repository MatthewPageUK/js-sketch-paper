const canvas = document.getElementById("paper");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paper = new Paper(canvas);
const colour = document.getElementById("colour");
const size = document.getElementById("size");

let currentPen = makePen();

document.querySelectorAll("select").forEach((s)=> {
    s.addEventListener("change", ()=> {
        currentPen = makePen();
    });
});

canvas.addEventListener("mousedown", ()=> {
    currentPen.down();
});
canvas.addEventListener("mouseup", ()=> {
    currentPen.up();
});
canvas.addEventListener("mousemove", (e)=> {
    currentPen.position = {x: e.clientX, y: e.clientY};
});

function makePen() {
    return new Pen(paper, colour.value.split(",")[0], colour.value.split(",")[1],
                          colour.value.split(",")[2], 255, size.value);
}

function draw() {
    currentPen.draw();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
