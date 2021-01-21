class Rock{
    constructor(x,y,width,height){
        var options = {
            friction:1.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options)      
        
        World.add(ourWorld,this.body);
        this.width = width;
        this.height = height;
        
        //console.log(this.body);
        this.image = loadImage("images/rock.png");
        this.image = loadImage("images/rock1.png");

    }

    display(){
    
    
        //console.log(this.body.position)

        imageMode(CENTER)
        image(this.image,this.body.position.x , this.body.position.y , this.width , this.height)

    }
    


}
