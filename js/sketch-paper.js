class Paper {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    mark(image, position) {
        this.ctx.putImageData(image, position.x, position.y);
    }
}
