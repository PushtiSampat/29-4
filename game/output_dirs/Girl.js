class Girl {
    constructor(image) {
        this.pt = new Point(54, 410);
        this.originalPt = new Point(this.pt.x, this.pt.y);
        this.image = image;
        this.width = this.image.width - 100;
        this.height = this.image.height - 120;
        this.isOnTop = false;
    }
    draw() {
        ctx.drawImage(this.image, this.pt.x, this.pt.y, this.width, this.height);
    }
}
//# sourceMappingURL=Girl.js.map