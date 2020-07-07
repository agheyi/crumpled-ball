class Trash
{
    constructor()
    {
        this.redBody1 = Bodies.rectangle(width/2, 630, 200, 20, {isStatic:true});
        this.redBody2 = Bodies.rectangle(width/2 + 110, 570, 20, 100, {isStatic:true});
        this.redBody3 = Bodies.rectangle(540, 570, 20, 100, {isStatic:true});

        World.add(world, this.redBody1, this.redBody2, this.redBody3);
    }
    display()
    {
        strokeWeight(0)
        fill(127, 0, 128);
        rect(width/2, 610, 200, 20);
        rect(width/2 + 110, 570, 20, 100);
        rect(width/2-100, 570, 20, 100);
    }
}