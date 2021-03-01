class Bird{

    constructor(x,y,width,height){  
      
        var op={
            restitution: 0.5,
            density:1.5,
            friction:1
        }

     this.body= Bodies.rectangle(x,y,50,50,op);
      World.add(world,this.body);
      this.width=50;
      this.height=50;
    }

    display(){
        this.body.position.x= mouseX
        this.body.position.y= mouseY
        
        push ();
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        fill ("red")
        rect(0,0,this.width,this.height)
        pop ();
    }



}