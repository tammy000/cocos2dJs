//菜单
var roundSprite = cc.Sprite.extend({
	ctor:function(){
		this._super();
        var winSize = cc.director.getWinSize();
        this._winSize = winSize;
        var to1 = cc.sequence(cc.progressTo(1, 100));
        var round = new cc.ProgressTimer(new cc.Sprite(res.round_enter));
        round.type = cc.ProgressTimer.TYPE_BAR;
        round.midPoint = cc.p(0, 1);
        round.barChangeRate = cc.p(0, 1);
        round.attr({
                x:70,
                y:60,
                anchorX:0,
                anchorY:0
            });
        this.addChild(round,0);
        round.runAction(to1);

        var winSize = cc.director.getWinSize();
        this._winSize = winSize;
        // this.sprite1 = new cc.MotionStreak(2.0, 10.0, 100.0, cc.color(255, 255, 255), res.guangxiao);
        // this.sprite1.x = winSize.width;
        // this.sprite1.y = winSize.height;
        // this.addChild(this.sprite1);
        // renderTexture.setAutoDraw(true);
        
        // Toggle clear on / off
        
        this.guangxiao1 = new cc.Sprite(res.guangxiao);
		this.guangxiao1.attr({
			x:winSize.width/2-400,
			y:winSize.height/2 + 50,
			anchorX:0,
			anchorY:0
		});
        this.addChild(this.guangxiao1,2);
        this.guangxiao2 = new cc.Sprite(res.guangxiao);
		this.guangxiao2.attr({
			x:winSize.width/2-400,
			y:winSize.height/2 + 50,
			anchorX:0,
			anchorY:0
		});
        this.addChild(this.guangxiao2,2);
        this.scheduleOnce(this.update);
    },
    update:function (dt) {
        var r = 280;
        this.a = 820;
		this.b = 170;
        var locWinSize = this._winSize;
        
        var actionArr = [];
        for(var i = 180; i < 360; i++){
            var x = this.a*Math.sin((Math.PI/180)*i)+locWinSize.width /2 - 400;
            var y = locWinSize.height /2-120-(this.b*Math.cos((Math.PI/180)*i));
            actionArr.push(cc.moveTo(0.004, cc.p(x, y)));
        }
        this.guangxiao1.runAction(cc.sequence(actionArr));
        for(var i = 180; i > 0; i--){
            // var action = 
            var x = this.a*Math.sin((Math.PI/180)*i)+locWinSize.width /2 - 400;
            var y = locWinSize.height /2-120-(this.b*Math.cos((Math.PI/180)*i));
            actionArr.push(cc.moveTo(0.004, cc.p(x, y)));
        }
        //this.sprite1.runAction(cc.sequence(actionArr));
        this.guangxiao2.runAction(cc.sequence(actionArr));


    }
});

