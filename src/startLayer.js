var StartLayer = cc.Layer.extend({
	ctor:function () {
		this._super();
		this.setContentSize(cc.winSize);
		var size = cc.winSize;
		//	背景图片
		var bg = new cc.Sprite(res.bg);
		bg.attr({
			x:0,
			y:0,
			anchorX:0,
			anchorY:0
		});
		this.addChild(bg,0);
		var sprite = new cc.Sprite(res.logo_light)
		sprite.attr({
			x:size.width/2,
			y:size.height/2 + 70,
			
		})
		this.addChild(sprite, 1);
		// var logo = new cc.Sprite(res.logo);
		// logo.attr({
		// 	x:size.width/2 - 190,
		// 	y:size.height/2 - 100,
		// 	anchorX:0,
		// 	anchorY:0
		// });
		// this.addChild(logo,2);
		

		this.roundSprite = new roundSprite();
		// this.balloonSprite.setPosition(GC.w2, GC.h2);
		this.addChild(this.roundSprite,0);
		this.balloonSprite = new BalloonSprite();
		// this.balloonSprite.setPosition(GC.w2, GC.h2);
		this.addChild(this.balloonSprite,0);
		return true;
	}
});



var StartScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new StartLayer();
		this.addChild(layer);
	}
});