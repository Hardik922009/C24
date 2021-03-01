class Log{

    constructor(x,y,height,angle){  
      
        var op={
            restitution: 0.8,
            density:1,
            friction: 1
        }

     this.body= Bodies.rectangle(x,y,20,height,op);
     Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
      this.width=20;
      this.height=height;
    }

    display(){
        push ();
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("black")
        rect(0,0,this.width,this.height)
        pop ();
    }



}