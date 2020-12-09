class Bob{
    constructor(x,y,radius){
        var option={
           isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = this.radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("yellow");
        ellipse(pos.x,pos.y,this.radius,this.radius);
}
}