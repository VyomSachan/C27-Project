class Bob{
    constructor(x, y){
        var options = {
            restitution : 1
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        fill ("lightgreen");
        circle(pos.x, pos.y, this.radius*2);
        pop();
    }
}