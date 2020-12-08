var a,b;
function setup() {
  createCanvas(1200,800);
  a = createSprite(200,200,60,30);
  b = createSprite(300,400, 70,80);
  a.shapeColor = ("red");
  b.shapeColor = ("red");
}

function draw() {
  background(255,255,255);
  a.x = mouseX;
  a.y = mouseY;
  console.log(a.x - b.x) 
  if(a.x - b.x < 68 && b.x - a.x < 66){
    a.shapeColor = ("blue");
    b.shapeColor = ("blue");
  }
  else{
    a.shapeColor = ("red");
    b.shapeColor = ("red");
  }
  drawSprites();
}