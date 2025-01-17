function Snake(){
  //蛇头位置
  this.x = 0;
  this.y = 0;
  //🐍移动的初始速度和方向
  this.xspeed = 1; //向右
  this.yspeed = 0; //原地不动
  //🐍的总长度
  this.total = 0;
  //存储尾巴的位置，方便后续添加
  this.tail = [];

  //吃食物，吃到返回true， 没吃到返回false
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y); //🐍和食物的相对距离
    
    if(d < 1){
      this.total++; //吃到食物，长度增加
      return true;
    }else{
      return false;
    }
  }

  //改变移动的方向
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  //吃到自身，触发游戏重新开始的提示
  this.death = function(){
    for(var i=0; i<this.tail.length; i++){
      var pos = this.tail[i]; //蛇身位置
      var d = dist(this.x, this.y, pos.x, pos.y); //蛇头和蛇身的位置
      //咬到自身，触发清零操作
      if(d < 1){
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  this.update = function(){
    //吃到食物后就添加到队列尾
    for(var i=0; i<this.tail.length-1; i++){
      this.tail[i] = this.tail[i+1]; //shift蛇身，留出空位
    }
    
    if(this.total >= 1){
      this.tail[this.total-1] = createVector(this.x, this.y);
    }
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    // 检查是否撞到边框
    if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height) {
        console.log('Game Over!'); // 输出游戏结束信息
        this.total = 0;            // 重置蛇的长度
        this.tail = [];            // 清空尾部
        this.x = 0;                // 重置蛇头位置
        this.y = 0;
        this.xspeed = 1;           // 重置方向
        this.yspeed = 0;
    }
    
    //设定移动的范围，避免出界
    //this.x = constrain(this.x, 0, width-scl);
    //this.y = constrain(this.y, 0, height-scl);
  }
  
  this.show = function(){
    fill(255);
    for(var i=0; i<this.tail.length-1; i++){
        rect(this.tail[i].x, this.tail[i].y, scl, scl); //scl为蛇的大小，也就是元方格的大小
      }
    rect(this.x, this.y, scl, scl); //生成蛇头
  }
}
