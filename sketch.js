//2025.01.17
//learn form https://www.youtube.com/watch?v=AaGK-fj-BAM&list=PLRqwX-V7Uu6aRpfixWba8ZF6tJnZy5Mfw

var s;
var scl = 20; //scale
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10); //帧率
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed(){
  s.total++;
}

function draw() {
  background(50);
  
  if(s.eat(food)){
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }else{
    s.dir(1, 0);
  }
}

