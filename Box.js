class Block{ 
  constructor(x,y,w,h){
  this.body =Bodies. rectangle (x,y,w,h) 
  this.width=w
  this.height=h;
  this.Visiblity = 255;
  World.add(world,this.body)
  }  
  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
    score++;
    }
  }
  display(){
    
    if(this.body.speed < 3){
      var angle=this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);
      rectMode(CENTER);
      fill("blue")
      rect(0,0,this.width,this.height);
     pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
      //  tint(255,this.Visiblity);
      //  image(this.rect, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
      
      
  }    
  }
