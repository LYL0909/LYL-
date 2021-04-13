var imgWidth = 120;
var imgHeight = 170;
var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;

var oSpin = document.getElementById("spin-container");
var oDark = document.getElementById("dark-container");
var oGround = document.getElementById("ground");
var aImg = document.getElementsByTagName("img");
var aVid = document.getElementsByTagName("video");
var aEle = [...aImg,...aVid];

console.log(oSpin);//拿到DOM结构
console.log(aImg);

oSpin.style.width = imgWidth + "px";
oSpin.style.height = imgHeight + "px";

oGround.style.width = radius*3 + "px"; 
oGround.style.height = radius*3 + "px"; 

function init(delayTime) {
    // 给所有的图片加动画
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
    }
  }

setTimeout(init,1000);

//让图片旋转起来
if (autoRotate){
    var animationName = (rotateSpeed > 0 ? "spin" : "spinRevert");
    oSpin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

//滚轮滚动
document.onmousewheel = function(e) {
    // console.log(e);
    e = e || window.event
    var d = e.wheelDelta /2 || -e.detail;//wheelDelta滚轮滚动的轴长 缩小2倍
    radius += d;
    init(1)
}

var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 0;

//鼠标拖动页面
document.onpointerdown = function(e) {
    // console.log(e);
    e = e || window.event;
    var mouseX = e.clientX,//鼠标点击时x的坐标
        mouseY = e.clientY;

    this.onpointermove = function(e) {
        console.log(e);
        e = e || window.event;
        var nX = e.clientX,//鼠标移动时x的坐标
            nY = e.clientY;

        desX = nX - mouseX;//计算鼠标在x轴划过的距离
        desY = nY - mouseY;

        tX += desX*0.1;
        tY += desY*0.1;
    //让页面跟着鼠标动起来
    applyTransform(oDark);
    }

    this.onpointerup = function(e) {
        oDark.timer = setInterval(function(){
            desX *=0.95;
            desY *=0.95;
            tX += desX*0.1;
            tY += desY*0.1;
            applyTransform(oDark);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
                clearInterval(oDark.timer);
            }
            playSpin(true);
            
        },17);
        this.onpointermove = this.onpointerup = null;//鼠标滑动不生效
    }

    return false;
}

function applyTransform(obj) {
    if(tY > 180) tY = 180;
    if(tY < 0) tY = 0;

    obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;

}

function playSpin(yes) {
    oSpin.style.animationPlayState = (yes ? "running" : "paused")
}
