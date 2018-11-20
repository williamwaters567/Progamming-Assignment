function setup() {
  createCanvas(750, 750); 
  noStroke();
  rectMode(CENTER);
}

function draw() {
   background(250);
  fill(250,170,35);    
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(215,130,40);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);

}
    

  
  
    
  