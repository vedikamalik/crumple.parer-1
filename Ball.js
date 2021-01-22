class Ball{
    constructor(x,y,radius){
    var options= {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:2
     }
          
    this.body = Bodies.circle(x,y,radius/2,options);
    this.image = loadImage("paper.png");
    this.x = x;
    this.y = y;
    this.radius = radius/2;
    World.add(world,this.body);
    }

    display(){
       var pos  = this.body.position;
       push ();
       translate(pos.x, pos.y);
       fill ("deepPink")
       image(this.image,this.x,this.y);
       ellipseMode(RADIUS);
       ellipse(0,0, this.radius, this.radius);
       pop ();
        
    }
}