class Target{
    constructor(x,y){
    
       var options={
          'restitution':0.2,
          'friction':1.0,
          'density':1.0

       }
     this.body=Bodies.rectangle(x,y,50,50)
     this.width=50
     this.height=50

     World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        RectMode(CENTER);
        image( 0, 0, this.width, this.height);
        pop();

    }
}