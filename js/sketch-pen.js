class Pen {
    constructor(paper, r, g, b, a, size) {
        this.position = {x: 10, y: 10};
        this.colour = {r: parseInt(r), g: parseInt(g), b: parseInt(b), a: parseInt(a)};
        this.size = parseInt(size);
        this.state = false;
        this.paper = paper;
        this.image = paper.ctx.createImageData(this.size, this.size);
        this.makeBrush();
    }
    makeBrush() {
        for(let pixel = 0; pixel < this.size * this.size; pixel += 1) {
            let index = pixel * 4;
            this.image.data[index+0] = this.colour.r;
            this.image.data[index+1] = this.colour.g;
            this.image.data[index+2] = this.colour.b;
            this.image.data[index+3] = this.colour.a;
        }
    }
    up() {
        this.state = false;
    }
    down() {
        this.state = true;
    }
    draw() {
        if(this.state) {
            this.paper.mark(this.image, this.position);
        }
    }
}
