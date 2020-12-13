class Tree{


    constructor (x,y,width,height){
    
    
    
    this.body = Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    this.image= loadImage("sprites/tree.png");
    World.add(world,this.body)
    
    }
    display(){
    
    var post= this.body.position; 
    rectMode(CENTER);
    fill(255);
    rect(post.x, post.y, this.width, this.height);
    imageMode(CENTER)
    image(this.image,600,550,200,200)
    }
    
    };