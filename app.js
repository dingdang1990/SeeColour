/**
 * Created by Vane_Ever on 16-01-01.
 */
//舞台
var stage = new createjs.Stage("gameView");

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick" , stage);

//容器
var gameView = new createjs.Container();
//添加对象
stage.addChild(gameView);

//绘制图形
//var s = new createjs.Shape();
//s.graphics.beginFill("#ff0000");
//s.graphics.drawRect(0,0,100,100);
//s.graphics.endFill();
//gameView.addChild(s);

//最开始方块是2*2的
var n = 2;

//添加方块的方法
function addRect(){
    //6位随机数颜色值
    var cl = parseInt(Math.random()*1000000);
    var clickCl = parseInt( (cl/1000000 + Math.random())*500000 + 123456);
//    var clickCl = cl + 11255;
    var color = "#" + cl;
    var clickColor = "#" + clickCl;

    //随机点击方块的坐标位置
    var x = parseInt(Math.random()*n);
    var y = parseInt(Math.random()*n);

    for(var indexX = 0;indexX < n;indexX++){
        for(var indexY = 0;indexY < n;indexY++){
            var r = new Rect(n,color,clickColor);
            gameView.addChild(r);
            r.x = indexX;
            r.y = indexY;
            if(r.x == x && r.y == y){
                r.setRectTye(2);
            }
            r.x = indexX*(400/n);
            r.y = indexY*(400/n);
            if(r.getRectTye() == 2){
                r.addEventListener("click",function(){
                    if(n<22){
                        ++n;
                    }
                    //点击之后清空上次的方块，再重新添加方块
                    gameView.removeAllChildren();
                    addRect();
                });
            }
        }
    }
}

//执行
addRect();



