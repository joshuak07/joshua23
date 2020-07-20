class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.1,
        'friction':1.3,
        'density':1.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
    push ();
    angleMode(RADIANS)
    rotate (angle);
    translate (pos.x,pos.y)
    rectMode(CENTER);
    fill(255);
    rect(0,0 ,this.width, this.height);
    pop();
  }
};
