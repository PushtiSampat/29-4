class Gold {
    //ctx:Context
    constructor(x, y, height, width, image) {
        this.p.x = x;
        this.p.y = y;
        this.height = height;
        this.width = width;
        this.image = image;
    }
    drawgold() {
        ctx.drawImage(this.image, this.p.x, this.p.y, this.width, this.height);
    }
}
//# sourceMappingURL=gold.js.map