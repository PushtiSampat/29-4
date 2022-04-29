class Plank {
    constructor(startpt, image) {
        this.p = startpt;
        this.originalPoints = this.p;
        this.image = image;
        // this.height=this.image.height*0.7;
        // this.width=this.image.width*0.8;
        this.height = 25;
        this.width = 60;
        console.log("w: " + this.width); //60
        console.log("h: " + this.height); //26
        this.status = "outside";
        this.isOnTop = false;
        this.colour = "#ff7e25";
    }
    draw() {
        // ctx.drawImage(this.image,this.p.x,this.p.y,this.width,this.height)
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.p.x, this.p.y, this.width, this.height);
        ctx.fillStyle = "black";
    }
    wrongPlank() {
        this.colour = "red";
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.p.x, this.p.y, this.width, this.height);
        ctx.fillStyle = "black";
        setTimeout(() => {
            this.colour = "#ff7e25";
            ctx.fillStyle = this.colour;
            ctx.fillRect(this.p.x, this.p.y, this.width, this.height);
            ctx.fillStyle = "black";
        }, 2000);
    }
    isinside(pt) {
        if ((pt.x >= this.p.x && pt.x <= this.p.x + this.width) && (pt.y >= this.p.y && pt.y <= this.p.y + this.height)) {
            return true;
        }
    }
}
//# sourceMappingURL=plank.js.map