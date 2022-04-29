class Ladder{
    p:Point;
    height:number;
    width:number;
    image:HTMLImageElement;
    canvas:HTMLCanvasElement
    ctx :CanvasRenderingContext2D
    top:number;
    correctPositions:Point[];
    planks:Plank[]=[];
    
    constructor(canvas:HTMLCanvasElement,
        ctx :CanvasRenderingContext2D,
        startpt:Point,image:HTMLImageElement){
        
        this.p=startpt;
       
        this.canvas=canvas
        this.ctx=ctx
        this.image=image;

        this.height=this.image.height;
        this.width=this.image.width;
        this.top=0;
    }
    draw(){
        this.ctx.drawImage(this.image,this.p.x,this.p.y,this.width,this.height)
    }


    isinside(pt:Point,plank:Plank){
       let offset=10;
        let ladderPoint=this.correctPositions[this.top];
    
        if((pt.x>=ladderPoint.x-offset && pt.x<=ladderPoint.x+plank.width+offset) && (pt.y>=ladderPoint.y-offset && pt.y<=ladderPoint.y+plank.height+offset)){
           return true;
        }
    }

    isInsideAnyposition(pt:Point,plank:Plank){
        let offset=10;
      
        for(let i=0;i<this.correctPositions.length;i++){
            let ladderPoint=this.correctPositions[i];
            if((pt.x>=ladderPoint.x-offset && pt.x<=ladderPoint.x+plank.width+offset) && (pt.y>=ladderPoint.y-offset && pt.y<=ladderPoint.y+plank.height+offset)){
                return true;
            }
        }
      return false;
    }

    isTopPlank(plank:Plank){
        if(this.planks[this.top-1]==plank)
            return true;
        return false;
    }
    push(plank:Plank){
        this.planks.push(plank);
    }
    pop(){
        this.planks.pop();
    }
}