class Stone {

    

        constructor(x,y,diameter){
        
            
                this.x=x;
        this.y=y;
        this.diameter=14;
        this.body= Matter.Bodies.circle(x,y,diameter);
        this.diameter=diameter;
        this,image=loadImage("sprites/stone.png");
        World.add(world,this.body);
        
        }
        
        
        display(){
        
            var paperpos=this.body.position;		
        fill ("purple");
                    push()
                    translate(paperpos.x, paperpos.y);
                    rectMode(CENTER)
                    
                    strokeWeight(3);
                    fill(255,0,255)
                    ellipse(0,0,this.diameter, this.diameter);
                    imageMode(CENTER);
                    image(this.image,0,0,100,100);
                    pop()
        }
    }