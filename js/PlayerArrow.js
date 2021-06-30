class PlayerArrow {
  constructor(x, y, archerAngle) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      density:1.0,
      friction:1.0
    };
    this.image = loadImage("./assets/pArrow.png");
    this.width = 110;
    this.height = 20;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
  
    World.add(world, this.body);
  }
  shoot(archerAngle){
     var velocity =p5.Vector.fromAngle(archerAngle); 
     velocity.mult(20)
     Matter.Body.setStatic(this.body,false); 
     Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y}); 
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
   pop();
  }
  
}
