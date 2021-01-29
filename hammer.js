class Hammer{
    constructor(x,y,width,height,options){
        var options={
            density:2,
            friction:1.0,
            restitution:0.5

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
    }
    display(){
        rectMode(CENTER)
        fill("orange")
        rect(this.x,this.y,this.width,this.height)
    }
}