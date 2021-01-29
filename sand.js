class Sand{
    constructor(x,y,diameter){
        var options={
            restitution:1.3,
            friction:5,
            density:1.
        }
        this.body=Bodies.circle(x,y,diameter,options)
        this.diameter=diameter
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(0,0,this.diameter)
    }
    
}