class Thread{
    constructor(body1, pointB){
        var options = {
            bodyA : body1,
            pointB : pointB
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;

        push();
        strokeWeight(3);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}