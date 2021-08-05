class Pig extends BaseClass
{
    constructor(x, y)
    {
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png" );
    }
diaplay()
{
    console.log(this.body.speed);
    if(this.body.speed < 2)
    {
        super.display();
    }
    else
    {
        World.remove(myWorld, this.body);
    }
    
}
  
};
