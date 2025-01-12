let treeColor=[[31, 69, 41],[244, 224, 175],[231, 204, 204],[53, 95, 46],[154, 166, 178] ,[188, 204, 220],[124, 68, 79],[159, 82, 85],[210, 100, 154],[56, 75, 112],[42, 62, 99],[225, 106, 84]]
let xPos=50, yPos=50

function setup() {
  createCanvas(800, 800);
  background(248, 250, 252);

 }

function draw() {
  noStroke()  
  for(let i=0; i<56; i++){    
    fill(105, 117, 101)
    circle(xPos*i , yPos*i +3, 20)

    fill(170, 185, 154) 
    fill(treeColor[Math.ceil(random(0,10))])   
    circle(xPos*i, yPos*i, 22)
  }
  
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    xPos -=5;
  }
  if(keyCode == RIGHT_ARROW){
    xPos +=5;
  }  
  if(keyCode == UP_ARROW){
    yPos -=5;
  } 
   if(keyCode == DOWN_ARROW){
    yPos +=5;
  }
  if(keyCode == DELETE){
    background(248, 250, 252);
    xPos=50, yPos=50
  }

}
