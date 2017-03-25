/**
 * Created by Li Shuyi on 2016/10/15.
 */
function $(id){ return document.getElementById(id)}
var box = $("box");
//var imgWidth = 20;
var leader = 0,target = 0;
var sliderul = $("slider-img-ul");
//动画实现图片切换和当前小圆点的背景颜色变换
var num = null;
var circles = $("circle-ul").childNodes;
function animate() {
    if(target > 0)
    {
        target = -3160;
    }
    else if(target < -3160)
    {
        target = 0;
    }
    setInterval(function(){
        leader = leader + (target - leader) / 10;
        sliderul.style.left = leader + 'px';},15)

    num = parseInt(-target/790);
    //清除所有颜色
    for ( var j = 0;j <circles.length; j++){
        circles[j].className = "" ;
    }
    circles[num].className = "current";
}
//图片切换

  //小圆点切换图片
      //经过小圆点时,图片自动切换到当前索引,同时小圆点背景颜色改变(注,点击小三角和轮播图时,当前索引的小圆点背景也需改变)
//var circles = $("circle-ul").childNodes;
//alert(circles.length)
//var  index = null;
for (var i = 0; i <circles.length ; i++) {
    //index = i;
    circles[i].index = i;
    circles[i].addEventListener('click', function () {
        target = -this.index * 790;
            clearInterval(timer);
           animate();
          timer = setInterval(autoplay,4000);
    })
}
     //三角切换图片
$("left").addEventListener('click',function(){
    target +=790;
    //alert("触发");
    clearInterval(timer);
    animate();
    //点击到当前页后重新定时
    //先终止，再重新开启定时

    // setTimeout(function(){ timer = setInterval(autoplay,4000);}
    //     ,4000);
     timer = setInterval(autoplay,4000);
})
//$("left").addEventListener('onmouseenter',function(){
//    this.style.background = "black";
//})

$("right").addEventListener('click',function(){
    target -=790;
    clearInterval(timer);
    animate();
    timer = setInterval(autoplay,4000);
})
   //轮播
var slider = $("slider");
//var sliderul = $("slider-img-ul");
var timer = null;
 function autoplay(){
target -=790;
     animate();
}
timer = setInterval(autoplay,4000);
//$("slider-img-ul").addEventListener("onmouseover",function(){
//    clearInterval(timer);
//    //alert("鼠标经过")
//})
$("slider-img-ul").onmouseover = function(){
    clearInterval(timer);
}

$("slider-img-ul").onmouseout = function(){
    timer = setInterval(autoplay,4000);
}




