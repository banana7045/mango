class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){   
        this.sling.bodyA = null;
    }
    attach(b){
    this.sling.bodyA=b
    }
    display(){    
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    
}