class Pig{

    constructor(x,y){  
      
        var op={
            restitution: 0.8,
            density:1,
            friction: 0.3
        }

     this.body= Bodies.rectangle(x,y,50,50,op);
      World.add(world,this.body);
      this.width=50;
      this.height=50;
    }

    display(){
        push ();
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("yellow");
        stroke ("orange")
        strokeWeight (5)
        rect(0,0,this.width,this.height)
        pop ();
    }



}