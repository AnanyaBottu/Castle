class Triangle{
    constructor(x,y,sides,radius,options) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
    }
        this.body = Bodies.polygon(x,y,sides,radius,options);
        this.sides=2;
        this.radius=3;
        World.add(world,this.body);
      }
      display(){
        push();
        triangle(this.body.position.x,this.body.position.y,);
        pop();
      }
}