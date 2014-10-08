/**
 * Created by Vane_Ever on 14-8-5.
 */

/**
 *
 * @param n 方块个数
 * @param color 方块颜色
 * @constructor
 */
function Rect(n,color,clickColor){
    createjs.Shape.call(this);

    this.setRectTye = function(type){
        this._RectType = type;
        switch (type){
            case 1:
                this.setColor(color);
                break;
            case 2:
//                this.setColor("#ff0000");
                this.setColor(clickColor);
                break;
        }
    }

    this.setColor = function(colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        this.graphics.endFill();
    }

    this.getRectTye=function(){
        return this._RectType;
    }

    this.setRectTye(1);

}
Rect.prototype = new createjs.Shape();
