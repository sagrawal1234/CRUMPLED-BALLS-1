class Paper{
    constructor(x,y,angle){
        var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2,
        }
       Paper =  Matter.Bodies.circle(200 , 5 , 2 ,[options] );
       World.add(world,Paper);
    }
    
}