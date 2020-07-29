class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       if (this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x+100, pointA.y, pointB. x, pointB.y);

          } 
        
    }
    fly(){

  this.chain.bodyA=null;

    }
}