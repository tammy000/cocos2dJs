# cocos2dJs
使用cocos2d.js做了一个菜单定时滚动的，炫酷开场动画效果
_____
## 主要内容
开场一个快速光球带动光圈从两侧往中间聚合成为了一个椭圆形的光圈，使之看起来有了3d倾斜的效果，然后依顺序出现8个菜单，菜单自带一个随机旋转的指向性光圈，8个菜单根据这个椭圆形的光圈轨迹滑动，每隔一段时间滑动一格的距离；<br/>整体的大概效果就是这样的了。
_____

## 开发条件
电脑：一台具有显卡的电脑<br/>
IDE: cocos code(此IDE自带了服务器，直接在ide中运行即可)
_____

## 注意事项
1，cocos2d.js的api关于代码的api说明极少，并且很散乱，所以开发过程中，我是通过，在示例中找到对应方法，再去百度该方法从而了解这个方法的属性；<br/>
2，cocos code的使用并不算十分顺畅，遇到实在是无法解决了，我便放弃了，把这个ide自动生成的项目结构拷到其他的ide中，但用node服务启动该项目，也可以完成开发；<br/>
3，cocos2d.js使用配置时，可能会遇到配置类问题，可以通过百度，去一览百度答案，有些解决方案，其实只是一个提示，需要自己去试用，才知道究竟能不能解决。<br/>
_____

## 相关链接
1，Cocos Code IDE 1.2.0 Win32 下载地址：<br/>
     http://www.cocos2d-x.org/filedown/cocos-code-ide-win32-1.2.0.exe; <br/><br/>
2， Cocos Code IDE 1.2.0 Win64 下载地址：<br/>
     http://www.cocos2d-x.org/filedown/cocos-code-ide-win64-1.2.0.exe ;<br/><br/>
3，Cocos Code IDE 1.2.0 Mac 下载地址：<br/>
  http://www.cocos2d-x.org/filedown/cocos-code-ide-mac64-1.2.0.dmg;  <br/><br/><br/>
4，贴图打包工具texturepacker：<br/>
    我之前的是mac版本的，这个是windows版本的，我没试过<br/>
     http://www.cr173.com/soft/65767.html ; <br/><br/>
5， 库文件<br/>
   3.3版本的cocos2d-js http://www.cocos2d-x.org/filedown/cocos2d-js-v3.3-rc0.zip ;<br/><br/>
6，开发在线API<br/>
     http://www.cocos.com/docs/js/index.html ;  <br/><br/>
7,调试神器Cocos DevTools<br/>
    chrome里添加书签，网址填写：<br/>
javascript:void(function(d,a,c,b)%7B!d%5Bc%5D%26%26(typeof%20d%5Bc%5D%3D%3D%27undefined%27)%26%26(b%3Da.createElement(%27script%27),b.id%3D%27cocos_devtools_script%27,b.setAttribute(%27charset%27,%27utf-8%27),b.src%3D%27http://h5apps.appget.cn/static/js/cocos-devtools-web.min.js%3F%27%2BMath.floor(%2Bnew%20Date),a.body.appendChild(b))%7D(window,document,%27_cocos_devtools%27))%3B <br/><br/>
8,官方demo<br/>
基本基础的一些都可以在demo中找到，建议多熟悉demo有哪些功能<br/>
http://cocos2d-x.org/js-tests/ <br/>

## 项目预览
演示项目效果，需要用服务来启动该项目，然后访问服务地址即可；

![](https://github.com/tammy000/cocos2dJs/raw/master/pic1.png) 
![](https://github.com/tammy000/cocos2dJs/raw/master/pic0.png) 
