class Stone{
    constructor() {

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       this.body=Bodies.circle(100,100,20)
       this.radius=20
        World.add(world,this.body);


      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        circle(100,100,20);
        pop();

      }
}