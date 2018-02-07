//菜单
var BalloonSprite = cc.Sprite.extend({
	current_topics:null,
	ctor:function(){
		this._super();

		this.angle = [210,250,310,340,20,50,110,150];
		this.menuImgScollBgArr = [];
		this.menuitemNameArr = [];
		this.menuItem = [];
		var size = cc.winSize;
		
		var menuNameArr = ["MNEU1","MNEU2","MNEU3","MNEU4","MNEU5","MNEU6","MNEU7","MNEU8"];
		var locationArr = [
			{
				x:size.width/2 - 400,
				y:size.width/6 + 150,
				scale:0.6
			},
			{
				x:size.width/2 - 750,
				y:size.width/6 + 70,
				scale:0.7
			},
			{
				x:size.width/2 - 600,
				y:size.width/6 - 130,
				scale:0.8
			},{
				x:size.width/2 - 200,
				y:size.width/6 - 200,
				scale:1
			},{
				x:size.width/2 + 200,
				y:size.width/6 - 200,
				scale:1
			},{
				x:size.width/2 + 600,
				y:size.width/6 - 130,
				scale:0.8
			},{
				x:size.width/2 + 750,
				y:size.width/6 + 70,
				scale:0.7
			},{
				x:size.width/2 + 400,
				y:size.width/6 + 150,
				scale:0.6
			}
			
		]
		
		var self = this;
		var balloonHoverHandler = cc.EventListener.create({
			// event: cc.EventListener.MOUSE,
			// onMouseMove: function (event) {
			//event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			event: cc.EventListener.MOUSE,
			onMouseMove: function (event) {
				var pos = event.getLocation();
				var target = event.getCurrentTarget();  
				if ( cc.rectContainsPoint(target.getBoundingBox(),pos)) {
					//cc.log("touched")
					cc._canvas.style.cursor = 'pointer' ;
					return true;
				}
				return false;
			}
		});
		this.locationArr = locationArr;
		var menuImgBgArr = [];
		var menuItem = [];
		var menuitemNameArr = [];
		var menuImgScollBgArr = [];
		

		for(var i = 0; i < menuNameArr.length; i++){
			var temp = i;
			var startSpriteNormal = new cc.Sprite(res.menu_bg1);   
			var startSpriteSettNormal = new cc.Sprite(res.menu_bg); 
			menuImgBgArr[i] = new cc.MenuItemSprite(startSpriteNormal,startSpriteSettNormal, "", this);  
			menuImgScollBgArr[i] = new cc.MenuItemImage(res.menu_bg2, res.menu_bg2,  this.menuItemStartCallback, this); 
	
			menuitemNameArr[i] = cc.MenuItemFont.create(menuNameArr[i]);
			menuitemNameArr[i].setColor(cc.color(17,187,193))

			//菜单外圈旋转动画
			actionBy = cc.rotateBy(Math.round(Math.random() * 10), 360);
			actionByBack = actionBy.reverse();
			action = cc.sequence(actionBy, cc.delayTime(Math.random()), actionByBack).repeatForever();
			menuImgScollBgArr[i].runAction(action);

			menuItem[i] = new cc.Menu(menuImgBgArr[i],menuImgScollBgArr[i],menuitemNameArr[i]);
			menuItem[i].attr({
				x:locationArr[i].x,
				y:locationArr[i].y,
				anchorX:0,
				anchorY:0,
			});
			menuItem[i].index = i;
			menuItem[i].menuId = i;
			menuItem[i].setOpacity(1);
			var action1 = cc.fadeIn(1);
			var delay = cc.delayTime(locationArr[i].scale);
			
			this.addChild(menuItem[i], i);
			 menuItem[i].runAction(cc.sequence(delay,cc.scaleTo(0, locationArr[i].scale),action1.clone()));
			//menuItem[i].runAction(cc.sequence(cc.scaleTo(0, locationArr[i].scale),action1.clone(), delay.clone()));

			cc.eventManager.addListener(balloonHoverHandler.clone(), menuItem[i]);
		}
		// menuItem[0].runAction(cc.sequence(cc.scaleTo(0, locationArr[0].scale),action1.clone(), cc.delayTime(5)));
		// menuItem[1].runAction(cc.sequence(cc.scaleTo(0, locationArr[1].scale),action1.clone(), cc.delayTime(5)));
		// menuItem[2].runAction(cc.sequence(cc.scaleTo(0, locationArr[2].scale),action1.clone(), cc.delayTime(15)));
		// menuItem[3].runAction(cc.sequence(cc.scaleTo(0, locationArr[3].scale),action1.clone(), cc.delayTime(15)));
		// menuItem[4].runAction(cc.sequence(cc.scaleTo(0, locationArr[4].scale),action1.clone(), cc.delayTime(15)));
		// menuItem[5].runAction(cc.sequence(cc.scaleTo(0, locationArr[5].scale),action1.clone(), cc.delayTime(locationArr[5].scale * 5)));
		// menuItem[6].runAction(cc.sequence(cc.scaleTo(0, locationArr[6].scale),action1.clone(), cc.delayTime(locationArr[6].scale * 5)));
		// menuItem[7].runAction(cc.sequence(cc.scaleTo(0, locationArr[7].scale),action1.clone(), cc.delayTime(locationArr[7].scale * 5)));
		this.meunAction(menuItem);

		this.timeList = [];
	},
	addTouchEventListenser:function(){
		this.touchListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			//onTouchBegan event callback function                      
			onTouchBegan: function (touch, event) { 
				var pos = touch.getLocation();
				var target = event.getCurrentTarget();  
				if ( cc.rectContainsPoint(target.getBoundingBox(),pos)) {
					cc.log("touched")
					return true;
				}
				return false;
			}
		});
		cc.eventManager.addListener(this.touchListener,this);
		
	},
	menuSelect:function (index) {  
		var baseUrl = "http://127.0.0.1:8080/taxi-supervise/"
		switch(index){
			case 0:
				window.location.href = baseUrl + "comprehensive-application/index.html";
				break;
			case 1:
				window.location.href = baseUrl + "daily-monitor/index.html";
				break;
			case 2:
				window.location.href = baseUrl + "index/";
				break;
			case 3:
				window.location.href = baseUrl + "index/";
				break;
			case 4:
				window.location.href = baseUrl + "index/";
				break;
			case 5:
				window.location.href = baseUrl + "assistant-decision/index.html";
				break;
			case 6:
				window.location.href = baseUrl + "index/";
				break;
			case 7:
				window.location.href = baseUrl +  "index/";
				break;
			default :
				window.location.href = "taxi-supervise/index/";
				break;

		}

        cc.log("menuItemStartCallback!" + index);  
	},menuItemStartCallback:function (sender) { 
		var id = sender._parent.menuId; 
        this.menuSelect(id); 
    },  meunAction(target){
		this.target = target;
		this._center = cc.p(cc.winSize.width / 2, cc.winSize.height / 6 + 220);
		this._radius = cc.winSize.width / 4;
		
		this.a = 820;
		this.b = 170;
		this.arr=[];  
		for (var i = 0; i < 360; i++) {  
			x1=this.a*Math.sin((Math.PI/180)*i)+this._center.x,  
			y1=this._center.y-(this.b*Math.cos((Math.PI/180)*i));  
			this.arr[i]=[];  
			this.arr[i][0]=x1-2;  
			this.arr[i][1]=y1-2;  
		};  
		// this.arr.reverse();
		this.schedule(function(){
			this.scheduleOnce(this.turnAround, 3)
		}, 3)
		
		
		return true;
	},turnAround:function (node) {
		for(var k = 0; k < 8; k++){
			var target = this.target[k];
			this.beginIndex = target.index;
			this.begin = this.angle[this.beginIndex];
			
			if(target.index == 0){
				target.index = 8;
			}
			
			this.endIndex = target.index - 1;
			this.end = this.angle[target.index - 1];
			
			var funArr = [];
			var actionArr = [];
			if(this.end > this.begin){
				var animateTimeTotal = (360 - this.end) + this.begin;
				var itemTime = 0.02;
				for(var i = this.begin; i < 0; i--){
					var action = cc.moveTo(itemTime, cc.p(this.arr[i][0], this.arr[i][1]));
					actionArr.push(action.clone());
				}
				for(var i = 359; i > this.end; i--){
					var action = cc.moveTo(itemTime, cc.p(this.arr[i][0], this.arr[i][1]));
					actionArr.push(action.clone());
				}
			}else{
				var animateTimeTotal =  this.begin - this.end;
				var itemTime = 0.01;
				for(var i = this.begin; i > this.end; i--){
					actionArr.push(cc.moveTo(itemTime, cc.p(this.arr[i][0], this.arr[i][1])).clone());
				}
			}
			var actionTo = cc.scaleTo(0.01, this.locationArr[this.endIndex].scale);
			actionArr.unshift(actionTo.clone());
			
			target.index = this.endIndex;
			target.runAction(cc.sequence(actionArr));

		}

		return true;
	}
});
