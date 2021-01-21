class Boggie{
    constructor(x,y,width,height){
        var options = {
            friction:1.0 
        }
        
        console.log("inside Boggie")
        this.body = Bodies.rectangle(x,y,width,height,options)      
        
        World.add(ourWorld,this.body);
        this.width = width;
        this.height = height;
        console.log(this.body);

        this.image = loadImage("images/coach.png");
        console.log(this.body)

        Matter.Body.setMass(this.body , this.body.mass*5);

    }

    display(){
    
    
        //   rectMode(CENTER);
        //   rect(this.body.position.x , this.body.position.y , this.width , this.height);
       // console.log(this.body.position)

        imageMode(CENTER)
        image(this.image,this.body.position.x , this.body.position.y , this.width , this.height)


    }
    
}