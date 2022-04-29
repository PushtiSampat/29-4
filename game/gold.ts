
class Gold{
    p:Point;
    height:number;
    width:number;
    image:HTMLImageElement;
    //ctx:Context

    constructor(x:number,y:number,height:number,width:number,image:HTMLImageElement){
        this.p.x=x;
        this.p.y=y;
        this.height=height;
        this.width=width;
        this.image=image;
    }
    drawgold(){
        ctx.drawImage(this.image,this.p.x,this.p.y,this.width,this.height)
    }
}