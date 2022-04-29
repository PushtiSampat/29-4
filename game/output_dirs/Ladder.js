class Ladder {
    constructor(canvas, ctx, startpt, image) {
        this.planks = [];
        this.p = startpt;
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = image;
        this.height = this.image.height;
        this.width = this.image.width;
        this.top = 0;
    }
    draw() {
        this.ctx.drawImage(this.image, this.p.x, this.p.y, this.width, this.height);
    }
    isinside(pt, plank) {
        let offset = 10;
        let ladderPoint = this.correctPositions[this.top];
        if ((pt.x >= ladderPoint.x - offset && pt.x <= ladderPoint.x + plank.width + offset) && (pt.y >= ladderPoint.y - offset && pt.y <= ladderPoint.y + plank.height + offset)) {
            return true;
        }
    }
    isInsideAnyposition(pt, plank) {
        let offset = 10;
        for (let i = 0; i < this.correctPositions.length; i++) {
            let ladderPoint = this.correctPositions[i];
            if ((pt.x >= ladderPoint.x - offset && pt.x <= ladderPoint.x + plank.width + offset) && (pt.y >= ladderPoint.y - offset && pt.y <= ladderPoint.y + plank.height + offset)) {
                return true;
            }
        }
        return false;
    }
    isTopPlank(plank) {
        if (this.planks[this.top - 1] == plank)
            return true;
        return false;
    }
    push(plank) {
        this.planks.push(plank);
    }
    pop() {
        this.planks.pop();
    }
}
//# sourceMappingURL=Ladder.js.map