class Paper
{
    constructor()
    {
        var options = {
            isStatic: false,
            restitution: 1.5, 
            friction: 0.5, 
            density:1.2
        }
        this.paper = Bodies.circle(100, 100, 5, options);
        World.add(world, this.paper);
    }
    display()
    {
        var pos = this.paper.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(255, 0, 0);
        ellipse(pos.x, pos.y, 10);
        pop();
    }
}