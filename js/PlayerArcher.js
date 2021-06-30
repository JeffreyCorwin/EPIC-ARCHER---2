class PlayerArcher {
    constructor(x, y, width, height, angle) {
      this.width = width;
      this.height = height;
      this.angle = angle;
      var options={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.image = loadImage("./assets/pArcher.png");


    }
    display() {
      if(keyCode === DOWN_ARROW) {
        if(playerArcher1.body.angle < 1.47){
playerArcher1.body.angle = playerArcher1.body.angle + 0.02;
arrowP.body.angle = arrowP.body.angle + 0.02
      }else{
        playerArcher1.body.angle = playerArcher1.body.angle - 0.02;
        arrowP.body.angle = arrowP.body.angle - 0.02

      }
    }

      if(keyCode === UP_ARROW ){
        if( playerArcher1.body.angle >- 1.47){
        playerArcher1.body.angle = playerArcher1.body.angle - 0.02;
        arrowP.body.angle = arrowP.body.angle - 0.02

         }else{
          playerArcher1.body.angle = playerArcher1.body.angle + 0.02;
          arrowP.body.angle = arrowP.body.angle + 0.02

         }
        }
         var pos = this.body.position;
         var angle = this.body.angle;
    fill("#676e6a");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }


  
  