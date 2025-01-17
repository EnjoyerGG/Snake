//2025.01.17
//learn form https://www.youtube.com/watch?v=AaGK-fj-BAM&list=PLRqwX-V7Uu6aRpfixWba8ZF6tJnZy5Mfw

var s;
var scl = 20; //蛇的大小，元方格的大小
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10); //帧率
  pickLocation();
}

//随机分布食物的位置，并要求食物的大小和蛇的大小一致
function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl); //将每个向量分量乘以scl
}

//用于debug
/**
  function mousePressed(){
  s.total++;
}
**/

function draw() {
  background(50);
  
  if(s.eat(food)){
    pickLocation();
  }
  s.death(); //判断是否吃到自身
  s.update(); //吃到食物则长度增加
  s.show();

  //给食物上色
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

//用键盘控制蛇的移动方向
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

